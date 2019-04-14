import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanBoardComponent } from './kanban-board.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LaneComponent } from 'src/app/ui/components/kanban-board/lane/lane.component';

describe('KanbanBoardComponent', () => {
  let component: KanbanBoardComponent;
  let fixture: ComponentFixture<KanbanBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        KanbanBoardComponent,
        LaneComponent
      ],
      imports: [ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanbanBoardComponent);
    component = fixture.componentInstance;
    component.board = {
      name: 'board',
      lanes: []
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    const h2 = fixture.nativeElement.querySelector('h2');
    expect(h2.innerText).toContain('board');
  });
});
