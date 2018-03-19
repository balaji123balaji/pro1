import { Component, OnInit,ViewContainerRef } from '@angular/core';

//import { DataParserService } from '../data-parser.service';
import{RouterModule,Route} from '@angular/Router';
import { RouterLink } from '@angular/router/src/directives/router_link';
import {HttpClientModule,HttpClient, HttpHeaders} from '@angular/common/http';
import { Http,Response,Headers } from '@angular/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'

import { StorageSessionService } from '../storage-session.service';

import { NgForm } from '@angular/forms';
import { ConfigServiceService } from '../config-service.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

public errorMsg;
public sendMail;
  constructor(private Router:Router,
    private http:HttpClient,
    private StorageSessionService:StorageSessionService,
    private   apiServiceService:ConfigServiceService,
    private toastr:ToastsManager,
    vcRef: ViewContainerRef, 
    private route: ActivatedRoute,
     private router: Router,
     private logData:LoginServiceService,
   ) { this.toastr.setRootViewContainerRef(vcRef); }


  ngOnInit() {
  
  }
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
}

private apiUrlGet = "https://enablement.us/rest/E_DB/SP?";
private apiUrlPost = "https://enablement.us/";
public agcy:boolean = true;
public msg:boolean = true;
public loading:boolean = true;
countAt:number=0;
logBtn:boolean=true;
rstBnt:boolean=false;
captcha:boolean=false;
srcBloc:boolean=false;
pass1:boolean=true;
pass2:boolean=false;
msg_alert="";
email="";
checkUser(form:NgForm){   //1
                        let email=form.value.email;
                        let pass=form.value.pass;
                        let agency=form.value.agency;
                        console.log(email+pass+agency);
                        if(agency!==undefined){
                            this.CheckSrc(form);   //3
                        }else{
                            this.CheckUsrPw(form);   //2
                        }}
CheckSrc(form){   //4
    this.logData.CheckSrc(form).subscribe(res=>{
         if( res.resultUsrname=="Passed"){
          this.toastr.success("A confirmation link is sent to your email id. Please check your email and confirm the registration","Login");
            this.sendConfirmation(form);  //5
}});}
sendConfirmation(data){    //6  "Please confirm your login..."
this.logData.sendConfirmation(data)
.subscribe(res=>{console.log(res);});
}

CheckUsrPw(form){     //7
if(form.value.email!=""&&form.value.pass!=""){
this.logData.CheckUsrPw(form).subscribe(
   data=>{
     console.log(data);
     console.log(data.resultUsrPwd);
    console.log(data.resultUsrOnly);
                     if(data.resultUsrOnly=="FALSE"){
                             this.srcBloc=true; //show src block
                             this.agcy=false;
                             this.toastr.warning("Please enter your Organization name","Agency");
                            //  this.msg_alert="Please enter your Organization name";
                      }else if(data.resultUsrOnly=="TERMINATED"){
                              this.toastr.error('Your are Terminated..!','Login');
                      } else if(data.resultUsrOnly=="TRUE"){
                                        this.msg_alert="";
                                            if(data.resultLoginValidity=="FALSE"){
                                                  this.msg_alert="Your Login Account is expired. Contact your Admin at "+data.resultSrcAdminEmailID+" to activate it.";
                                            }else if(data.resultUsrPaymentValid=="FALSE"){
                                                  this.msg_alert="You have utilized your Account balance. Contact your Admin at "+data.resultSrcAdminEmailID+" to process payment.";
                                            }
                       } if(data.resultUsrPwd=="INCORRECT"&&data.resultLoginValidity==""){
                                      this.countAt++;
                                    if(this.countAt==3){
                                         this.toastr.warning("Please provide a new password that you want to reset","Change password");
                                         this.pass1=false;
                                         this.pass2=true;
                                         this.rstBnt=true;
                                         this.logBtn=false;
                                         this.captcha=true;
                                         this.sendResetPassowrdEmail(form);
                                    }else{
                                        this.toastr.warning("Invalid password,Attempt="+this.countAt,"Login");
                                    }
                       }else if(data.resultUsrPwd=="CORRECT"&&data.resultLoginValidity == "TRUE"){
                         // put this parameter when payment option come in res "&& data.resultUsrPaymentValid == "TRUE""
                            this.toastr.success("Success...!","Login In");
                            this.loading = true;
                                        this.StorageSessionService.setSession('email',data.resultUsrname);
                                        this.StorageSessionService.setSession('agency',data.resultSrc);
                                        this.apiServiceService.getUserId(data.resultSrc).subscribe(data => {
                                          this.StorageSessionService.setSession('userid',data.SRC_ID[0]);
                                          this.router.navigate(['profile']);
                                        });
                       }    
    });
}else{
  this.toastr.warning("Please enter email and passowrd.","Login");
}
}
//-----------------Send reset conformation passworrd
sendResetPassowrdEmail(data){
  let body={
    "V_USR_NM":data.value.email,
    "V_PSWRD":data.value.passr
  };
      this.http.patch(this.apiUrlGet+"REST_Service=Password&Verb=PATCH",body).subscribe(
        res=>{
          console.log(res);
        }
      );
}
}

export interface data{
  resultUsrname:string;
  //check user email and password

  resultUsrOnly:string;
  resultLoginValidity:string;
  resultSrc:string;
  resultSrcAdminEmailID:string;
  resultUsrPwd:string;
  esultUsrname:string;
  resultUsrPaymentValid:string;

}
