import { Injectable } from '@angular/core';
import { HttpClient,HttpEvent,HttpEventType } from '@angular/common/http';
import { Http,Response,Headers } from '@angular/http';
import { StorageSessionService } from './storage-session.service';
@Injectable()
export class ConfigServiceService {
  private RestURl="https://enablement.us/rest/E_DB/SP?";
  V_SRC_CD:string=this.StorageSessionService.getSession("agency");
  V_USR_NM:string=this.StorageSessionService.getSession("email");
  constructor(private http:Http,private https:HttpClient,
    private StorageSessionService:StorageSessionService) { }

  private apiUrlGet = "https://enablement.us/rest/E_DB/SP?";
  private apiUrlPost = "https://enablement.us/";


  checkUserPwd(email:any){
    return this.http.get(this.apiUrlGet + "V_USR_NM="+email+"&V_ACTN_NM=LOGIN&REST_Service=UserValidity&Verb=GET")
      .map((data: Response) => data.json());
  }

checkLoginPassword(data:any){
  let body = {
      "V_USR_NM": data.email,
      "V_PSWRD": data.pass,
      "V_ACTN_NM": "LOGIN",
      "RESULT": "@RESULT"
    };
    var aa = JSON.stringify(body);
  return this.http.post(this.apiUrlPost + "/CheckUsr",aa)
    .map((data: Response) => data.json());
}

checkOrganization(organization:any){
  let body = {
      "V_SRC_CD": organization,
      "RESULT": "@RESULT"
    };
  var aa = JSON.stringify(body);
  return this.http.post(this.apiUrlPost + "/CheckSrc",aa)
    .map((data: Response) => data.json());
}

sendConfirmMail(data:any){
  let body = {
      "V_USR_NM": data.email,
      "V_PSWRD": data.pass,
      "SRC_CD": data.agency,
      "message": "Please confirm your login..."
    };
    var aa = JSON.stringify(body);
  return this.http.post(this.apiUrlPost + "/SendEmail",aa)
    .map((data: Response) => data.json());
}

Execute_Now(){
      var headers = new Headers();
      headers.append('application', 'json');
  let body = {
      "V_APP_CD":'Federal Contracts',
      "V_PRCS_CD":'Federal Opportunities',
      "V_SRVC_CD":'START',
      "V_SRC_CD":'local13',
      "V_USR_NM":'local13@adventbusiness.com'

    };
       var aa = JSON.stringify(body);
      return  this.https.post("https://enablement.us/rest/Process/Execute", aa)
   ;
   
}

getUserId(data:any) {
  return this.http.get(this.apiUrlGet + "V_CD_TYP=SRC&V_SRC_CD="+ data +"&SCREEN=PROFILE&REST_Service=Masters&Verb=GET")
    .map((data: Response) => data.json());
}

getExecutableType(){
    return this.http.get(this.RestURl+"V_CD_TYP=EXE&V_SRC_CD="+this.V_SRC_CD+"&SCREEN=PROFILE&REST_Service=Masters&Verb=GET");
}
getExecutableCode(EXE_TYPE:any){
  return this.http.get(this.RestURl+"V_SRC_CD="+this.V_SRC_CD+"&V_EXE_TYP="+EXE_TYPE+"&V_USR_NM="+this.V_USR_NM+"&REST_Service=UserExes&Verb=GET");
}

getExecutableAll(EXE_TYPE,EXE_CD:any){
  return this.http.get(this.RestURl+"V_UNIQUE_ID=&V_EXE_TYP="+EXE_TYPE+"&V_EXE_CD="+EXE_CD+"&V_SRC_CD="+this.V_SRC_CD+"&REST_Service=Exe_Detail&Verb=GET");
}
//_____________________________LAKVERR
getApplicationSelectBoxValues(){
  let agency = this.V_SRC_CD;
  let body = {
    "V_SRC_CD":agency,
    "RESULT":"@RESULT"
    };
  var aa = JSON.stringify(body);
  return this.http.post(this.apiUrlPost + "/SubmitSrcCode",aa)
    .map((data: Response) => data.json());
}

getProcessSelectBoxValues(appName:any){
  let agency = this.V_SRC_CD;
  let email = this.V_USR_NM;
  let body = {
    "V_SRC_CD":agency,
    "V_APP_CD" : appName,
    "V_USR_NM":email
    };
  var aa = JSON.stringify(body);
  return this.http.post(this.apiUrlPost + "/SubmitAppCode", aa)
    .map((data: Response) => data.json());
}

newScheduleJobCtl(data:any){
  var aa = JSON.stringify(data);
  return this.http.post(this.apiUrlPost + "/NewScheduleJobCtl", aa)
    .map((data: Response) => data.json());
}

manualSubmitCtl(data:any){
  var aa = JSON.stringify(data);
  return this.http.post(this.apiUrlPost + "/ManualSubmitCtl", aa)
    .map((data: Response) => data.json());
}



getAppId(data:any) {
  return this.http.get(this.apiUrlGet + "V_CD_TYP=APP&V_SRC_CD="+ data +"&SCREEN=PROFILE&REST_Service=Masters&Verb=GET")
    .map((data: Response) => data.json());
}

SLCT_MANUAL_INPUT_DBDATA(){
  return this.http.get(this.apiUrlGet + "V_SRC_ID=198&V_APP_ID=136&V_PRCS_ID=287&V_PRCS_TXN_ID=3042&V_UNIQUE_ID=1569&%20&REST_Service=Form&Verb=GET")
    .map((data: Response) => data.json());

}
//--------------------------------------------
//______________USER___________________________________________________________

getAppCode(){
return  this.http.get(this.apiUrlGet+"V_CD_TYP=APP&V_SRC_CD="+this.V_SRC_CD+"&SCREEN=PROFILE&REST_Service=Masters&Verb=GET");
}
getProcessCD(){
  return this.http.get(this.apiUrlGet+"V_CD_TYP=PRCS&V_SRC_CD="+this.V_SRC_CD+"&SCREEN=PROFILE&REST_Service=Masters&Verb=GET");
}

find_process(ApplicationCD,ProcessCD,StatusCD){     
 return this.https.get<data>(this.apiUrlGet+"V_SRC_CD="+this.V_SRC_CD+"&V_APP_CD="+ApplicationCD+"&V_PRCS_CD="+ProcessCD+"&V_USR_NM="+this.V_USR_NM+"&V_TRIGGER_STATE="+StatusCD+"&REST_Service=ScheduledJobs&Verb=GET");
  
}
Execute_AP_PR(SL_APP_CD,SL_PRC_CD){
return  this.http.get(this.apiUrlGet+"V_APP_CD="+SL_APP_CD+"&V_PRCS_CD="+SL_PRC_CD+"&V_SRC_CD="+this.V_SRC_CD+"&REST_Service=PorcessParameters&Verb=GET");
}

functionDemo(){
  return this.http.get("https://enablement.us/rest/E_DB/SP?V_SRC_CD=exeserver&V_EXE_TYP=E_REST&V_USR_NM=exeserver@adventbusiness.com&REST_Service=UserExes&Verb=GET");
}

//__________________________________________________User >> execute page ALL REST API________

getDropDownListValue(V_APP_CD:any,V_PRCS_CD:any,V_PARAM_NM:any){
 this.http.get(this.apiUrlGet+"V_SRC_CD="+this.V_SRC_CD+"&V_APP_CD="+V_APP_CD+"&V_PRCS_CD="+V_PRCS_CD+"&V_PARAM_NM="+V_PARAM_NM+"&V_SRVC_CD=Pull%20FPDS%20Contracts&REST_Service=ProcessParametersOptions&Verb=GET").subscribe(
   res=>{
     return res.json();
   }
 );
}

//___________________________________________________________________________________________
}

export interface data{
  APP_CD:string;
  PRCS_CD:string;
  ser_cd_data:string[];
 
  // ======================find process
  CREATE:string[];
  CRON_EXPRESSION:string[];
  DELETE:string[];
  DESCRIPTION:string[];
  EXECUTE:string[];
  JOB_NAME:string[];
  NEXT_FIRE_TIME:string[];
  PREV_FIRE_TIME:string[];
  READ:string[];
  SRVC_CD:string[];
  TRIGGER_STATE:string[];
  UPDATE:string[];

  // ==================================
}