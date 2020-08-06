import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsContentComponent } from './news-content.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from '../routing/routing.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
   

    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,

    RoutingModule


  ],
 
  declarations: [NewsContentComponent]
})
export class NewsContentModule {
  
 }
