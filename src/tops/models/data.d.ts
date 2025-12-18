export interface TopElement {
  num: number;
  title: string;
  description: string;
  images: string[];
  players: string;
  duration: string;
  age: number;
  weight: number;
  year: number;
}

export interface AccesitElement {
  title: string;
  img: string;
}

export interface Data {
  title: string;
  accesit: AccesitElement[];
  list: TopElement[];
}
