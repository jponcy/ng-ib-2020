export interface Game {
  name: string;
  genre: string;
  coverImg: string;
  editor: string;
  description: string;
  note: number;
}

export enum GameListActions {
  FOLLOW = 'follow', SHARE = 'share', BUY = 'buy'
}
