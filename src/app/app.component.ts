import { Component , OnInit , ViewChild , ElementRef} from '@angular/core';
import { ChartService } from './chart.service';
import { Chart } from 'chart.js';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VarService } from './var.service';
import 'chartjs-plugin-datalabels';



import { BarChart } from './BarChart'; // imports the Chart Structure
import { CHARTS } from './mock-file'; // has the data

// import { BarChart } from './BarChart'; // imports the Chart Structure
// import { CHARTS } from './mock-file'; // has the data


interface DataResponse {
  actweight: string;
  aircraft: string;
  cbm: string;
  chargeweight: string;
  etd: string;
  flightno : string;
  fport: string;
  id: string;
  income : string;
  numofpieces: string;
  tport: string;
}








@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  

graphs = CHARTS;
selectedChart: BarChart;
flight1 = [];
flight2 = [];
flight3 = [];
flight4 = [];
flight5 = [];
flight6 = [];

flightno1 :any;
flightno2 :any;
flightno3 :any;
flightno4 :any;
flightno5 :any;
flightno6 :any;

aircraft1 :any;
aircraft2 :any;
aircraft3 :any;
aircraft4 :any;
aircraft5 :any;
aircraft6 :any;

cbm1 :any;
cbm2 :any;
cbm3 :any;
cbm4 :any;
cbm5 :any;
cbm6 :any;


etd1 :any;
etd2 :any;
etd3 :any;
etd4 :any;
etd5 :any;
etd6 :any;

fport1 :any;
fport2 :any;
fport3 :any;
fport4 :any;
fport5 :any;
fport6 :any;

tport1 :any;
tport2 :any;
tport3 :any;
tport4 :any;
tport5 :any;
tport6 :any;

income1 :any;
income2 :any;
income3 :any;
income4 :any;
income5 :any;
income6 :any;

numofpieces1 :any;
numofpieces2 :any;
numofpieces3 :any;
numofpieces4 :any;
numofpieces5 :any;
numofpieces6 :any;

  // actweight:number;
  // aircraft:string = '';
  // cbm:number;
  // chargeweight:number;
  // etd:string;
  // flightno:string;
  // fport:string;
  // id:number;
  // income:number;
  // numofpieces:number;
  // tport:string;



constructor(private httpClient:HttpClient) {}

