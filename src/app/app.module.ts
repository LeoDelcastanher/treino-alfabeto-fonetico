import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlfaComponent } from './alfa/alfa.component';
import { QuestionBoxComponent } from './directives/question-box/question-box.component';

@NgModule({
  declarations: [
    AppComponent,
    AlfaComponent,
    QuestionBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
