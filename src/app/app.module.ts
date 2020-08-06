import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NewsApiService } from './news-api.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule } from '@angular/material';

import { AppComponent } from './app.component';
import { LoginComponent } from '../app/login/login.component';
import { NewsContentComponent } from './news-content/news-content.component';
import { RoutingModule } from './routing/routing.module';
import { NewsContentModule } from './news-content/news-content.module';
import { LoginModule } from './login/login.module';
import { RegisterationModule } from './registeration/registeration.module';
import { FormsModule } from '@angular/forms';
import { RegisterationComponent } from './registeration/registeration.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,

    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,

    RoutingModule,
    RouterModule,
    LoginModule,
    RegisterationModule,
    NewsContentModule
  ],
  providers: [NewsApiService],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
  bootstrap: [AppComponent]
})

export class AppModule { }
//
