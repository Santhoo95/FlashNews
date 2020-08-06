import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterationComponent } from './registeration.component';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { RoutingModule } from '../routing/routing.module';
import {MatIconModule} from '@angular/material/icon';
import { MatMenuModule, MatCardModule, MatToolbarModule, MatSidenavModule, MatListModule } from '@angular/material';


@NgModule({
  declarations: [RegisterationComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    RoutingModule,
    MatIconModule,

    MatInputModule,
    FormsModule,
    MatButtonModule,

    
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
  
    
    RoutingModule
  ],
 
})
export class RegisterationModule { }
