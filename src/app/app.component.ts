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

// onNameKeyUp(event:any){
//   console.log(event.target.value);
//   this.aircraft = event.target.value;
//   console.log(this.aircraft = event.target.value);
// }

ngOnInit(): void  {

  this.httpClient.get<DataResponse>('https://my-json-server.typicode.com/Ofek20500/Chart/list').subscribe(data => {
      console.log('actweight: ' + data[0].actweight);
      console.log('Id: '        + data.id);
      console.log('aircraft: '  + data.aircraft);
      console.log('fport: '     + data.fport);
   
  
      var chartColors = {
        red: 'rgb(234, 57, 57)',
        green: 'rgba(82, 150, 100, 1)'
      };
      



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
          // },{
          //     label: 'Chargeable weight',
          //     data: [data[0].chargeweight],
          //     backgroundColor: [
          //   'rgba(135, 185, 136, 1)',
          //   'rgba(135, 185, 136, 1)',
          //   'rgba(135, 185, 136, 1)'
          //   ],
          //   borderColor: [
          //   'rgba(135, 185, 186, 1)',
          //   'rgba(154, 229, 229, 1)',
          //   'rgba(133, 224, 224, 1)'
          //  ],
          //     borderWidth: 0.5,
          // }             
        ],
          
      },
      options: {
        legend: { display: false },
        title: {
              display: true,
              text: data[0].flightno
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false,
                    min: 0,
                    max: 150000,
                    // stepSize: 50000,
                }
            }],
            xAxes: [{
                     barPercentage: 0.50,
                    //  maxBarThickness: 15,
            }]
        },
               
        plugins: {
          datalabels: {
            align: 'end',
            anchor: 'end',
            color: 'black',
            font: {
              weight: 'bold'
            },
          }
        }
}});




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
                // ,{
                //     label: 'Chargeable weight',
                //     data: [data[1].chargeweight],
                //     backgroundColor: [
                //   'rgba(135, 185, 136, 1)',
                //   'rgba(135, 185, 136, 1)',
                //   'rgba(135, 185, 136, 1)'
                //   ],
                //   borderColor: [
                //   'rgba(135, 185, 186, 1)',
                //   'rgba(154, 229, 229, 1)',
                //   'rgba(133, 224, 224, 1)'
                //  ],
                //     borderWidth: 0.5,
                // }             
              ],
     
            },
            options: {
              legend: { display: false },
              title: {
                    display: true,
                    text: data[1].flightno
              },
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero: false,
                          min: 0,
                          max: 150000,
                          // stepSize: 50000,
                      }
                  }],
                  xAxes: [{
                           barPercentage: 0.50,
                          //  maxBarThickness: 15,
                  }]
              },
                     
              plugins: {
                datalabels: {
                  align: 'end',
                  anchor: 'end',
                  color: 'black',
                  font: {
                    weight: 'bold'
                  },
                }
              }
}});






// Chart number 3
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
                // },{
                //     label: 'Chargeable weight',
                //     data: [data[2].chargeweight],
                //     backgroundColor: [
                //       chartColors.red,
                //       chartColors.red
                //   ],
                //   borderColor: [
                //     chartColors.red,
                //     chartColors.red
                //  ],
                //     borderWidth: 0.5,
                // }             
              ],
                  
              },
              options: {
                legend: { display: false },
                title: {
                      display: true,
                      text: data[2].flightno
                },
                scales: {
                              yAxes: [{
                                  ticks: {
                                    beginAtZero: true,
                                    min: 0,
                                    max: 150000,
                                    // stepSize: 40000,
                                  }
                                     }],
                                     xAxes: [{
                                         barPercentage: 0.5,
                                        //  maxBarThickness: 15,
                                     }]

                       },
                       plugins: {
                        datalabels: {
                          align: 'end',
                          anchor: 'end',
                          color: 'black',
                          font: {
                            weight: 'bold'
                          },
                        }
                      }
}});




// Chart number 4

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
                // ,
                // {
                //     label: 'Chargeable weight',
                //     data: [data[3].chargeweight],
                //     backgroundColor: [
                //   'rgba(135, 185, 136, 1)',
                //   'rgba(135, 185, 136, 1)',
                //   'rgba(135, 185, 136, 1)'
                //   ],
                //   borderColor: [
                //   'rgba(135, 185, 186, 1)',
                //   'rgba(154, 229, 229, 1)',
                //   'rgba(133, 224, 224, 1)'
                //  ],
                //     borderWidth: 0.5,
                // }             
              ],
                  
              },
              options: {
                legend: { display: false },
                title: {
                      display: true,
                      text: data[3].flightno
                },
                scales: {
                              yAxes: [{
                                  ticks: {
                                    beginAtZero: true,
                                    min: 0,
                                    max: 150000,
                                    // stepSize: 40000,
                                  }
                                     }],
                                     xAxes: [{
                                         barPercentage: 0.5,
                                        //  maxBarThickness: 15,
                                     }]

                       },
                       plugins: {
                        datalabels: {
                          align: 'end',
                          anchor: 'end',
                          color: 'black',
                          font: {
                            weight: 'bold'
                          },
                        }
                      }
}});



