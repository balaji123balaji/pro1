import { Injectable } from '@angular/core';
import {HttpClientModule,HttpClient, HttpHeaders} from '@angular/common/http';
import { Http,Response,Headers } from '@angular/http';
@Injectable()
export class LoginServiceService {
  private apiUrlGet = "https://enablement.us/rest/E_DB/SP?";
  private apiUrlPost = "https://enablement.us/";
constructor(private http:HttpClient){

}
CheckSrc(form){
  let body={
    "V_SRC_CD":form.value.agency,
    "RESULT":"@RESULT"
  }
  var dt=JSON.stringify(body);
  return this.http.post<data>(this.apiUrlPost+'/CheckSrc',body);
}
//------------------------
sendConfirmation(data){
  let body = {
    "V_USR_NM": data.value.email,
    "V_PSWRD": data.value.pass,
    "SRC_CD": data.value.agency,
    "message": "Please confirm your login..."
  };
  var aa = JSON.stringify(body);
  return this.http.post(this.apiUrlPost + "/SendEmail",aa);
}
//-------------
CheckUsrPw(form){
    let body = {
      "V_USR_NM": form.value.email,
      "V_PSWRD": form.value.pass,
      "V_ACTN_NM": "LOGIN",
      "RESULT": "@RESULT"
    };
    var aa = JSON.stringify(body);
 return  this.http.post<data>(this.apiUrlPost + "/CheckUsr",aa)
}
//--------------------
SendResetPasswordEmail(data){
  let body = {
    "V_USR_NM": data.value.email,
    "V_PSWRD": data.value.passr,
     "SRC_CD": data.value.agency,
     "message": "Click on link to reset your account new password "+data.value.pass,
  };
  var aa = JSON.stringify(body);
return this.http.post(this.apiUrlPost + "/SendEmail",aa);
//  return this.http.patch(this.apiUrlGet+"REST_Service=Password&Verb=PATCH",body);
  }
  //-----------------------------
  ChangePassword(form){
        return this.http.get("https://enablement.us/rest/E_DB/SP?V_USR_NM=exeserver@adventbusiness.com&V_PSWRD=bala&REST_Service=Password&Verb=PATCH");
  }
}
//-------------------------------
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
