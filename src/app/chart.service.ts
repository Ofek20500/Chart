import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, filter, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Component , OnInit , ViewChild , ElementRef} from '@angular/core';
import { Chart } from 'chart.js';
import { VarService } from './var.service';


@Injectable({
  providedIn: 'root'
})
export class ChartService {

  actweight:string;
  aircraft:string = '';
  cbm:string;
  chargeweight:string;
  etd:string;
  flightno:string;
  fport:string;
  id:string;
  income:string;
  numofpieces:string;
  tport:string;



  configUrl = './assets/data/graph.json';
  // people: Object[];

  constructor(private httpClient:HttpClient) {}


  onNameKeyUp(event:any){
    console.log(event.target.value);
    this.aircraft = event.target.value;
    console.log(this.aircraft = event.target.value);
  }
 
  getProfile(){
    return this.httpClient.get(`https://my-json-server.typicode.com/Ofek20500/Chart/list`);
    // console.log(this.aircraft);
    }

  }


 