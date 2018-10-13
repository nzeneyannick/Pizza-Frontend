import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PizzaListComponent }      from '../pizza-list/pizza-list.component';
import { DetailPizzaComponent }      from '../detail-pizza/detail-pizza.component';
const routes: Routes = [
  { path: '', redirectTo: 'pizzas', pathMatch: 'full'},
  { path: 'pizzas', component:  PizzaListComponent},
  { path: 'pizzas/:id', component:  DetailPizzaComponent} 
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
