import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-votante',
  templateUrl: './votante.page.html',
  styleUrls: ['./votante.page.scss'],
})
export class VotantePage implements OnInit {
  columns=[];
  list:any;
  error=false;

  constructor(
    private service:DataServiceService
  ) { }

  ngOnInit() {
    this.columns=["Nombre","Apellidos","Propuesta","partidoPolitico"]
    this.loadCandidatos();
  }
  loadCandidatos(){
    this.list=[
      {nombre:"joe", apellidos:"doe"},
      {},
    ]
    this.service.getCandidatos()
    .subscribe(item=>{
      this.list=item
      console.log(this.list)
      this.error=false;
    },()=>{
      this.error=true;
      this.list=[];
    }) 
  }


}
