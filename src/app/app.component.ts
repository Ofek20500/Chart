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


constructor() {}

ngOnInit() {
  
}


}