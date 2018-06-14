import { Component , OnInit , ViewChild , ElementRef} from '@angular/core';
import { ChartService } from './chart.service';
import { Chart } from 'chart.js';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VarService } from './var.service';

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
   
  




    var canvas  = <HTMLCanvasElement> document.getElementById("myChart");
    var ctx     = canvas.getContext("2d");
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        //    labels: ["Actual weight", "Chargeable weight"],
          datasets: [{
              label: 'Actual weight',
              data: [data[0].actweight],
              backgroundColor: [
                'rgba(82, 150, 100, 1)',
                'rgba(82, 150, 100, 1)',
                'rgba(82, 150, 100, 1)'
              ],
              borderColor: [
                'rgba(82, 150, 100, 1)',
                'rgba(82, 150, 100, 1)',
                'rgba(82, 150, 100, 1)'
              ],
              borderWidth:0.5,
          },{
              label: 'Chargeable weight',
              data: [data[0].chargeweight],
              backgroundColor: [
            'rgba(135, 185, 136, 1)',
            'rgba(135, 185, 136, 1)',
            'rgba(135, 185, 136, 1)'
            ],
            borderColor: [
            'rgba(135, 185, 186, 1)',
            'rgba(154, 229, 229, 1)',
            'rgba(133, 224, 224, 1)'
           ],
              borderWidth: 0.5,
          }             
        ],
          
      },
      options: {
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
        }
               
              }
});




// Chart number 2
var canvas2 = <HTMLCanvasElement> document.getElementById("myChart2");
            var ctx2 = canvas2.getContext("2d");
            var myChart2 = new Chart(ctx2, {
              type: 'bar',
              data: {
                //   labels: ["Actual weight", "Chargeable weight" ],
                datasets: [{
                    label: 'Actual weight',
                    data: [data[1].actweight],
                    backgroundColor: [
                      'rgba(82, 150, 100, 1)',
                      'rgba(82, 150, 100, 1)',
                      'rgba(82, 150, 100, 1)'
                    ],
                    borderColor: [
                      'rgba(82, 150, 100, 1)',
                      'rgba(82, 150, 100, 1)',
                      'rgba(82, 150, 100, 1)'
                    ],
                    borderWidth:0.5,
                },{
                    label: 'Chargeable weight',
                    data: [data[1].chargeweight],
                    backgroundColor: [
                  'rgba(135, 185, 136, 1)',
                  'rgba(135, 185, 136, 1)',
                  'rgba(135, 185, 136, 1)'
                  ],
                  borderColor: [
                  'rgba(135, 185, 186, 1)',
                  'rgba(154, 229, 229, 1)',
                  'rgba(133, 224, 224, 1)'
                 ],
                    borderWidth: 0.5,
                }             
              ],
     
            },
            options: {
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
              }
                     
                    }
});






// Chart number 3
var canvas3 = <HTMLCanvasElement> document.getElementById("myChart3");
            var ctx3 = canvas3.getContext("2d");
            var myChart3 = new Chart(ctx3, {
              type: 'bar',
              data: {
                //   labels: ['Actual weight', 'Chargeable weight'],
                  datasets: [{
                    label: 'Actual weight',
                    data: [data[2].actweight],
                    backgroundColor: [
                      'rgba(82, 150, 100, 1)',
                      'rgba(82, 150, 100, 1)',
                      'rgba(82, 150, 100, 1)'
                    ],
                    borderColor: [
                      'rgba(82, 150, 100, 1)',
                      'rgba(82, 150, 100, 1)',
                      'rgba(82, 150, 100, 1)'
                    ],
                    borderWidth:0.5,
                },{
                    label: 'Chargeable weight',
                    data: [data[2].chargeweight],
                    backgroundColor: [
                  'rgba(135, 185, 136, 1)',
                  'rgba(135, 185, 136, 1)',
                  'rgba(135, 185, 136, 1)'
                  ],
                  borderColor: [
                  'rgba(135, 185, 186, 1)',
                  'rgba(154, 229, 229, 1)',
                  'rgba(133, 224, 224, 1)'
                 ],
                    borderWidth: 0.5,
                }             
              ],
                  
              },
              options: {
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
                       
                      }
});




