import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { ILane, ICard } from 'src/app/ui/components/kanban-board/kanban-board.interfaces';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-kanban-board-lane',
  templateUrl: './lane.component.html',
  styleUrls: ['./lane.component.scss']
})
export class LaneComponent implements OnInit, DoCheck {
  @Input() lane: ILane;
  @Input() disabled: boolean;
  @Input() save: (lane: ILane, laneForm: FormGroup) => Promise<ILane>;
  @Input() delete: (lane: ILane) => Promise<ILane>;
  @Input() addCard: (lane: ILane) => Promise<ICard>;
  @Input() saveCard: (card: ILane) => Promise<ICard>;
  @Input() deleteCard: (lane: ICard, card: ILane) => Promise<ICard>;

  laneForm: FormGroup;
  isEditing = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.laneForm = this.fb.group({
      name: [this.lane.name, Validators.required]
    });
  }

  ngDoCheck() {
    if (this.isEditing && this.disabled || this.lane.disabled) {
      this.isEditing = false;
    }
  }

  async submit(lane: ILane, laneForm: FormGroup) {
    try {
      await this.save(lane, laneForm);
      this.isEditing = false;
    } catch {}
  }
}
