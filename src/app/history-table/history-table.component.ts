import { Component, OnInit } from '@angular/core';

export interface ImageRecogn {
  name: string;
  size: string;
  result: string;
  download: string;
}
const ELEMENT_DATA: ImageRecogn[] = [
  {name: 'Dog', size: '400x550', result:'dog', download:'https://www.google.com/search?q=dog&client'},
  {name: 'Cat', size: '400x550', result:'dog', download:''},
  {name: 'Cat1', size: '400x550', result:'dog', download:''},
  {name: 'Dog2', size:'400x550', result:'dog', download:''},
];

@Component({
  selector: 'app-history-table',
  templateUrl: './history-table.component.html',
  styleUrls: ['./history-table.component.scss']
})
export class HistoryTableComponent implements OnInit {

  displayedColumns: string[] = ['name', 'size', 'result', 'download'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
