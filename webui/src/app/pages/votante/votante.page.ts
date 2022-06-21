import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-votante',
  templateUrl: './votante.page.html',
  styleUrls: ['./votante.page.scss'],
})
export class VotantePage implements OnInit {
  dataUser:null;
  select:any;
  cant: number = null;
  num=1;
  user: number = null;
  list=[];
  dis=false;
  error=false;
  cand: number = null;
  candidatos={
    nombre: '',
    apellido:'',
    partidoPol:'',
    propuesta:'',
    avatar:''

  }
  URL:String="http://localhost:1337/"

  constructor(
    private activateRoute: ActivatedRoute,
    private service:DataServiceService,
    private formBuilder:FormBuilder,
    private router:Router
  ) { }
  
  registerForm=this.formBuilder.group({
    catVotos:[null,],
  })
  votoForm=this.formBuilder.group({
    yavoto:[false,],
  })
  ngOnInit() {
    this.loadCandidatos();
    this.user=this.router.getCurrentNavigation().extras.state.votante;
    console.log(this.user)
    this.yavoto(this.user);
  }
  yavoto(user){
    this.service.getVotante(user)
    .subscribe(item =>{
      this.dataUser=item.yavoto
      console.log(item.yavoto)
    })
    if(this.dataUser===true){
      this.dis=true;
    }
  }
  loadCandidatos(){
    this.service.getCandidatos()
    .subscribe(item=>{
      this.list=item
      console.log(item)
      this.error=false;
    },()=>{
      this.error=true;
      this.list=[];
    }) 
  }
  selectCandidato(candidato){
    this.select=candidato;
    this.dis=true;
    this.service.getCandidato(candidato)
    .subscribe(r=>{
      this.cand=r.catVotos;
      console.log(this.cand)
      this.sumcand(this.cand)
    });
    

    this.votoForm.get('yavoto').setValue(true)
    let voto=this.votoForm.value;
    console.log(voto)
    this.service.updateVotanteVoto(this.user, voto)
    .subscribe(r=>{
      console.log(r)
    });

  }
  sumcand(valor){
    console.log(valor+1)
    this.registerForm.get('catVotos').setValue(valor+1)
    let cant=this.registerForm.value;
    this.service.updateCantVoto(this.select, cant)
    .subscribe(r=>{
      console.log(r)
    });
  }

}
