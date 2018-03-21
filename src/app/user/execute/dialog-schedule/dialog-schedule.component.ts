import { Component, OnInit ,Inject} from '@angular/core';
import { ViewChild } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { StorageSessionService } from '../../../storage-session.service';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-dialog-schedule',
  templateUrl: './dialog-schedule.component.html',
  styleUrls: ['./dialog-schedule.component.css']
})
export class DialogScheduleComponent implements OnInit {
  
  choosenEmoji: string;
  constructor(public dialogRef: MatDialogRef<DialogScheduleComponent>,
  private route:Router,
private store:StorageSessionService,
private StorageSessionService:StorageSessionService,
private http:HttpClient) { }
 


  start_at_date="";
repeatProcess(){
 // alert(this.start_at_date);
  var date=new Date(this.start_at_date);
 // alert(this.formatAMPM(date));
 var dateFr=date.toLocaleDateString()+","+date.toLocaleTimeString();
  this.store.setLocatS("pro_start_date",dateFr);
  this.route.navigateByUrl("repeat");

  }
  Execute(){
  
  }
  formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
  ngOnInit() {

 
  
}

  }


