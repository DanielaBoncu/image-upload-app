import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ImageCardComponent } from './image-card/image-card.component';
import { HeaderComponent } from './header/header.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input'; 
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { HistoryTableComponent } from './history-table/history-table.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ImageCardComponent,
    HeaderComponent,
    HistoryTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