ngOnInit(): void  {

  this.httpClient.get<DataResponse>('https://my-json-server.typicode.com/Ofek20500/Chart/list').subscribe(data => {
      console.log('actweight: ' + data[2].actweight);
      console.log('Id: '        + data.id);
      console.log('aircraft: '  + data.aircraft);
      console.log('fport: '     + data.fport);

      
  
        this.flight1 = [data[0].flightno, 
                        data[0].aircraft,
                        data[0].cbm,
                        data[0].etd,
                        data[0].fport,
                        data[0].tport,
                        data[0].income,
                        data[0].numofpieces
                        ];

        this.flight2 = [data[1].flightno, 
                        data[1].aircraft,
                        data[1].cbm,
                        data[1].etd,
                        data[1].fport,
                        data[1].tport,
                        data[1].income,
                        data[1].numofpieces
                        ];

        this.flight3 = [data[2].flightno, 
                        data[2].aircraft,
                        data[2].cbm,
                        data[2].etd,
                        data[2].fport,
                        data[2].tport,
                        data[2].income,
                        data[2].numofpieces
                        ];
                    
        this.flight4 = [data[3].flightno, 
                        data[3].aircraft,
                        data[3].cbm,
                        data[3].etd,
                        data[3].fport,
                        data[3].tport,
                        data[3].income,
                        data[3].numofpieces
                        ];

        this.flight5 = [data[4].flightno, 
                        data[4].aircraft,
                        data[4].cbm,
                        data[4].etd,
                        data[4].fport,
                        data[4].tport,
                        data[4].income,
                        data[4].numofpieces
                        ];

       this.flight6 = [data[5].flightno, 
                        data[5].aircraft,
                        data[5].cbm,
                        data[5].etd,
                        data[5].fport,
                        data[5].tport,
                        data[5].income,
                        data[5].numofpieces
                        ];                    
                        
                      

  this.flightno1 = this.flight1[0];
  this.flightno2 = this.flight2[0];
  this.flightno3 = this.flight3[0];
  this.flightno4 = this.flight4[0];
  this.flightno5 = this.flight5[0];
  this.flightno6 = this.flight6[0];
     

  this.aircraft1 = this.flight1[1];
  this.aircraft2 = this.flight2[1];
  this.aircraft3 = this.flight3[1];
  this.aircraft4 = this.flight4[1];
  this.aircraft5 = this.flight5[1];
  this.aircraft6 = this.flight6[1];

  this.cbm1 = (Math.round(this.flight1[2]*100)/100).toString();
  this.cbm2 = (Math.round(this.flight2[2]*100)/100).toString();
  this.cbm3 = (Math.round(this.flight3[2]*100)/100).toString();
  this.cbm4 = (Math.round(this.flight4[2]*100)/100).toString();
  this.cbm5 = (Math.round(this.flight5[2]*100)/100).toString();
  this.cbm6 = (Math.round(this.flight6[2]*100)/100).toString();

  this.etd1 = this.flight1[3];
  this.etd2 = this.flight2[3];
  this.etd3 = this.flight3[3];
  this.etd4 = this.flight4[3];
  this.etd5 = this.flight5[3];
  this.etd6 = this.flight6[3];

  this.fport1 = this.flight1[4];
  this.fport2 = this.flight2[4];
  this.fport3 = this.flight3[4];
  this.fport4 = this.flight4[4];
  this.fport5 = this.flight5[4];
  this.fport6 = this.flight6[4];

  this.tport1 = this.flight1[5];
  this.tport2 = this.flight2[5];
  this.tport3 = this.flight3[5];
  this.tport4 = this.flight4[5];
  this.tport5 = this.flight5[5];
  this.tport6 = this.flight6[5];

  this.income1 = Math.round(this.flight1[6]).toString();
  this.income2 = Math.round(this.flight2[6]).toString();
  this.income3 = Math.round(this.flight3[6]).toString();
  this.income4 = Math.round(this.flight4[6]).toString();
  this.income5 = Math.round(this.flight5[6]).toString();
  this.income6 = Math.round(this.flight6[6]).toString();
  
  this.numofpieces1 = this.flight1[7];
  this.numofpieces2 = this.flight2[7];
  this.numofpieces3 = this.flight3[7];
  this.numofpieces4 = this.flight4[7];
  this.numofpieces5 = this.flight5[7];
  this.numofpieces6 = this.flight6[7];

// Parameters to make the bar change color
      var chartColors = {
        red: 'rgb(234, 57, 57)',
        green: 'rgba(82, 150, 100, 1)'
      };
 
      

// Chart number 1    
      var options = {
        fontFamily: 'Amaranth',
        responsive: true,
        legend: { display: false},
        title: {
          display: true,
          text: data[0].flightno,
          fontFamily: 'Amaranth',
          fontSize: 16,
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: false,
                min: 0,
                max: 180000,
               stepSize: 50000,
               fontFamily: 'Amaranth',
               fontSize: 16,
            }
        }],
        xAxes: [{
                 barPercentage: 0.50,
                 ticks: {
                  fontFamily: 'Amaranth',
                  fontSize: 16,
                 },
                 
                //  maxBarThickness: 15,
        }]
    },
           
    plugins: {
      datalabels: {
        align: 'end',
        anchor: 'end',
        color: 'black',
        font: {
          weight: 'bold',
          Family: 'Amaranth',
          size: 16,
        },}}};


    var canvas  = <HTMLCanvasElement> document.getElementById("myChart");
    var ctx     = canvas.getContext("2d");
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ["Actual weight", "Chargeable weight"],
          datasets: [{
              label: 'Actual weight',
              data: [data[0].actweight,data[0].chargeweight],
              backgroundColor: [
                chartColors.red,
                chartColors.red
              ],
              borderColor: [
                chartColors.red,
                chartColors.red
              ],
              borderWidth:0.5,
            }           
        ],
          
      },
      options: options
});












