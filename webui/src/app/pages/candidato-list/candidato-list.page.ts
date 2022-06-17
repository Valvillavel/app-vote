import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-candidato-list',
  templateUrl: './candidato-list.page.html',
  styleUrls: ['./candidato-list.page.scss'],
})
export class CandidatoListPage implements OnInit {
  columns=[];
  cand:any;
  list:any;
  var:any;
  error=false;
  entitiesSelected:any;

  constructor(
    public rutaActiva: ActivatedRoute,
    public service:DataServiceService,
    private router:Router,
  ) { }

  ngOnInit() {
    this.loadData()
    this.columns=["Nombre","Apellido","Propuesta","Partido politico","Email", "pass"];
  }
  loadData(){
    this.service.getCandidatos()
    .subscribe(candidatos=>{
      this.list=candidatos;
      this.error=false;
    },()=>{
      this.error=true;
      this.list=[];
    }) 
  }
  getEntitySelected(dataSelected){
    this.entitiesSelected=dataSelected
    console.log(this.entitiesSelected)  
  }
  openEditForm(){}
  deleteData(){}

}
