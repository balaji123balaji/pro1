import { Component, OnInit ,ViewChild} from '@angular/core';
import { StorageSessionService } from '../../storage-session.service';

import {MatTableDataSource, MatSort} from '@angular/material';
@Component({
  selector: 'app-report-table',
  templateUrl: './report-table.component.html',
  styleUrls: ['./report-table.component.css']
})
export class ReportTableComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  constructor(private dataStored:StorageSessionService
  ) { }
Table_of_Data:any[];
Table_of_Data1:any[];
Table_of_Data2:any[]=[];
Table_of_Data3:any[]=[];
Table_of_Data4:any[]=[];
F1:any[];
  getReportData(){
  //  console.log(this.dataStored.getCookies('report_table'));
    this.Table_of_Data=this.dataStored.getCookies('report_table')['RESULT'];
    this.Table_of_Data1=this.dataStored.getCookies('report_table')['LOG_VAL'];
  }
  dataSource = new MatTableDataSource(this.Table_of_Data4);
  columnsToDisplay = ['PIID','userName', 'age','PSC','Current_Contract_Value','Ultimate_Contract_Value',
  'Solicitation_Procedures','Offers_Received','Business_Size_Selection','Contracting_Department',
'Funding_Office','Major_Command','Prepared_By','Approved_By','Last_Modified_By',
'Why_Not_Awarded_To_SDB','Est_Completion_Date','Date_Signed','Type_of_Contract'];
  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.getReportData();
   console.log(this.dataStored.getCookies('report_table')['LOG_VAL']);
   console.log(this._BL(this.Table_of_Data1.toString()));
     
  this.Table_of_Data2[0]={
    PIID:this._BLS('PIID',this.Table_of_Data1.toString()),
    Type_of_Set_Aside:this._BLS('Type of Set Aside',this.Table_of_Data1.toString()),
    NAICS:this._BLS('NAICS',this.Table_of_Data1.toString()),
    PSC:this._BLS('PSC',this.Table_of_Data1.toString()),
    Current_Contract_Value:this._BLS('Current Contract Value',this.Table_of_Data1.toString()),
    Ultimate_Contract_Value:this._BLS('Ultimate Contract Value',this.Table_of_Data1.toString()),
    Solicitation_Procedures:this._BLS('Solicitation Procedures',this.Table_of_Data1.toString()),
    Offers_Received:this._BLS('Offers Received',this.Table_of_Data1.toString()),
    Business_Size_Selection:this._BLS('Business Size Selection',this.Table_of_Data1.toString()),
    Contracting_Department:this._BLS('Contracting Department',this.Table_of_Data1.toString()),
    Agency:this._BLS('Agency',this.Table_of_Data1.toString()),
    Contracting_Office:this._BLS('Contracting Office',this.Table_of_Data1.toString()),
    Funding_Office:this._BLS('Funding Office',this.Table_of_Data1.toString()),
    Major_Command:this._BLS('Major Command',this.Table_of_Data1.toString()),
    Prepared_By:this._BLS('Prepared By',this.Table_of_Data1.toString()),
    Approved_By:this._BLS('Approved By',this.Table_of_Data1.toString()),
    Last_Modified_By:this._BLS('Last Modified By',this.Table_of_Data1.toString()),
    Why_Not_Awarded_To_SDB:this._BLS('Why Not Awarded To SDB',this.Table_of_Data1.toString()),
    Est_Completion_Date:this._BLS('Est Completion Date',this.Table_of_Data1.toString()),
    Date_Signed:this._BLS('Date Signed',this.Table_of_Data1.toString()),
    Type_of_Contract:this._BLS('Type of Contract',this.Table_of_Data1.toString())
  
  };

this.Table_of_Data3=this.Table_of_Data2[0];

this.F1=this.Table_of_Data3['Type_of_Set_Aside'];
let F0=this.Table_of_Data3['PIID'];
let F2=this.Table_of_Data3['NAICS'];
let F3=this.Table_of_Data3['PSC'];
let F4=this.Table_of_Data3['Current_Contract_Value'];
let F5=this.Table_of_Data3['Ultimate_Contract_Value'];
let F6=this.Table_of_Data3['Solicitation_Procedures'];
let F7=this.Table_of_Data3['Offers_Received'];
let F8=this.Table_of_Data3['Business_Size_Selection'];
let F9=this.Table_of_Data3['Contracting_Department'];
let F10=this.Table_of_Data3['Funding_Office'];
let F11=this.Table_of_Data3['Major_Command'];
let F12=this.Table_of_Data3['Prepared_By'];
let F13=this.Table_of_Data3['Approved_By'];
let F14=this.Table_of_Data3['Last_Modified_By'];
let F15=this.Table_of_Data3['Why_Not_Awarded_To_SDB'];
let F16=this.Table_of_Data3['Est_Completion_Date'];
let F17=this.Table_of_Data3['Date_Signed'];
let F18=this.Table_of_Data3['Type_of_Contract'];
//let F19=this.Table_of_Data3['Major_Command'];
for(let i=0;i<=this.F1.length;i++){
        this.Table_of_Data4[i]={
          PIID:F0[i],
          Type_of_Set_Aside:this.F1[i],
          NAICS:F2[i],
          PSC:F3[i],
          Current_Contract_Value:F4[i],
          Ultimate_Contract_Value:F5[i],
          Solicitation_Procedures:F6[i],
          Offers_Received:F7[i],
          Business_Size_Selection:F8[i],
          Contracting_Department:F9[i],
          Funding_Office:F10[i],
          Major_Command:F11[i],
          Prepared_By:F12[i],
          Approved_By:F13[i],
          Last_Modified_By:F14[i],
          Why_Not_Awarded_To_SDB:F15[i],
          Est_Completion_Date:F16[i],
          Date_Signed:F17[i],
          Type_of_Contract:F18[i]
        }
}
console.log(this.Table_of_Data4);

  }

 // myData=this.Table_of_Data4;
  




_BL(data:any){     //1
  let l=data.length;
  let dt1=data.substring(1,l-1);   // rm { or }
  let dt=dt1.split('=').join(':');   // find = rp with :
  return dt;
    }
    _BLS(search:any,data:any){    //2
      let dt=this._BL(data);
      let cr=search;
      let crl=cr.length;
        let inx=dt.indexOf(cr);   //1 find index no
        let start_indx=inx+crl+2;  // character index no 
        let end_indx=dt.indexOf(']',start_indx+crl+2);
        console.log()
      return dt.substring(start_indx,end_indx).split(',');
    }

}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

