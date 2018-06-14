// Our Imports
import { Component , OnInit , ViewChild , ElementRef} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { BarChart } from '../BarChart'; // imports the Chart Structure
import { CHARTS } from '../mock-file'; // has the data
import { VarService } from '../var.service';
import { Chart } from 'chart.js';
import { ChartService } from '../chart.service';



@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

charts: BarChart[];
selectedChart: BarChart;

  // CHARTS: Chart = {
  //   actweight: 83932,
  //   aircraft: "4X-ICB",
  //   cbm: 400.5660 ,
  //   chargeweight: 87826,
  //   etd:"30\/05\/2018 17:00",
  //   flightno:"ICL905",
  //   fport:"TLV",
  //   id: 29428 ,
  //   income:71160.51,
  //   numofpieces:556,
  //   tport:"LGG"
  // }

  constructor(private varService: VarService) { }
  

  ngOnInit() {
    this.getCharts();
    

  }

  onSelect(chart: BarChart): void {
    this.selectedChart = chart;
  }


  getCharts(): void {
    this.varService.getCharts().subscribe(charts => this.charts = charts);
  }




}
