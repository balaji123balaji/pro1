import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularMaterial } from './Angular.Material';
import { StorageSessionService } from './storage-session.service';
import { ConfigServiceService } from './config-service.service';
import { LoginServiceService } from './login-service.service';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { ToastModule } from 'ng2-toastr/src/toast.module';
import { RouterModule ,Routes} from '@angular/router';
import { LogComponent } from './log/log.component';
import { ProfileComponent } from './profile/profile.component';
import { ExecutableComponent } from './executable/executable.component';
import { RepeatProcessComponent } from './user/execute/repeat-process/repeat-process.component';
import { AdventBpm1Component } from './user/advent-bpm1.component';
import { LoginComponent } from './login/login.component';
import { DialogScheduleComponent } from './user/execute/dialog-schedule/dialog-schedule.component';
import { HeaderComponent } from './header/header.component';
import { ExecutablesComponent } from './executable/executables/executables.component';
import { RequiredComponent } from './executable/required/required.component';
import { SchdActnComponent } from './user/schd-actn/schd-actn.component';
import { ExecuteComponent } from './user/execute/execute.component';
// import { PracticeComponent } from './practice/practice.component';
import { ReactiveFormsModule }          from '@angular/forms';
import { DynamicFormsCoreModule } from "@ng-dynamic-forms/core";
import { DynamicFormsBootstrapUIModule } from "@ng-dynamic-forms/ui-bootstrap";
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';
import { DemoComponent } from './demo/demo.component';
import { ExceptionComponent } from './exception/exception.component';
import { ExceptionAppComponent } from './user/exception-app/exception-app.component';
import {NgAutoCompleteModule} from "ng-auto-complete";
import {JsonpModule} from '@angular/http';
import { MatAutocompleteModule, MatInputModule } from '@angular/material';
import { LoadingModule,ANIMATION_TYPES  } from 'ngx-loading';
import { ReportTableComponent } from './user/report-table/report-table.component';
const appRoutes: Routes = [
  { path: 'log', component: LogComponent },
  { path: 'profile', component: ProfileComponent },
 
  { path: 'executable', component: ExecutableComponent }, // developer app-dialog-schedule
  { path: 'repeat', component: RepeatProcessComponent },
  { path: 'users', component: AdventBpm1Component },
  { path: '', component: LoginComponent },
  { path: 'cl', component: DialogScheduleComponent }
  ,{path:'reportTable',component:ReportTableComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    LogComponent,
    ProfileComponent,
    ExecutableComponent,
    RepeatProcessComponent,
    AdventBpm1Component,
    DialogScheduleComponent,
    LoginComponent,
    HeaderComponent,
    ExecutablesComponent,
    RequiredComponent,
    SchdActnComponent,
    ExecuteComponent,
    DemoComponent,
    ExceptionComponent,
    ExceptionAppComponent,
    ReportTableComponent,
   // PracticeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterial,
    DynamicFormsCoreModule.forRoot(),
    DynamicFormModule,
    NgAutoCompleteModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    LoadingModule.forRoot({
      animationType: ANIMATION_TYPES.wanderingCubes,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)', 
      backdropBorderRadius: '4px',
      primaryColour: '#ffffff', 
      secondaryColour: '#ffffff', 
      tertiaryColour: '#ffffff'
  }),
    JsonpModule,
    ToastModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  providers: [StorageSessionService,ConfigServiceService,LoginServiceService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],
  bootstrap: [AppComponent],
  entryComponents: [DialogScheduleComponent]
})
export class AppModule { }
