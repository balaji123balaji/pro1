import { Component, OnInit,ViewContainerRef } from '@angular/core';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { StorageSessionService } from '../storage-session.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import {HttpClientModule,HttpClient, HttpHeaders} from '@angular/common/http';
import { Http,Response,Headers } from '@angular/http';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router:Router,private StorageSessionService:StorageSessionService,
    public toastr: ToastsManager, vcr: ViewContainerRef,
    private http:HttpClient
  ) {
    this.toastr.setRootViewContainerRef(vcr);
  }
 options=[];
 optionSelected:string="";
 agency=this.StorageSessionService.getSession("agency");
chooworkingProfile(){
  this.http.get<data>("https://enablement.us/rest/E_DB/SP?V_CD_TYP=ROLE&V_SRC_CD="+this.agency+"&SCREEN=PROFILE&REST_Service=Masters&Verb=GET").subscribe(
      data=>{
        console.log(data);
       for(let i=0;i<data.ROLE_CD.length;i++){
        console.log(data.ROLE_CD[i]);
        if(data.ROLE_CD[i]=="ExeServer"){
              this.options.push("executable");
        }else if(data.ROLE_CD[i]=="Super Application Role"){
            this.options.push("users");
        }
        
      }
      //navigate when the lenght is 1
      console.log("lenght"+this.options.length);
      if(this.options.length==1){
        this.toastr.info("Auto","profile");
        this.router.navigateByUrl(this.options.pop());
      }
    });
}
optionSelecteds(){
  this.toastr.info("your profile "+this.optionSelected,"profile");
  this.router.navigateByUrl(this.optionSelected);
}
  ngOnInit() {
    this.chooworkingProfile();
    // let url:string="users";
    //     this.router.navigateByUrl(url);
  }

}

export interface data{
  ROLE_CD:string[];
}
