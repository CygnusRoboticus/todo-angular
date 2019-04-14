import { Component, OnInit, Output, Input } from '@angular/core';
import { ILane, ICard, IBoard } from 'src/app/ui/components/kanban-board/kanban-board.interfaces';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-kanban-board-provider',
  templateUrl: './kanban-board-provider.component.html',
  styleUrls: ['./kanban-board-provider.component.scss']
})
export class KanbanBoardProviderComponent implements OnInit {

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
