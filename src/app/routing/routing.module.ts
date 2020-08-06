import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegisterationComponent } from '../registeration/registeration.component';

import { SecurityGuard } from './security.guard';
// import { NewsIndiaComponent } from '../news-content/news-india/news-india.component';
import { LoginModule } from '../login/login.module';
import { RegisterationModule } from '../registeration/registeration.module';
import { NewsContentComponent } from '../news-content/news-content.component';
import { NewsContentModule } from '../news-content/news-content.module';
// import { NewsToolbarComponent } from '../news-content/news-toolbar/news-toolbar.component';


const route:Routes=[{path:"login",component:LoginComponent},
  {path:"registeration",component:RegisterationComponent},
  {path:"login",redirectTo:"login"},
  {path:"news-content",component:NewsContentComponent,canActivate:[SecurityGuard]},
  // {path:"india",component:NewsIndiaComponent,canActivate:[SecurityGuard]},
  // {path:"news-toolbar",component:NewsToolbarComponent},
   {path:"",redirectTo:"login",pathMatch:"full"} ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(route)
  ],
  exports:[RouterModule]
})
export class RoutingModule { }
