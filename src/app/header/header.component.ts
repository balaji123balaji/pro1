import { Component, OnInit } from '@angular/core';

import { Router,ActivatedRoute } from "@angular/router";

import { StorageSessionService } from '../storage-session.service';
import { ConfigServiceService } from '../config-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public userName:string = '';
  public agency:string = '';
  constructor( private StorageSessionService:StorageSessionService,
    private   apiServiceService:ConfigServiceService, private route: ActivatedRoute, private router: Router) {
    this.userName = this.StorageSessionService.getSession('email');
    this.agency = this.StorageSessionService.getSession('agency');

    if(this.userName == undefined){
      this.router.navigate(['']);
    }
  }

  ngOnInit() {
  }

  logout(){
  // this._cookieService.removeAll();
  this.StorageSessionService.ClearSession("email");
  this.StorageSessionService.ClearSession("agency");
   this.router.navigate(['']);
  }

}
