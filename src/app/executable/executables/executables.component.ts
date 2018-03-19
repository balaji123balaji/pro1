import { Component, OnInit } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import { StorageSessionService } from '../../storage-session.service';
import { ConfigServiceService } from '../../config-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
@Component({
  selector: 'app-executables',
  templateUrl: './executables.component.html',
  styleUrls: ['./executables.component.css']
})
export class ExecutablesComponent implements OnInit {

  constructor(private router:Router,
    private StorageSessionService:StorageSessionService,
    private http:Http,private data:ConfigServiceService) { }
  V_USR_NM="";
  V_SRC_CD="";

EXE_TYPE=[];
EXE_TYPE_R="";
EXE_CD=[];
EXE_CD_R="";
EXE_ALL=[];
//-----------form
F1_EXE_CD="";
F2_EXE="";
F3_EXE="";
F4_EXE="";
F5_EXE="";
F6_EXE="";
F7_EXE="";
  getExecutableTypeCode(){
    this.data.getExecutableType().subscribe(res=>{this.EXE_TYPE=res.json()});}
//  _____________________________________
getExecutableCode(){
  console.log(this.EXE_TYPE_R);
            this.data.getExecutableCode(this.EXE_TYPE_R).subscribe(res=>{this.EXE_CD=res.json()});}

//____________________________________________________            
getAllExecutable(){
  this.data.getExecutableAll(this.EXE_TYPE_R,this.EXE_CD_R).subscribe(
    res=>{this.EXE_ALL=res.json()
      console.log(this.EXE_ALL);
      this.F1_EXE_CD=this.EXE_ALL['EXE_CD'];
      this.F2_EXE=this.EXE_ALL['EXE_SIGN'];
      this.F3_EXE=this.EXE_ALL['EXE_OUT_PARAMS'];
      this.F4_EXE=this.EXE_ALL['EXE_DSC'];
      this.F5_EXE=this.EXE_ALL['EXE_VRSN'];
      this.F6_EXE=this.EXE_ALL['PARAM_DLMTR_STRT'];
      this.F7_EXE=this.EXE_ALL['PARAM_DLMTR_END'];
      console.log(this.F2_EXE);
    }
  );
}
  ngOnInit() {
  this.getExecutableTypeCode();
  this.StorageSessionService.session_check();
  }

}
