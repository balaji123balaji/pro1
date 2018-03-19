import { Component, OnInit } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import { StorageSessionService } from '../../storage-session.service';
import { ConfigServiceService } from '../../config-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
@Component({
  selector: 'app-required',
  templateUrl: './required.component.html',
  styleUrls: ['./required.component.css']
})
export class RequiredComponent implements OnInit {

  constructor(private router:Router,
    private StorageSessionService:StorageSessionService,
    private http:Http,private data:ConfigServiceService) { }

    F1_EXE_DATA=[];
    getExecutableTypeCode(){
      this.data.getExecutableType().subscribe(res=>{this.F1_EXE_DATA=res.json()});}
  ngOnInit() {
    this.getExecutableTypeCode();
  }

}
