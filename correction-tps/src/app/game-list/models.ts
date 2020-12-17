export interface Game {
  id: number|null;
  name: string;
  genre: string;
  coverImg: string;
  editor: string;
  description: string;
  note: number;
}

export enum GameListActions {
  FOLLOW = 'follow', SHARE = 'share', BUY = 'buy', EDIT = 'edit'
}

export interface GameListFilter {
  name: string;
  genre: string;
  editor: string;
}
