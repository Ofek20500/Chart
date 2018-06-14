import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const charts = [
      {
        "actweight": 83932,
        "aircraft":"4X-ICB",
        "cbm": 400.5660,
        "chargeweight":87826,
        "etd":"30\/05\/2018 17:00",
        "flightno":"ICL905",
        "fport":"TLV",
        "id":29428,
        "income":71160.51,
        "numofpieces":556,
        "tport":"LGG"
    },
    {
        "actweight":83937,
        "aircraft":"4X-ICC",
        "cbm":523.4360,
        "chargeweight":117023,
        "etd":"30\/05\/2018 20:00",
        "flightno":"ICL991",
        "fport":"LGG",
        "id":29433,
        "income":313016.5910,
        "numofpieces":1664,
        "tport":"JFK"
    },
    {
        "actweight":86262,
        "aircraft":"4X-ICB",
        "cbm":646.4260,
        "chargeweight":122338,
        "etd":"31\/05\/2018 02:00",
        "flightno":"ICL906",
        "fport":"LGG",
        "id":29432,
        "income":266078.6470,
        "numofpieces":10712,
        "tport":"LCA"
    }
    ];
    return {charts};
  }
}