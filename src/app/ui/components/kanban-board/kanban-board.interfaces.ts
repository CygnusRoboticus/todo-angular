export interface ICard {
  name: string;
  disabled?: boolean;
}

export interface ILane {
  name: string;
  disabled?: boolean;
  cards: ICard[];
}

export interface IBoard {
  name: string;
  disabled?: boolean;
  lanes: ILane[];
}
