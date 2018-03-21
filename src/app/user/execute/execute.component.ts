import { Component, AfterViewInit,OnInit ,Inject,ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import{RouterModule,Route} from '@angular/Router';
import { RouterLink } from '@angular/router/src/directives/router_link';
import {HttpClientModule,HttpClient, HttpHeaders} from '@angular/common/http';
import { Http,Response,Headers } from '@angular/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { StorageSessionService } from '../../storage-session.service';

import { ConfigServiceService } from '../../config-service.service';
import { DialogScheduleComponent } from './dialog-schedule/dialog-schedule.component';
//import { FieldConfig } from '../../dynamic-form/models/field-config.interface';
//import { DynamicFormComponent } from '../../dynamic-form/containers/dynamic-form/dynamic-form.component';
import {FormArray,FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms';
import { AppComponent } from '../../app.component';
import { Injectable } from '@angular/core';
@Component({
  selector: 'app-execute',
  templateUrl: './execute.component.html',
  styleUrls: ['./execute.component.css']
})
@Injectable()
export class ExecuteComponent implements OnInit {

  private apiUrlGet = "https://enablement.us/rest/E_DB/SP?";
  constructor(private Router:Router,
    private http:HttpClient,
    private https:Http,
    private StorageSessionService:StorageSessionService,
    private data:ConfigServiceService,
    public dialog: MatDialog,
    private fBuilder:FormBuilder,
    private app:AppComponent
   ) { }
    selectedEmoji: string;
    openEmojiDialog() {
      let dialog = this.dialog.open(DialogScheduleComponent,{
        height:'200px',
        width:'440px'
      });
  
      dialog.afterClosed()
        .subscribe(selection => {
          if (selection) {
            this.selectedEmoji = selection;
          } else {
            // User clicked 'Cancel' or clicked outside the dialog
          }
        });
    }
  //----------------GET APP CODE
  V_SRC_CD=this.StorageSessionService.getSession("agency");
  V_USR_NM=this.StorageSessionService.getSession("email");
  APP_CD=[];
  SL_APP_CD="";
  SL_PRC_CD=[];
  PRC_CD=[];

Load_CVS_box:boolean=false;
Application_box:boolean=true;
Application_label:boolean=false;
Process_box:boolean=true;
Process_label:boolean=false;
repeatProcess(){
  this.Router.navigateByUrl("repeat");
  this.dialog.closeAll();
  }
  //// 1) call application CD
  //_____________________________1_____________________
    getAppCode(){
                          this.data.getAppCode().subscribe(res=>{
                         this.APP_CD=res.json();
            //------------get lenght 
                         console.log(this.APP_CD);
                        
                         if(this.APP_CD['APP_CD'].length==1){
                        //hide the application select box
                        this.SL_APP_CD=this.APP_CD['APP_CD']; 
                        this.Application_box=false;
                        this.Application_label=true;
                       
                        this.getProcessCD();
      }
        });
    }
    //___________________________close 2______________________
    //__________________________________________2__________________
getProcessCD(){
                        this.data.getProcessCD().subscribe(res=>{
                        this.PRC_CD=res.json();
                        console.log( this.PRC_CD);
                        if(this.PRC_CD['PRCS_CD'].length==1){
                        this.SL_PRC_CD=this.PRC_CD['PRCS_CD'];
                        this.Process_box=false;
                        this.Process_label=true;
                      
                        this.Execute_AP_PR();
              }
      });
}
//________________________________CLOSE 2___________________________


b=false;

myForm=new FormArray([

]);
;
ParametrValue:any[];
ParameterName:any[];
FormData:any[];
Data:any[]=[];
myFormData;
searchResult:any[];
Execute_AP_PR(){
  
  this.b=true;
            this.https.get(this.apiUrlGet+"V_APP_CD="+this.SL_APP_CD+"&V_PRCS_CD="+this.SL_PRC_CD+"&V_SRC_CD="+this.V_SRC_CD+"&REST_Service=PorcessParameters&Verb=GET").subscribe(
                  res=>{
                        console.log(res.json());
                        this.FormData=res.json();
                        this.ParametrValue=this.FormData['PARAM_VAL'];
                        this.ParameterName=this.FormData['PARAM_NM'];
                        let arr:string;
                   
                        for(let i=0;i<this.ParametrValue.length;i++){
                            this.Data[i]={
                              type:'input',
                              name:this.ParameterName[i],
                              value:this.ParametrValue[i],
                              placeholder:this.ParameterName[i],
                            
                            };
                          
                        
                        }
                        
                        console.log(this.ParameterName);
                       
                  }
            );  }
Update_value(v,n){ //v=value and n=paramter name


// let body={
//   V_APP_CD:this.SL_APP_CD,
//   V_PRCS_CD:this.SL_PRC_CD,
//   V_SRC_CD:this.StorageSessionService.getSession('agency'),
//   V_USR_NM:this.StorageSessionService.getSession('email'),
//   V_PARAM_NM:n,
//   V_PARAM_VAL:v,
//   REST_Service:'ProcessParameters',
//   Verb:'PATCH'
// }
let ag=this.StorageSessionService.getSession('agency');
let ur=this.StorageSessionService.getSession('email');
    this.http.get("https://enablement.us/rest/E_DB/SP?V_APP_CD="+this.SL_APP_CD+"&V_PRCS_CD="+this.SL_PRC_CD+"&V_SRC_CD="+ag+"&V_USR_NM="+ur+"&V_PARAM_NM="+n+"&V_PARAM_VAL="+v+"&REST_Service=ProcessParameters&Verb=PATCH").subscribe(
      res=>{
       
      }
    );
}
getDropDownListValue(e){
  this.app.loading=true;
  this.searchResult=[];
                    this.http.get(this.apiUrlGet+"V_SRC_CD="+this.V_SRC_CD+"&V_APP_CD="+this.SL_APP_CD+"&V_PRCS_CD="+this.SL_PRC_CD+"&V_PARAM_NM="+e+"&V_SRVC_CD=Pull%20FPDS%20Contracts&REST_Service=ProcessParametersOptions&Verb=GET")
                    .subscribe(
                        res=>{
                         console.log(res[e]);
                       this.searchResult=res[e];
                       this.app.loading = false;
                        }
                    );
                        
        }

  //____________CLOSE APP CODE FUN
ReturnParameterList(para){
                      alert(para);
                      this.http.get(this.apiUrlGet+"V_SRC_CD="+this.V_SRC_CD+"&V_APP_CD="+this.SL_APP_CD+"&V_PRCS_CD="+this.SL_PRC_CD+"&V_PARAM_NM=Type of Set Aside&V_SRVC_CD=Pull%20FPDS%20Contracts&REST_Service=ProcessParametersOptions&Verb=GET")
                      .subscribe(
                      res=>{
                      console.log("list"+res);
                      }  
                    );
              }
Execute_res_data:any[];
Execute_Now(){
                    var headers = new Headers();
                    headers.append('application', 'json');
                let body = {
                    "V_APP_CD":this.SL_APP_CD,
                    "V_PRCS_CD":this.SL_PRC_CD,
                    "V_SRVC_CD":'START',
                    "V_SRC_CD":this.V_SRC_CD,
                    "V_USR_NM":this.V_USR_NM

                  };
                    this.https.post("https://enablement.us/rest/Process/Execute",body).subscribe(
                      res=>{
                  
                            this.Execute_res_data=res.json();
                            console.log(this.Execute_res_data);
                            this.GenerateReportTable();
                      }
                    );
                 
                 
              }
GenerateReportTable(){
  this.app.loading = true;
  this.app.text_mgs='Loading Table..';
                    this.https.get(this.apiUrlGet+"V_SRC_ID="+this.Execute_res_data['V_SRC_ID']+"&V_UNIQUE_ID="+this.Execute_res_data['V_UNIQUE_ID']+"&V_APP_ID="+this.Execute_res_data['V_APP_ID']+"&V_PRCS_ID="+this.Execute_res_data['V_PRCS_ID']+"&V_PRCS_TXN_ID="+this.Execute_res_data['V_PRCS_TXN_ID']+"&V_NAV_DIRECTION="+this.Execute_res_data['V_NAV_DIRECTION']+"&V_DSPLY_WAIT_SEC=100&V_MNL_WAIT_SEC=180&REST_Service=Report&Verb=GET")
                    .subscribe(
                     res=>{
                      console.log(res.json());
                      this.StorageSessionService.setCookies("report_table",res.json());
                      this.app.loading = false;
                      this.Router.navigateByUrl('reportTable');
                     }
                    );
}     
data11='{PIID=[W56JSR14C0050, W9124916F0057, HSHQDC17F0002…280001, 200370001], Country=[USA, USA, USA, USA],balaji=[IND, IND, IND, IND]}';

ngOnInit() {
    this.getAppCode();
    
   
        console.log(this._BLS("balaji",this.data11));
  }
                                                          _BL(data:string){
                                                        let l=data.length;
                                                        let dt1=data.substring(1,l-1);   // rm { or }
                                                        let dt=dt1.split('=').join(':');   // find = rp with :
                                                        return dt;
                                                          }
                                                          _BLS(search:string,data:string){
                                                            let dt=this._BL(data);
                                                            let cr=search;
                                                            let crl=cr.length;
                                                              let inx=dt.indexOf(cr);   //1 find index no
                                                              let start_indx=inx+crl+2;  // character index no 
                                                              let end_indx=dt.indexOf(']',start_indx+crl+2);
                                                              console.log()
                                                            return dt.substring(start_indx,end_indx).split(',');
                                                          }
}
export interface data{
  PARAM_NM:string[];
  PARAM_VAL:string[];
  RESULT:string[];

}
