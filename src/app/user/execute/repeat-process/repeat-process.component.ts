import { Component, OnInit } from '@angular/core';
import { StorageSessionService } from '../../../storage-session.service';

@Component({
  selector: 'app-repeat-process',
  templateUrl: './repeat-process.component.html',
  styleUrls: ['./repeat-process.component.css']
})
export class RepeatProcessComponent implements OnInit {

  constructor(private store:StorageSessionService) { }
start_date="";
End_date:any="";
getEndYear(){
  var date=new Date();
var nextD=new Date();
nextD.setFullYear(date.getFullYear()+1);
this.End_date=nextD;
}
  ngOnInit() {
    this.start_date=this.store.getLocalS("pro_start_date");
   this.getEndYear();
  }

}
