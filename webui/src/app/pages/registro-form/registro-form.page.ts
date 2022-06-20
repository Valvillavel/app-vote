import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroupDirective, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-registro-form',
  templateUrl: './registro-form.page.html',
  styleUrls: ['./registro-form.page.scss'],
})
export class RegistroFormPage implements OnInit {
  user:any;
  listData:any[]=[];
  edit:boolean=false;
  itemData:any;

  constructor(
    private activateRoute: ActivatedRoute,
    private formBuilder:FormBuilder,
    private router:Router,
    private service:DataServiceService,
  ) { }
  registerForm=this.formBuilder.group({
    nombre:["",Validators.required],
    apellidos:["",],
    ci:["",],
    fechaNac:["",],
    email:["",],
    direccion:[""],
    domicilio:["",],
    voto:["",],
    password:["",],
    propuesta:["",],
    partidoPolitico:["",],
  })

  ngOnInit() {
    this.user=this.activateRoute.snapshot.params.user;
      if(this.router.getCurrentNavigation().extras.state){
      this.itemData=this.router.getCurrentNavigation().extras.state.user;
      this.edit=true;
      this.updateData()
    }  
  }
  saveRegister(user,formDirective:FormGroupDirective){
    console.log(user)
    if(this.user==='votante'){
    this.service.postVotante(user)
      .subscribe(r=>{
        formDirective.resetForm();
        this.router.navigate(['/admin',this.user])
      })
    }
    if(this.user==='candidato'){
      this.service.postCandidato(user)
        .subscribe(r=>{
          formDirective.resetForm();
          this.router.navigate(['/admin',this.user])
        })
      }
    
  }
  updateData(){
    this.registerForm.get('nombre').setValue(this.itemData?.nombre)
    this.registerForm.get('apellidos').setValue(this.itemData?.apellidos)
    this.registerForm.get('fechaNac').setValue(this.itemData?.fechaNac)
    this.registerForm.get('direccion').setValue(this.itemData?.direccion)
    this.registerForm.get('ci').setValue(this.itemData?.ci)
    this.registerForm.get('voto').setValue(this.itemData?.voto)
    this.registerForm.get('password').setValue(this.itemData?.password)
    this.registerForm.get('email').setValue(this.itemData?.email)
    this.registerForm.get('propuesta').setValue(this.itemData?.propuesta)
    this.registerForm.get('partidoPolitico').setValue(this.itemData?.partidoPolitico)
  }
  editEntity(entity,formDirective:FormGroupDirective){
    if(this.user==='candidato'){
    this.service.updateCandidato(this.itemData.id,entity)
      .subscribe(r=>{
        formDirective.resetForm();
        this.router.navigate(['/admin',this.user])
      })
    }
    if(this.user==='votante'){
      this.service.updateVotante(this.itemData.id,entity)
        .subscribe(r=>{
          formDirective.resetForm();
          this.router.navigate(['/admin',this.user])
        })
      }
    
  }


}
