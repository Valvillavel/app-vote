import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-votante-list',
  templateUrl: './votante-list.page.html',
  styleUrls: ['./votante-list.page.scss'],
})
export class VotanteListPage implements OnInit {
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
    this.loadData();
    this.columns=["Nombre","Apellido","FechaNac","ci","Domicilio","yavoto","email","password"];
  }
  loadData(){
    this.service.getVotantes()
    .subscribe(votantes=>{
      this.list=votantes;
      this.error=false;
      console.log(this.list)
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
