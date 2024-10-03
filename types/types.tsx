import { Dispatch, SetStateAction } from "react";
import { ImageSourcePropType } from "react-native";
import { SharedValue } from "react-native-reanimated";

export interface ScreenButtonProps {
  buttonText?: string;
  onPress?: () => void;
}

export interface ScreenContainerProps {
  children: React.ReactNode;
  center?: boolean;
  topCenter?: boolean;
}

export interface ContainerProps {
  center?: boolean;
  topCenter?: boolean;
}

export interface ScreenCardProps {
  cardImageSrc?: any; //#TODO:REMOVE ANY
  description?: string;
  urlToArticle?: any; //#TODO:REMOVE ANY
}

export interface ScreenHeaderProps {
  children: React.ReactNode;
  padding?: boolean;
  backgroundColor?: boolean;
  textCenter?: boolean;
  small?: boolean;
  spaceTop?: boolean;
}

export interface ScreenHeaderContainerProps {
  padding?: boolean;
  backgroundColor?: boolean;
}

export interface SectionContainerProps {
  children: React.ReactNode;
  center?: boolean;
}

export interface ShoppingCartProps {
  children: React.ReactNode;
}

export interface ShoppingCartContextProps {
  shoppingCart: DataProps[] | [];
  setShoppingCart: Dispatch<SetStateAction<DataProps[]>>;
  onRemovePress: (item: DataProps) => void;
  onItemPress: (item: DataProps) => void;
}

export interface DataProps {
  id: string;
  item: string;
  quantity: number;
  image: ImageSourcePropType | undefined;
}

export interface ShoppingItemProps {
  data: DataProps[];
  onPress?: () => void;
  shoppingList?: boolean;
}

export interface SelectionContainerProps {
  selected?: boolean;
}

export interface ItemsDetailContainerProps {
  space?: boolean;
  selected?: boolean;
  width?: SharedValue<number>;
}

export interface ScreenHeaderTextProps {
  textCenter?: boolean;
  small?: boolean;
  spaceTop?: boolean;
}

export interface SelectedItemProps {
  selectedItemText?: string;
  onPress?: () => void;
}

export interface ArticlesSourceProps {
  id: string | null;
  name: string;
}
export interface NewsDataProps {
  source: ArticlesSourceProps;
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: ImageSourcePropType | undefined;
  publishedAt: string;
  content: string;
}
