import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OurDataService {

  constructor(
    private http: HttpClient) { }

    private Url = './assets/data/graph.json';


}

