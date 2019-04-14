import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

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

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss']
})
export class KanbanBoardComponent implements OnInit, DoCheck {
  @Input() board: IBoard;
  @Input() disabled = false;
  @Input() onSave: (board: IBoard, form: FormGroup) => Promise<IBoard>;
  @Input() onDelete: (board: IBoard) => Promise<never>;
  @Input() onAddLane: (board: IBoard) => Promise<ILane>;
  @Input() onAddCard: (lane: ILane) => Promise<ICard>;
  @Input() onSaveLane: (lane: ILane, form: FormGroup) => Promise<ILane>;
  @Input() onSaveCard: (card: ICard, form: FormGroup) => Promise<ICard>;
  @Input() onDeleteCard: (card: ICard) => Promise<never>;
  @Input() onDeleteLane: (lane: ILane) => Promise<never>;

  isEditing = false;
  boardForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.boardForm = this.fb.group({
      name: [this.board.name, Validators.required]
    });
  }

  ngDoCheck() {
    if (this.isEditing && this.disabled || this.board.disabled) {
      this.isEditing = false;
    }
  }

  async submit(board: IBoard, boardForm: FormGroup) {
    try {
      this.onSave(board, boardForm);
      this.isEditing = false;
    } catch {}
  }
}
