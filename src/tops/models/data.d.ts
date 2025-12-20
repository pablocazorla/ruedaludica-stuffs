export interface TopElement {
  num: number;
  title: string;
  bgg_id: string;
  author: string;
  artist: string;
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
