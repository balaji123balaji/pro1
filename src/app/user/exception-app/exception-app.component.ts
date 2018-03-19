import { Component, OnInit } from '@angular/core';
import { ConfigServiceService } from '../../config-service.service';
import { Http,Response,Headers } from '@angular/http';
import { HttpClient,HttpEvent,HttpEventType } from '@angular/common/http';
@Component({
  selector: 'app-exception-app',
  templateUrl: './exception-app.component.html',
  styleUrls: ['./exception-app.component.css']
})
export class ExceptionAppComponent implements OnInit {

  constructor(private data:ConfigServiceService,
  private http:HttpClient
  ) { }

execd:string[];
functiondemoGetData(){
    this.http.get<data>("https://enablement.us/rest/E_DB/SP?V_SRC_CD=exeserver&V_EXE_TYP=E_REST&V_USR_NM=exeserver@adventbusiness.com&REST_Service=UserExes&Verb=GET").subscribe(
      res=>{
        console.log(res.EXE_CD);
        this.execd=res.EXE_CD;
      }
    );
}

nextShow:boolean=false;
functiondemo(){
          this.nextShow=true;
}
  ngOnInit() {
    this.functiondemoGetData();
  }


}

export interface data{
  EXE_CD:string[];

}