// Chart number 2
var options2 = {
  legend: { display: false},
  responsive: true,
  title: {
    display: true,
    text: data[1].flightno,
    fontFamily: 'Amaranth',
    fontSize: 16,
},
scales: {
  yAxes: [{
      ticks: {
          beginAtZero: false,
          min: 0,
          max: 180000,
         stepSize: 50000,
         fontFamily: 'Amaranth',
          fontSize: 16,
        
      }
  }],
  xAxes: [{
           barPercentage: 0.50,
           ticks: {
            fontFamily: 'Amaranth',
            fontSize: 16,
           },
          //  maxBarThickness: 15,
  }]
},
     
plugins: {
datalabels: {
  align: 'end',
  anchor: 'end',
  color: 'black',
  font: {
    weight: 'bold',
    Family: 'Amaranth',
    size: 16,
  },}}};

// Chart number 2
var canvas2 = <HTMLCanvasElement> document.getElementById("myChart2");
            var ctx2 = canvas2.getContext("2d");
            var myChart2 = new Chart(ctx2, {
              type: 'bar',
              data: {
                labels: ["Actual weight", "Chargeable weight" ],
                datasets: [{
                    label: 'Actual weight',
                    data: [data[1].actweight,data[1].chargeweight],
                    backgroundColor: [
                      chartColors.red,
                      chartColors.red
                      // 'rgba(82, 150, 100, 1)',
                      // 'rgba(82, 150, 100, 1)',
                      // 'rgba(82, 150, 100, 1)'
                    ],
                    borderColor: [
                      chartColors.red,
                      chartColors.red
                      // 'rgba(82, 150, 100, 1)',
                      // 'rgba(82, 150, 100, 1)',
                      // 'rgba(82, 150, 100, 1)'
                    ],
                    borderWidth:0.5,
                }            
              ],
     
            },
            options: options2});



 // Chart number 3            
var options3 = {
  legend: { display: false},
              responsive: true,
              title: {
                display: true,
                text: data[2].flightno,
                fontFamily: 'Amaranth',
                fontSize: 16,
            },
            scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: false,
                      min: 0,
                      max: 180000,
                     stepSize: 50000,
                     fontFamily: 'Amaranth',
                     fontSize: 16,
                  }
              }],
              xAxes: [{
                       barPercentage: 0.50,
                       ticks: {
                        fontFamily: 'Amaranth',
                        fontSize: 16,
                       },
                      //  maxBarThickness: 15,
              }]
            },
                 
            plugins: {
            datalabels: {
              align: 'end',
              anchor: 'end',
              color: 'black',
              font: {
                weight: 'bold',
                Family: 'Amaranth',
                size: 16,
              },}}};
            

var canvas3 = <HTMLCanvasElement> document.getElementById("myChart3");
            var ctx3 = canvas3.getContext("2d");
            var myChart3 = new Chart(ctx3, {
              type: 'bar',
              data: {
                  labels: ['Actual weight', 'Chargeable weight'],
                  datasets: [{
                    label: 'Actual weight',
                    data: [data[2].actweight,data[2].chargeweight],
                    backgroundColor: [
                      chartColors.red,
                      chartColors.red
                    ],
                    borderColor: [
                      chartColors.red,
                      chartColors.red
                    ],
                    borderWidth:0.5,
                  }         
              ],
                  
              },
              options:options3});




// Chart number 4


var options4 = {
  legend: { display: false},
  responsive: true,
  title: {
    display: true,
    text: data[3].flightno,
    fontFamily: 'Amaranth',
    fontSize: 16,
},
scales: {
  yAxes: [{
      ticks: {
          beginAtZero: false,
          min: 0,
          max: 180000,
         stepSize: 50000,
         fontFamily: 'Amaranth',
         fontSize: 16,
      }
  }],
  xAxes: [{
           barPercentage: 0.50,
           ticks: {
            fontFamily: 'Amaranth',
            fontSize: 16,
           },
          //  maxBarThickness: 15,
  }]
},
     
plugins: {
datalabels: {
  align: 'end',
  anchor: 'end',
  color: 'black',
  font: {
    weight: 'bold',
    Family: 'Amaranth',
    size: 16,
  },}}};


