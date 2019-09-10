import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodosComponent } from './components/todos/todos.component';
import { AboutComponent } from './components/pages/about/about.component';
import { AutoCompleteComponent } from './components/auto-complete/auto-complete.component';

const routes: Routes = [
  { path: '', component: TodosComponent},
  { path: 'about', component: AboutComponent},
  { path: 'search', component: AutoCompleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
