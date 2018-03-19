import { Component, OnInit } from '@angular/core';


import{RouterModule,Route} from '@angular/Router';
import { RouterLink } from '@angular/router/src/directives/router_link';
import {HttpClientModule,HttpClient, HttpHeaders} from '@angular/common/http';
import { Http,Response,Headers } from '@angular/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'

import { StorageSessionService } from '../../storage-session.service';
import { data } from './schd_data';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import { ConfigServiceService } from '../../config-service.service';


@Component({
  selector: 'app-schd-actn',
  templateUrl: './schd-actn.component.html',
  styleUrls: ['./schd-actn.component.css'],
 
})
export class SchdActnComponent implements OnInit {

  constructor(private Router:Router,
    private http:HttpClient,
    private https:Http,
    private StorageSessionService:StorageSessionService,
  private data:ConfigServiceService) { }
 
  //____________________________________CLOSE SESSION_________________________________
//_____________________________________VARIABLE
  App_CD_data=[];
  proc_CD_data=[];
  ser_cd_data=[];
  V_SRC_CD:string=this.StorageSessionService.getSession("agency");
  V_USR_NM:string=this.StorageSessionService.getSession("email");
  ApplicationCD="";
  ProcessCD="";
  StatusCD="";
  innerTable:string="";
  innertTableDT:string[];
  getPrcCode(){
    
  }
  //___________________________________GET APP CD_____________________________________
  getAppCode(){this.data.getAppCode().subscribe(res=>{this.App_CD_data=res.json();});}
  getProcessCD(){
    console.log(this.proc_CD_data);
    this.data.getProcessCD().subscribe(res=>{this.proc_CD_data=res.json();});}
//_________________________________FIND PROCESS__________________________________________
table="";
find_process(){ this.data.find_process(this.ApplicationCD,this.ProcessCD,this.StatusCD).subscribe(data=>{
              this.innerTable="<table class='table table-bordered'>"+
                "<thead><tr><th>#</th><th>Services</th><th>Status</th><th>Last Run</th><th>Next Run</th><th>Detail</th></tr></thead>"
              +"<tbody>";
                this.innertTableDT=data.SRVC_CD;
                  console.log(data);
                  for(var i=0;i<this.innertTableDT.length;i++){
                        this.innerTable+="<tr><td><mat-radio-button></mat-radio-button></td>";
                        this.innerTable+="<td>"+data.SRVC_CD[i]+"</td>";
                        this.innerTable+="<td>"+data.TRIGGER_STATE[i]+"</td>";
                        this.innerTable+="<td>"+data.PREV_FIRE_TIME[i]+"</td>";
                        this.innerTable+="<td>"+data.NEXT_FIRE_TIME[i]+"</td>";
                        this.innerTable+="<td>"+data.DESCRIPTION[i]+"</td></tr>";
                 }
                    this.innerTable+="</tbody></table>";
                  }
          );
  }
//_____________________________________CLOSE____________________________________________
  
 

  ngOnInit() {
    
    this.getAppCode();
  
  }

}






