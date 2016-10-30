import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TrainingAppTitle } from './app.component';

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [TrainingAppTitle],
    bootstrap: [TrainingAppTitle]
})
export class AppModule { }
