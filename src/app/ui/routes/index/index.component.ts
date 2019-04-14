import { Component, OnInit } from '@angular/core';
import { IBoard, ILane, ICard } from 'src/app/ui/components/kanban-board/kanban-board.component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  board: IBoard = {
    name: 'board 1',
    lanes: [
      {
        name: 'lane 1',
        cards: [{ name: 'card 1' }]
      },
      {
        name: 'lane 2',
        cards: [{ name: 'card 1' }]
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

  addCard(lane: ILane) {
    const card: ICard = { name: 'new card' };
    lane.cards.push(card);
  }

  addLane(board: IBoard) {
    const lane: ILane = { name: 'new lane', cards: [] };
    board.lanes.push(lane);
  }

  save(todoItem: IBoard | ILane | ICard, form: FormGroup) {
    Object.assign(todoItem, form.value);
  }

  deleteBoard() {
    console.log('nothing!');
  }

  deleteCard(lane: ILane, card: ICard) {
    const index = lane.cards.indexOf(card);
    lane.cards.splice(index, 1);
  }

  deleteLane(board: IBoard, lane: ILane) {
    const index = board.lanes.indexOf(lane);
    board.lanes.splice(index, 1);
  }
}
