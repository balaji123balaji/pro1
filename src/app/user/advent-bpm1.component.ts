import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'

import { StorageSessionService } from '../storage-session.service';
import { ConfigServiceService } from '../config-service.service';
@Component({
  selector: 'app-advent-bpm1',
  templateUrl: './advent-bpm1.component.html',
  styleUrls: ['./advent-bpm1.component.css'],
  providers:[ConfigServiceService]
})
export class AdventBpm1Component implements OnInit {

  constructor(private router:Router,private StorageSessionService:StorageSessionService) { }

  ngOnInit() {
    this.StorageSessionService.session_check();
  }

}
