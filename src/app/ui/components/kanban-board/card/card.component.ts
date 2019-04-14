import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ICard } from 'src/app/ui/components/kanban-board/kanban-board.interfaces';

@Component({
  selector: 'app-kanban-board-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, DoCheck {
  @Input() card: ICard;
  @Input() disabled: boolean;
  @Input() save: (card: ICard, cardForm: FormGroup) => Promise<ICard>;
  @Input() delete: (card: ICard) => Promise<ICard>;

  cardForm: FormGroup;
  isEditing = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.cardForm = this.fb.group({
      name: [this.card.name, Validators.required]
    });
  }

  ngDoCheck() {
    if (this.isEditing && this.disabled || this.card.disabled) {
      this.isEditing = false;
    }
  }

  async submit(card: ICard, cardForm: FormGroup) {
    try {
      await this.save(card, cardForm);
      this.isEditing = false;
    } catch {}
  }

}