var canvas4 = <HTMLCanvasElement> document.getElementById("myChart4");
            var ctx4 = canvas4.getContext("2d");
            var myChart4 = new Chart(ctx4, {
              type: 'bar',
              data: {
                 labels: ['Actual weight', 'Chargeable weight'],
                datasets: [{
                    label: 'Actual weight',
                    data: [data[3].actweight,data[3].chargeweight],
                    backgroundColor: [
                      chartColors.red,
                      chartColors.red
                    ],
                    borderColor: [
                      chartColors.red,
                      chartColors.red
                    ],
                    borderWidth:0.5,
                }            
              ],
                  
              },
              options: options4});



// Chart number 5

var options5 = {
  legend: { display: false},
  responsive: true,
  title: {
    display: true,
    text: data[4].flightno,
    fontFamily: 'Amaranth',
    fontSize: 16,
},
scales: {
  yAxes: [{
      ticks: {
          beginAtZero: false,
          min: 0,
          max: 180000,
         stepSize: 50000,
         fontFamily: 'Amaranth',
         fontSize: 16,
      }
  }],
  xAxes: [{
           barPercentage: 0.50,
           ticks: {
            fontFamily: 'Amaranth',
            fontSize: 16,
           },
          //  maxBarThickness: 15,
  }]
},
     
plugins: {
datalabels: {
  align: 'end',
  anchor: 'end',
  color: 'black',
  font: {
    weight: 'bold',
    Family: 'Amaranth',
     size: 16,
  },}}};

var canvas5 = <HTMLCanvasElement> document.getElementById("myChart5");
            var ctx5 = canvas5.getContext("2d");
            var myChart5 = new Chart(ctx5, {
              type: 'bar',
              data: {
                labels: ["Actual weight", "Chargeable weight"],
                datasets: [{
                    label: 'Actual weight',
                    data: [data[4].actweight,data[4].chargeweight],
                    backgroundColor: [
                      chartColors.red,
                      chartColors.red
                    ],
                    borderColor: [
                      chartColors.red,
                      chartColors.red
                    ],
                    borderWidth:0.5,
                }           
              ],
                  
              },
              options: options5});



// Chart number 6

var options6 = {
  legend: { display: false},
  responsive: true,
  title: {
    display: true,
    text: data[5].flightno,
    fontFamily: 'Amaranth',
         fontSize: 16,
},
scales: {
  yAxes: [{
      ticks: {
          beginAtZero: false,
          min: 0,
          max: 180000,
         stepSize: 50000,
         fontFamily: 'Amaranth',
         fontSize: 16,
      }
  }],
  xAxes: [{
           barPercentage: 0.50,
           ticks: {
            fontFamily: 'Amaranth',
            fontSize: 16,
           },
          //  maxBarThickness: 15,
  }]
},
     
plugins: {
datalabels: {
  align: 'end',
  anchor: 'end',
  color: 'black',
  font: {
    weight: 'bold',
    Family: 'Amaranth',
     size: 16,
  },}}};


var canvas6 = <HTMLCanvasElement> document.getElementById("myChart6");
            var ctx6 = canvas6.getContext("2d");
            var myChart6 = new Chart(ctx6, {
              type: 'bar',
              data: {
                labels: ["Actual weight", "Chargeable weight" ],
                datasets: [{
                    label: 'Actual weight',
                    data: [data[5].actweight,data[5].chargeweight],
                    backgroundColor: [
                      chartColors.red,
                      chartColors.red
                    ],
                    borderColor: [
                      chartColors.red,
                      chartColors.red
                    ],
                    borderWidth:0.5,
                }           
              ]},
              options: options6});




// Function to change Bar color
var colorChangeValue = 100000; //set this to whatever is the deciding color change value

  var dataset2 = myChart.data.datasets[0];
  for (var i = 0; i < dataset2.data.length; i++) {
    if (dataset2.data[i] > colorChangeValue) {
      dataset2.backgroundColor[i] = chartColors.green;
      dataset2.borderColor[i] = chartColors.green;
    }
  }
  myChart.update();

