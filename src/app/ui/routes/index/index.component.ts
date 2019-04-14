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
    description: 'a board of lanes and cards',
    lanes: [
      {
        name: 'lane 1',
        description: 'lane of cool cards',
        cards: [{ name: 'card 1', description: 'skirts' }]
      },
      {
        name: 'lane 2',
        description: 'lane of less cool cards',
        cards: [{ name: 'card 1', description: 'pants' }]
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
