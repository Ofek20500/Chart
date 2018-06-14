import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, filter, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChartService {

  configUrl = './assets/data/graph.json';

  constructor(private http: HttpClient) { 


    this.getJSON().subscribe(data => {
      console.log(data)
  });
  }

  
  public getJSON(): Observable<any> {
    return this.http.get(this.configUrl)
}

}
