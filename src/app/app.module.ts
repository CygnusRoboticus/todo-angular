import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './ui/routes/index/index.component';
import { KanbanBoardComponent } from './ui/components/kanban-board/kanban-board.component';
import { LaneComponent } from './ui/components/kanban-board/lane/lane.component';
import { CardComponent } from './ui/components/kanban-board/card/card.component';
import { StackerComponent } from './ui/components/stacker/stacker.component';
import { LogPipe } from './ui/pipes/log.pipe';
import { KanbanBoardProviderComponent } from './ui/providers/kanban-board-provider/kanban-board-provider.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    KanbanBoardComponent,
    LaneComponent,
    CardComponent,
    LogPipe,
    StackerComponent,
    KanbanBoardProviderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
