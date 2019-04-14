import { Component, OnInit, Input, DoCheck, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { IBoard, ILane, ICard } from 'src/app/ui/components/kanban-board/kanban-board.interfaces';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss']
})
export class KanbanBoardComponent implements OnInit, DoCheck {
  @Input() board: IBoard;
  @Input() disabled = false;
  @Input() save: (board: IBoard, form: FormGroup) => Promise<IBoard>;
  @Input() delete: (board: IBoard) => Promise<never>;
  @Input() addLane: (board: IBoard) => Promise<ILane>;
  @Input() addCard: (lane: ILane) => Promise<ICard>;
  @Input() saveLane: (lane: ILane, form: FormGroup) => Promise<ILane>;
  @Input() saveCard: (card: ICard, form: FormGroup) => Promise<ICard>;
  @Input() deleteCard: (card: ICard) => Promise<never>;
  @Input() deleteLane: (lane: ILane) => Promise<never>;

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
      this.save(board, boardForm);
      this.isEditing = false;
    } catch {}
  }
}
