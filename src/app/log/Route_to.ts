import { Router, ActivatedRoute, ParamMap } from '@angular/router'

export class demo_route{


  constructor(private route:Router){

  }
  route_to(){
    this.route.navigate(['profile']);
  }
}