// Chart number 4

var canvas4 = <HTMLCanvasElement> document.getElementById("myChart4");
            var ctx4 = canvas4.getContext("2d");
            var myChart4 = new Chart(ctx4, {
              type: 'bar',
              data: {
                //   labels: ['Actual weight', 'Chargeable weight'],
                datasets: [{
                    label: 'Actual weight',
                    data: [data[3].actweight],
                    backgroundColor: [
                      'rgba(82, 150, 100, 1)',
                      'rgba(82, 150, 100, 1)',
                      'rgba(82, 150, 100, 1)'
                    ],
                    borderColor: [
                      'rgba(82, 150, 100, 1)',
                      'rgba(82, 150, 100, 1)',
                      'rgba(82, 150, 100, 1)'
                    ],
                    borderWidth:0.5,
                },{
                    label: 'Chargeable weight',
                    data: [data[3].chargeweight],
                    backgroundColor: [
                  'rgba(135, 185, 136, 1)',
                  'rgba(135, 185, 136, 1)',
                  'rgba(135, 185, 136, 1)'
                  ],
                  borderColor: [
                  'rgba(135, 185, 186, 1)',
                  'rgba(154, 229, 229, 1)',
                  'rgba(133, 224, 224, 1)'
                 ],
                    borderWidth: 0.5,
                }             
              ],
                  
              },
              options: {
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
                       
                      }
});


// Chart number 5

var canvas5 = <HTMLCanvasElement> document.getElementById("myChart5");
            var ctx5 = canvas5.getContext("2d");
            var myChart5 = new Chart(ctx5, {
              type: 'bar',
              data: {
                //   labels: ["Actual weight", "Chargeable weight"],
                datasets: [{
                    label: 'Actual weight',
                    data: [data[4].actweight],
                    backgroundColor: [
                      'rgba(82, 150, 100, 1)',
                      'rgba(82, 150, 100, 1)',
                      'rgba(82, 150, 100, 1)'
                    ],
                    borderColor: [
                      'rgba(82, 150, 100, 1)',
                      'rgba(82, 150, 100, 1)',
                      'rgba(82, 150, 100, 1)'
                    ],
                    borderWidth:0.5,
                },{
                    label: 'Chargeable weight',
                    data: [data[4].chargeweight],
                    backgroundColor: [
                  'rgba(135, 185, 136, 1)',
                  'rgba(135, 185, 136, 1)',
                  'rgba(135, 185, 136, 1)'
                  ],
                  borderColor: [
                  'rgba(135, 185, 186, 1)',
                  'rgba(154, 229, 229, 1)',
                  'rgba(133, 224, 224, 1)'
                 ],
                    borderWidth: 0.5,
                }             
              ],
                  
              },
              options: {
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
                       
                      }
});


// Chart number 6
var canvas6 = <HTMLCanvasElement> document.getElementById("myChart6");
            var ctx6 = canvas6.getContext("2d");
            var myChart6 = new Chart(ctx6, {
              type: 'bar',
              data: {
                //   labels: ["Actual weight", "Chargeable weight" ],
                datasets: [{
                    label: 'Actual weight',
                    data: [data[5].actweight],
                    backgroundColor: [
                      'rgba(82, 150, 100, 1)',
                      'rgba(82, 150, 100, 1)',
                      'rgba(82, 150, 100, 1)'
                    ],
                    borderColor: [
                      'rgba(82, 150, 100, 1)',
                      'rgba(82, 150, 100, 1)',
                      'rgba(82, 150, 100, 1)'
                    ],
                    borderWidth:0.5,
                },{
                    label: 'Chargeable weight',
                    data: [data[5].chargeweight],
                    backgroundColor: [
                  'rgba(135, 185, 136, 1)',
                  'rgba(135, 185, 136, 1)',
                  'rgba(135, 185, 136, 1)'
                  ],
                  borderColor: [
                  'rgba(135, 185, 186, 1)',
                  'rgba(154, 229, 229, 1)',
                  'rgba(133, 224, 224, 1)'
                 ],
                    borderWidth: 0.5,
                }             
              ],
                  
              },
              options: {
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
                       
                      }
});





























});
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