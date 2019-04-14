import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaneComponent } from './lane.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from 'src/app/ui/components/kanban-board/card/card.component';

describe('LaneComponent', () => {
  let component: LaneComponent;
  let fixture: ComponentFixture<LaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LaneComponent,
        CardComponent
      ],
      imports: [ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaneComponent);
    component = fixture.componentInstance;
    component.lane = {
      name: 'lane',
      cards: []
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    const h2 = fixture.nativeElement.querySelector('h2');
    expect(h2.innerText).toContain('lane');
  });
});
