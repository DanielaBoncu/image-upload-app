import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryTableComponent } from './history-table/history-table.component';
import { ImageCardComponent } from './image-card/image-card.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'history', component:HistoryTableComponent},
  {path:'upload', component:ImageCardComponent},
  {path:'**', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
