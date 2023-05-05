import { ICategory } from '../../config/interface/interface';

export interface IRootReducer {
  loggedStatus: boolean;
  categoriesList: ICategory[];
  tableList: Array<string>;
  tableItems: ICategory[];
  type: string;
}

export interface IInput {
  onValue?: (value: string) => void;
  type?: string;
  required?: boolean;
  readonly?: boolean;
  className?: string;
  titleInput?: string;
  id?: string | undefined;
  style?: any;
  name?: string;
  value?: string;
  width?: string;
}

export interface IUserStatus {
  loggedStatus: boolean;
}

export interface IUserSignIn {
  mail: string;
  password: string;
}

export interface IButton {
  onClick?: any;
  title: string;
  className?: string;
  style?: any;
  width?: string;
}

export interface IModalReducer {
  isOpen: boolean;
  type: string;
  onClose: () => void;
  children: React.ReactNode;
}

export interface IModal {
  title: string;
  style: any;
  className: string;
}

export interface ITableItem {
  id: number;
  production?: string;
  shop?: string;
  plot?: string;
  floor?: number;
  room?: string;
  date?: string;
  responseTime?: string;
  employeeName?: string;
  count?: number;
}

export interface ITable {
  title?: string;
  className?: string;
  width?: string;
  tableList: Array<string>;
  children?: React.ReactNode;
}
