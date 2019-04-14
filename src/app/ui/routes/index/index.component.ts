import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IBoard, ILane, ICard } from 'src/app/ui/components/kanban-board/kanban-board.interfaces';

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

}
