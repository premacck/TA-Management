import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdButtonModule,
  MdCardModule,
  MdIconModule,
  MdMenuModule,
  MdToolbarModule,
  MdSelectModule,
  MdTabsModule,
  MdTooltipModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {DndModule, DragDropService, DragDropConfig} from 'ng2-dnd';
import { ProfessorComponent } from './professor/professor.component';
import { LoginComponent } from './login/login.component';
import { DataService } from './data.service';
import { Proflogin2Component } from './proflogin2/proflogin2.component';
import { StarRatingModule } from 'angular-star-rating';

export const ROUTES: Routes = [
  {path: 'login', pathMatch: 'full', component: LoginComponent},
  {path: 'prof', component: ProfessorComponent},
  {path: 'proflogin2', component: Proflogin2Component}
];

@NgModule({
  declarations: [
    AppComponent,
    ProfessorComponent,
    LoginComponent,
    Proflogin2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    MdButtonModule,
    MdToolbarModule,
    MdCardModule,
    MdIconModule,
    MdTabsModule,
    MdTooltipModule,
    FormsModule,
    FlexLayoutModule,
    DndModule.forRoot(),
    MdMenuModule,
    MdSelectModule,
    StarRatingModule.forRoot()
  ],
  providers: [DragDropService, DragDropConfig, DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
