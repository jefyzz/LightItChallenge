import React, {
  createContext,
  type ReactNode,
  useState,
  useEffect,
} from "react";
import {
  APIItem,
  APIItemResponse,
  CategoriesState,
  Category,
  type ModalCategoryContextValue,
} from "./types";

const initialState: ModalCategoryContextValue = {
  selectedCategory: "aberturas",
  setSelectedCategory: function () {
    throw new Error("Function not implemented.");
  },
  isLoading: false,
  categories: {
    aberturas: undefined,
    equipamiento: undefined,
    terminaciones: undefined,
  },
  setSelectedItems: function () {
    throw new Error("Function not implemented.");
  },
  selectedItems: undefined,
  fetchCategories: function (category: Category): void {
    throw new Error("Function not implemented.");
  },
};

export const ModalCategoryContext =
  createContext<ModalCategoryContextValue>(initialState);

export function ModalCategoryProvider({ children }: { children: ReactNode }) {
  const [selectedCategory, setSelectedCategory] =
    useState<Category>("aberturas");
  const [categories, setCategories] = useState<CategoriesState>({
    aberturas: undefined,
    equipamiento: undefined,
    terminaciones: undefined,
  });
  const [selectedItems, setSelectedItems] = useState<APIItemResponse | undefined>(
    undefined
  );
  const [isCategoriesLoading, setIsCategoriesLoading] = useState(false);

  const fetchCategories = async (category: Category) => {
    try {
      setIsCategoriesLoading(true);
      const response = await fetch(
        `https://us-central1-prueba-front-280718.cloudfunctions.net/${category}`
      );
      const parsedResponse = (await response.json()) as APIItemResponse[];
      setCategories((currentCat) => ({
        ...currentCat,
        [category]: parsedResponse,
      }));
    } catch (error) {
      console.error(error, "Error");
    } finally {
      setIsCategoriesLoading(false);
    }
  };

  useEffect(() => {
    if (!categories[selectedCategory] && !isCategoriesLoading) {
      fetchCategories(selectedCategory);
    }
  }, [selectedCategory]);

  return (
    <ModalCategoryContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        selectedItems,
        setSelectedItems,
        categories,
        isLoading: isCategoriesLoading,
        fetchCategories,
      }}
    >
      {children}
    </ModalCategoryContext.Provider>
  );
}
