import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-table-voto',
  templateUrl: './table-voto.component.html',
  styleUrls: ['./table-voto.component.scss'],
})
export class TableVotoComponent implements OnInit {
  @Input() columns:any;
  @Input() listRows:any;
  @ViewChild('tables') table:any;
  rows = [];
  ColumnMode = ColumnMode;
  SelectionType = SelectionType;
  expanded: any = {};
  timeout: any;
  error=false;

  constructor() { }

  ngOnInit() {
    this.rows=this.listRows
    console.log(this.listRows)
    console.log(this.columns);
  }
  displayCheck(row) {
    return row.name !== 'Ethel Price';
  }
  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log('paged!', event);
    }, 100);
  }
  toggleExpanRow(row) {
    console.log('Toggled Expand Row!', row);
    this.table.rowDetail.toggleExpandRow(row);
  }
  onDetailToggle(event){
    console.log('Detail Toggle', event);
  }

}
