export interface ICard {
  name: string;
  description?: string;
  disabled?: boolean;
}

export interface ILane {
  name: string;
  description?: string;
  disabled?: boolean;
  cards: ICard[];
}

export interface IBoard {
  name: string;
  description?: string;
  disabled?: boolean;
  lanes: ILane[];
}
