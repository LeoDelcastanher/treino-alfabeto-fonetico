import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AlfaComponent} from "./alfa/alfa.component";

const routes: Routes = [
  {
    path: '', component: AlfaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
