import { Component, OnInit } from '@angular/core';
import {FormControl, NgForm ,FormBuilder,FormGroup,FormArray} from '@angular/forms';
import { ConfigServiceService } from '../config-service.service';
import {  ViewChild, AfterViewInit } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-demo',
 
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  myForm:FormGroup=new FormGroup({

  });
  constructor(
    private formb:FormBuilder,
    private data:ConfigServiceService
  ) { 
  
 

  }

  Data:any[]=[];
  ngOnInit() {
    for(let i=0;i<4;i++){
      this.Data[i]={
        type:'input',
        name:"asds",
        value:"valueasds",
        placeholder:"demoasdsd",
      
      };
    
  
  }
     console.log(this.Data) ;
  }

}


