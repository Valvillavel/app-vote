import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  type:String;
  formularioLogin:FormGroup;
  list:any;
  listAdmin:any;
  var:any;
  error=false;

  constructor(
    public fb:FormBuilder,
    public alertController: AlertController,
    public service:DataServiceService,
    public router:Router
  ) { 
    this.formularioLogin = this.fb.group({
      'email': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    })
  }

  ngOnInit() {
    this.obtenerdata();
    this.obtenerAdmins();
  }
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
    console.log(ev.detail.value)
    this.type=ev.detail.value;
    console.log(this.type)
  }
  obtenerAdmins(){
    this.service.getAdmins()
    .subscribe(admin=>{
      this.listAdmin=admin;
      this.error=false;
    },()=>{
      this.error=true;
      this.listAdmin=[];
    }) 
  }
  obtenerdata(){
    this.service.getVotantes()
    .subscribe(candidatos=>{
      this.list=candidatos;
      this.error=false;
    },()=>{
      this.error=true;
      this.list=[];
    }) 
  }

  async ingresar(){
    let navigationExtras:NavigationExtras;
    var f = this.formularioLogin.value;
    this.list.map(async user => {
     if(user.email == f.email && user.password == f.password){
        console.log('Ingresado')
        navigationExtras={
          state:{
            votante:user.id
          }
        }
        this.router.navigateByUrl("/votante",navigationExtras);
      }
    })

  }
  async ingresarAdmin(){
    var f = this.formularioLogin.value;
    this.listAdmin.map(async user => {
      console.log(user.password)
     if(user.email == f.email && user.pass == f.password){
      console.log(user.email)
      console.log(user.password)
        console.log('Ingresado');
        this.router.navigateByUrl("/admin")
      }else{
        const alert = await this.alertController.create({
          header: 'Datos incorrectos',
          message: 'Los datos que ingresaste son incorrectos.',
          buttons: ['Aceptar']
        });
    
        await alert.present();
      }
    })

  }

}
