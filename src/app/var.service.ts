import { Injectable } from '@angular/core';
import { BarChart } from './Barchart';
import { CHARTS } from './mock-file';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VarService {
  chartsUrl = './assets/data/graph.json'; 
  constructor(private varService: VarService) { }

  getCharts(): Observable<BarChart[]> {
    return of(CHARTS);



    
  }




}
