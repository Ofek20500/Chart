import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, filter, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChartService {

  configUrl = './assets/data/graph.json';
  // people: Object[];

  constructor(private http: HttpClient) { 

 
  
  }



}
