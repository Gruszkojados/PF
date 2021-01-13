import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  recsTab = [];

  constructor() {
    var k = (JSON.parse(jsonRecs)).recs;
    for(var i=0; i<k.length; i++) {
      this.recsTab.push(k[i]);
    }
  }

  ngOnInit(): void {
  }


}

const jsonRecs = `{
  "recs": [
    {
      "name": "rec 1",
      "id": "1"
    },
    {
      "name": "rec 2",
      "id": "2"
    },
    {
      "name": "rec 3",
      "id": "3"
    },
    {
      "name": "rec 4",
      "id": "4"
    },
    {
      "name": "rec 5",
      "id": "5"
    },
    {
      "name": "rec 6",
      "id": "6"
    }
  ]
}`
