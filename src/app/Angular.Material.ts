import {NgModule} from '@angular/core'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import 'hammerjs';

import { LogComponent } from './log/log.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

//========for the form 
import { FormsModule } from '@angular/forms';
//for the http 
import { HttpModule } from '@angular/http';
// for the NgIf and NgFor
import { CommonModule } from '@angular/common';
// when you building the reactive form 
import { ReactiveFormsModule} from '@angular/forms';
//For Routing and when you want to use RouterLink,.forRoot(), and .forChild()
import { RouterModule ,Routes} from '@angular/router';
//When you to talk to a server
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
//-========the service

//checko bx
import {MatRadioModule} from '@angular/material/radio';
import { ProfileComponent } from './profile/profile.component';
// for the tab
//balaji just for practice 

import { ExecutableComponent } from './executable/executable.component';

import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
///pag component====================================================
//import{NavBarComponent } from './pageComp/navBar/nav.com';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

//============================================================
import { WebStorageModule } from 'ngx-store';
import { StorageSessionService } from './storage-session.service';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientXsrfModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import { ConfigServiceService } from './config-service.service';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ExecutablesComponent } from './executable/executables/executables.component';
import { RequiredComponent } from './executable/required/required.component';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { HeaderComponent } from './header/header.component';
import { AdventBpm1Component } from './user/advent-bpm1.component';
import { SchdActnComponent } from './user/schd-actn/schd-actn.component';
import { ExecuteComponent } from './user/execute/execute.component';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { DialogScheduleComponent } from './user/execute/dialog-schedule/dialog-schedule.component';
//import { FullCalendarModule } from 'ng-fullcalendar';
import { RepeatProcessComponent } from './user/execute/repeat-process/repeat-process.component';
import { LoginServiceService } from './login-service.service';
import {MatListModule} from '@angular/material/list';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';;

@NgModule({
imports:[
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
	FormsModule,
	HttpModule,
	CommonModule,
	MatSelectModule,
  MatRadioModule,
  ReactiveFormsModule,
  MatMenuModule,
  WebStorageModule,
  MatAutocompleteModule,
  MatButtonToggleModule,
  MatDialogModule,
  MatProgressBarModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTabsModule,
  MatCheckboxModule,
  MatDividerModule,
  MatTableModule,
  FlexLayoutModule,
  OwlDateTimeModule,
  OwlNativeDateTimeModule,
  ToastModule.forRoot(),
  MatListModule,
  HttpClientModule,
],
exports:[
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
	FormsModule,
	HttpModule,
	CommonModule,
	MatSelectModule,
  MatRadioModule,
  ReactiveFormsModule,
  MatMenuModule,
  WebStorageModule,
  MatAutocompleteModule,
  MatButtonToggleModule,
  MatDialogModule,
  MatProgressBarModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTabsModule,
  MatCheckboxModule,
  MatDividerModule,
  MatTableModule,
  FlexLayoutModule,
  OwlDateTimeModule,
  OwlNativeDateTimeModule,
  MatListModule,
  HttpClientModule,
]
})

export class AngularMaterial {

}