var dataset = myChart2.data.datasets[0];
  for (var i = 0; i < dataset.data.length; i++) {
    if (dataset.data[i] > colorChangeValue) {
       dataset.backgroundColor[i] = chartColors.green;
       dataset.borderColor[i] = chartColors.green;
      }
   }
myChart2.update();

var dataset = myChart3.data.datasets[0];
  for (var i = 0; i < dataset.data.length; i++) {
    if (dataset.data[i] > colorChangeValue) {
       dataset.backgroundColor[i] = chartColors.green;
       dataset.borderColor[i] = chartColors.green;
      }
   }
myChart3.update();

var dataset = myChart4.data.datasets[0];
  for (var i = 0; i < dataset.data.length; i++) {
    if (dataset.data[i] > colorChangeValue) {
       dataset.backgroundColor[i] = chartColors.green;
       dataset.borderColor[i] = chartColors.green;
      }
   }
myChart4.update();

var dataset = myChart5.data.datasets[0];
  for (var i = 0; i < dataset.data.length; i++) {
    if (dataset.data[i] > colorChangeValue) {
       dataset.backgroundColor[i] = chartColors.green;
       dataset.borderColor[i] = chartColors.green;
      }
   }
myChart5.update();

var dataset = myChart6.data.datasets[0];
  for (var i = 0; i < dataset.data.length; i++) {
    if (dataset.data[i] > colorChangeValue) {
       dataset.backgroundColor[i] = chartColors.green;
       dataset.borderColor[i] = chartColors.green;
      }
   }
myChart6.update();


















});




}


onSelect(chart: BarChart): void {
  this.selectedChart = chart;
}

myFunction(i) {
 console.log(i);

 if (i == 0) {
  console.log("yay");
  document.getElementById('chart1').style.display='block';
  document.getElementById('chart2').style.display='none';
  document.getElementById('chart3').style.display='none';
  document.getElementById('chart4').style.display='none';
  document.getElementById('chart5').style.display='none';
  document.getElementById('chart6').style.display='none';

 }  else if (i == 1) {
  document.getElementById('chart1').style.display='none';
  document.getElementById('chart2').style.display='block';
  document.getElementById('chart3').style.display='none';
  document.getElementById('chart4').style.display='none';
  document.getElementById('chart5').style.display='none';
  document.getElementById('chart6').style.display='none';

  
}  else if (i == 2) {
  document.getElementById('chart1').style.display='none';
  document.getElementById('chart2').style.display='none';
  document.getElementById('chart3').style.display='block';
  document.getElementById('chart4').style.display='none';
  document.getElementById('chart5').style.display='none';
  document.getElementById('chart6').style.display='none';

  
}  else if (i == 3) {
  document.getElementById('chart1').style.display='none';
  document.getElementById('chart2').style.display='none';
  document.getElementById('chart3').style.display='none';
  document.getElementById('chart4').style.display='block';
  document.getElementById('chart5').style.display='none';
  document.getElementById('chart6').style.display='none';

  
}  else if (i == 4) {
  document.getElementById('chart1').style.display='none';
  document.getElementById('chart2').style.display='none';
  document.getElementById('chart3').style.display='none';
  document.getElementById('chart4').style.display='none';
  document.getElementById('chart5').style.display='block';
  document.getElementById('chart6').style.display='none';

}  
else if (i == 5) {
  document.getElementById('chart1').style.display='none';
  document.getElementById('chart2').style.display='none';
  document.getElementById('chart3').style.display='none';
  document.getElementById('chart4').style.display='none';
  document.getElementById('chart5').style.display='none';
  document.getElementById('chart6').style.display='block';

}  
else {
  document.getElementById('chart1').style.display='block';
  document.getElementById('chart2').style.display='block';
  document.getElementById('chart3').style.display='block';
  document.getElementById('chart4').style.display='block';
  document.getElementById('chart5').style.display='block';
  document.getElementById('chart6').style.display='block';
}



}

ALLFlight() {
  
 
   document.getElementById('chart1').style.display='block';
   document.getElementById('chart2').style.display='block';
   document.getElementById('chart3').style.display='block';
   document.getElementById('chart4').style.display='block';
   document.getElementById('chart5').style.display='block';
   document.getElementById('chart6').style.display='block';
 }



}