// Chart number 5

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
                // ,{
                //     label: 'Chargeable weight',
                //     data: [data[4].chargeweight],
                //     backgroundColor: [
                //   'rgba(135, 185, 136, 1)',
                //   'rgba(135, 185, 136, 1)',
                //   'rgba(135, 185, 136, 1)'
                //   ],
                //   borderColor: [
                //   'rgba(135, 185, 186, 1)',
                //   'rgba(154, 229, 229, 1)',
                //   'rgba(133, 224, 224, 1)'
                //  ],
                //     borderWidth: 0.5,
                // }             
              ],
                  
              },
              options: {
                legend: { display: false },
                title: {
                      display: true,
                      text: data[4].flightno
                },
                scales: {
                              yAxes: [{
                                  ticks: {
                                    beginAtZero: true,
                                    min: 0,
                                    max: 150000,
                                    // stepSize: 40000,
                                  }
                                     }],
                                     xAxes: [{
                                         barPercentage: 0.5,
                                        //  maxBarThickness: 15,
                                     }]

                       },
                       
                       plugins: {
                        datalabels: {
                          align: 'end',
                          anchor: 'end',
                          color: 'black',
                          font: {
                            weight: 'bold'
                          },
                        }
                      }
}});



// Chart number 6
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
                // ,{
                //     label: 'Chargeable weight',
                //     data: [data[5].chargeweight],
                //     backgroundColor: [
                //   'rgba(135, 185, 136, 1)',
                //   'rgba(135, 185, 136, 1)',
                //   'rgba(135, 185, 136, 1)'
                //   ],
                //   borderColor: [
                //   'rgba(135, 185, 186, 1)',
                //   'rgba(154, 229, 229, 1)',
                //   'rgba(133, 224, 224, 1)'
                //  ],
                //     borderWidth: 0.5,
                // }             
              ]},
              options: {
                legend: { display: false },
                title: {
                      display: true,
                      text: data[5].flightno
                },
                scales: {
                              yAxes: [{
                                  ticks: {
                                    beginAtZero: true,
                                    min: 0,
                                    max: 150000,
                                    // stepSize: 40000,
                                  }
                                     }],
                                     xAxes: [{
                                         barPercentage: 0.5,
                                        //  maxBarThickness: 15,
                                     }]

                       },
                       plugins: {
                        datalabels: {
                          align: 'end',
                          anchor: 'end',
                          color: 'black',
                          font: {
                            weight: 'bold'
                          },
                        }
                      }
}});


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


// $(function() {
//   $('.res').hide();
//   $('#menu').change(function(){
     
//       $('.res').hide();
//       $('#' + $(this).val()).show();

//       var selectedOption = $(this).val();
      
//       if ( selectedOption === 'one' ) {
//           myChart2A.destroy();
//           myChart2B.destroy();
//           myChart2C.destroy();
//           myChart3A.destroy();
//           myChart3B.destroy();
//           myChart3C.destroy();
//           myChart1A = new Chart(chart1A).Doughnut(pieData1A);
//           myChart1B = new Chart(chart1B).Doughnut(pieData1B);
//           myChart1C = new Chart(chart1C).Doughnut(pieData1C);
//           console.log(selectedOption);
//       } else if ( selectedOption === 'two' ) {
//           myChart1A.destroy();
//           myChart1B.destroy();
//           myChart1C.destroy();
//           myChart3A.destroy();
//           myChart3B.destroy();
//           myChart3C.destroy();
//           myChart2A = new Chart(chart2A).Doughnut(pieData2A);
//           myChart2B = new Chart(chart2B).Doughnut(pieData2B);
//           myChart2C = new Chart(chart2C).Doughnut(pieData2C);
//           console.log(selectedOption);
//       } else if ( selectedOption === 'three' ) {
//           myChart2A.destroy();
//           myChart2B.destroy();
//           myChart2C.destroy();
//           myChart1A.destroy();
//           myChart1B.destroy();
//           myChart1C.destroy();
//           myChart3A = new Chart(chart3A).Doughnut(pieData3A);
//           myChart3B = new Chart(chart3B).Doughnut(pieData3B);
//           myChart3C = new Chart(chart3C).Doughnut(pieData3C);
//           console.log(selectedOption);
//       } else {
//           myChart3A.destroy();
//           myChart3B.destroy();
//           myChart3C.destroy();
//           myChart2A.destroy();
//           myChart2B.destroy();
//           myChart2C.destroy();
//           myChart1A.destroy();
//           myChart1B.destroy();
//           myChart1C.destroy();
//           console.log("error");
//       }
//   });
// };




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




























































// getProfile(){
//   this.httpClient.get(`https://my-json-server.typicode.com/Ofek20500/Chart/list`)
//   .subscribe(
//     (data:any[]) => {
//       // if(data.length) {
//       //   this.cbm = data[0].cbm;
//       // }
      
//       console.log(data[0]);
//     }
//   )
//   console.log(this.aircraft);
// }



// showProfile() {
//   this.chartService.getProfile()
//     .subscribe((data: any) => this.graphs = 
//     {
//         actweight: data["actweight"],
//         aircraft:  data['aircraft'],
//         cbm: data['cbm'],
//         chargeweight:  data['chargeweight'],
//         etd: data['etd'],
//         flightno:  data['flightno'],
//         fport: data['fport'],
//         id:  data['id'],
//         income: data['income'],
//         numofpieces:  data['tnumofpieces'],
//         tport:  data['tport']
//     }
//   );
// }


}