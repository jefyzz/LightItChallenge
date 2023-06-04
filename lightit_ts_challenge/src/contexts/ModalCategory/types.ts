export interface APIItem {
  name: string;
  img: string;
}

export interface APIItemResponse {
  name: string;
  items: APIItem[];
}

export type CategoriesState = {
  aberturas?: APIItemResponse[];
  equipamiento?: APIItemResponse[];
  terminaciones?: APIItemResponse[];
};

export interface ModalCategoryContextValue {
  categories: CategoriesState;
  selectedCategory: Category;
  setSelectedCategory: React.Dispatch<React.SetStateAction<Category>>;
  isLoading: boolean;
  selectedItems?: APIItem[];
  setSelectedItems: React.Dispatch<React.SetStateAction<APIItem[] | undefined>>;
  fetchCategories: (category: Category) => void;
}

export type Category = "aberturas" | "equipamiento" | "terminaciones";
