import { Component, OnInit } from '@angular/core';

export interface ImageRecogn {
  name: string;
  size: string;
  result: string;
  download: string;
}
const ELEMENT_DATA: ImageRecogn[] = [
  {name: 'Dog', size: '400x550', result:'dog', download:''},
  {name: 'Cat', size: '400x550', result:'cat', download:''},
  {name: 'Cat1', size: '400x550', result:'cat', download:''},
  {name: 'Dog2', size:'400x550', result:'dog', download:''},
];

@Component({
  selector: 'app-history-table',
  templateUrl: './history-table.component.html',
  styleUrls: ['./history-table.component.scss']
})
export class HistoryTableComponent implements OnInit {

  displayedColumns: string[] = ['Image name', 'Size', 'Recognition result', 'Download link'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
