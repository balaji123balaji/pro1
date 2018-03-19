import { Component, OnInit } from '@angular/core';

import{RouterModule,Route} from '@angular/Router';
import { RouterLink } from '@angular/router/src/directives/router_link';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import { Http,Response,Headers } from '@angular/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import{ demo_route} from './Route_to';
import { StorageSessionService } from '../storage-session.service';

import { data } from './data';
@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent  {

 demo;
 
  constructor(private http:HttpClient,private route:Router,private storage:StorageSessionService){
//let demo=new demo_route();

  }
  V_USR_NM="";
  V_PSWRD="";


//AdventBPM/rest/E_DB/SP?V_USR_NM=unittest2%40adventbusiness.com&V_ACTN_NM=LOGIN&REST_Service=UserValidity&Verb=GET
  
  user_status="";
  //this is for user sing in page
  user=true; //initailly user sing in page show
  //srcBlock for the payment and agency name 
  srcBlock=false;
  countAttempt=0;
  checkUsrPwd(){
		// this.route.navigateByUrl('profile');
		//V_USR_NM=unittest2%40adventbusiness.com&V_ACTN_NM=LOGIN&REST_Service=UserValidity&Verb=GET
        if(this.V_USR_NM===""){
alert("Enter Valid email address");
return ;
        }else if(this.V_PSWRD===""){
          alert("Enter Valid password");
          return ;
        }else{
		
		this.http.get<data>("http://54.84.87.15:8080/AdventBPM/rest/E_DB/SP?V_USR_NM=unittest2%40adventbusiness.com&V_ACTN_NM=LOGIN&REST_Service=UserValidity&Verb=GET").subscribe(data=>{
			console.log(data);
			console.log("V_USR_NM:"+data.V_USR_NM);
			console.log("V_SRC_CD:"+data.V_SRC_CD);
			console.log("V_LOGIN_VALIDITY:"+data.V_LOGIN_VALIDITY);
		
		});
   

        }
 
    //     (res:Response)=>{
    //       if(res.statusText=='Unauthorized'){
    //     console.log("Unauthorized");
    //   }else{
  
    //   }}
  }		
  
      

    
 




}


