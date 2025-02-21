import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppComponent} from './app.component';
import {ContentModule} from './content/content.module';
import {LayoutModule} from './shared/layout/layout.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    ContentModule,
    LayoutModule
  ]
})
export class AppModule { }
