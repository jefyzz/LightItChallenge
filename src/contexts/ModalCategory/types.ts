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
  selectedItems?: APIItemResponse;
  setSelectedItems: React.Dispatch<React.SetStateAction<APIItemResponse | undefined>>;
  fetchCategories: (category: Category) => void;
}

export type Category = "aberturas" | "equipamiento" | "terminaciones";
