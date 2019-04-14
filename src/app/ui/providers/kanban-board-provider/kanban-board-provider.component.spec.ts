import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanBoardProviderComponent } from './kanban-board-provider.component';

describe('KanbanBoardProviderComponent', () => {
  let component: KanbanBoardProviderComponent;
  let fixture: ComponentFixture<KanbanBoardProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KanbanBoardProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanbanBoardProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
