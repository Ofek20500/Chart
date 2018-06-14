import { Component , OnInit , ViewChild , ElementRef} from '@angular/core';
import { ChartService } from './chart.service';
import { Chart } from 'chart.js';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VarService } from './var.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  actweight:number;
  aircraft:string = '';
  cbm:number;
  chargeweight:number;
  etd:string;
  flightno:string;
  fport:string;
  id:number;
  income:number;
  numofpieces:number;
  tport:string;


constructor(private httpClient:HttpClient) {}

onNameKeyUp(event:any){
  console.log(event.target.value);
  this.aircraft = event.target.value;
  console.log(this.aircraft = event.target.value);
}

ngOnInit() {
  
}

getProfile(){
  this.httpClient.get(`https://my-json-server.typicode.com/Ofek20500/Chart/list`)
  .subscribe(
    (data:any[]) => {
      // if(data.length) {
      //   this.cbm = data[0].cbm;
      // }
      console.log(data[0]);
    }
  )
  console.log(this.aircraft);
}

}