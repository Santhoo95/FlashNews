import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RoutingModule } from '../routing/routing.module';


import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';


import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  imports: [
  
    MatInputModule,
    FormsModule,
    MatButtonModule,

  
    MatFormFieldModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,

    RoutingModule

  ],
  // exports: [LoginModule],
  declarations: [LoginComponent]
})
export class LoginModule { }
