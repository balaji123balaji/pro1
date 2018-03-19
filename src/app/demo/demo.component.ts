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


  constructor(
    private formb:FormBuilder,
    private data:ConfigServiceService
  ) { 
  
 

  }
data1='{PIID=[W56JSR14C0050, W9124916F0057, HSHQDC17F0002…280001, 200370001], Country=[USA, USA, USA, USA]}';
columnsToDisplay = ['userName', 'age'];
myData=[{name:'balaji',addr:'wagholi'},
{name:'balaji',addr:'wagholi'},
{name:'balaji',addr:'wagholi'},
{name:'balaji',addr:'wagholi'},
{name:'balaji',addr:'wagholi'}];

    formData(){
           
    }
  ngOnInit() {
		let d1=this.data1.split('=').join(':');
console.log(d1)		
      
  }

}


