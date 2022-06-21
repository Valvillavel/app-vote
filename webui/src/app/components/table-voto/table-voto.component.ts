import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-table-voto',
  templateUrl: './table-voto.component.html',
  styleUrls: ['./table-voto.component.scss'],
})
export class TableVotoComponent implements OnInit {
  @Input() columns:any;
  @Input() listRows:any;
  @Output() itemSelect=new EventEmitter<any>();
  @ViewChild('tables') table:any;
  rows = [];
  selected = [];
  items:any;
  ColumnMode = ColumnMode;
  SelectionType = SelectionType;
  expanded: any = {};
  timeout: any;
  error=false;

  constructor(
    public service:DataServiceService,
  ) {  }

  ngOnInit() {
    this.loadData()
  }
  loadData(){
    this.service.getCandidatos()
    .subscribe(candidatos=>{
      this.rows=candidatos;
      this.error=false;
    },()=>{
      this.error=true;
      this.rows=[];
    }) 
  }
  displayCheck(row) {
    return row.name !== 'Ethel Price';
  }
  ngOnChanges(changes: SimpleChanges) {
    this.listRows= changes.listRows.currentValue;
    this.rows=this.listRows
    this.selected=[]
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
