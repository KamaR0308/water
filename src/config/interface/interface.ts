export interface ISearch {
  title: string;
  onChange: (value: string) => void;
  defaultValue?: string;
  style?: {
    background?: string;
    color?: string;
    fontSize?: string;
  };
}

export interface ICategoriesList {
  categories: ICategory[];
}

export interface ICategory {
  title: string;
  src: string;
}
