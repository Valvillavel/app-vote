import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/data-service.service';
import { alertController } from '@ionic/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  user:any;
  type:String;
  entitiesSelected:any;
  dataSelected:any;
  list:any;
  error=false;

  constructor(
    public rutaActiva: ActivatedRoute,
    public service:DataServiceService,
    private router:Router,
  ) { }

  ngOnInit() {
    this.user=this.rutaActiva.snapshot.params.user;
    this.loadData(this.user) 
  }
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
    console.log(ev.detail.value)
    this.type=ev.detail.value;
    console.log(this.type)
  }
  logout(){
    this.router.navigateByUrl("/login");
  }
  loadData(user){
    if(user==='candidato')
    this.service.getCandidatos().subscribe(item=>{
      this.list=item
      this.error=false;
    },()=>{
      this.error=true;
      this.list=[];
    }) 
    if(user==='votante')
    this.service.getVotantes().subscribe(item=>{
      this.list=item
      this.error=false;
    },()=>{
      this.error=true;
      this.list=[];
    })
  }
  ionViewWillEnter(){
    this.loadData(this.user) 
  }
  getEntitySelected(dataSelected){
    this.entitiesSelected=dataSelected
    console.log(this.entitiesSelected)  
  }
  getDataSelected(dataSelected){
    this.dataSelected=dataSelected
    console.log(this.dataSelected)  
  }
  deleteData(type){
    if(type==='candidato'){
    if(this.dataSelected==undefined || this.dataSelected.length==0){
      this.handleButtonClick()
    }
    this.dataSelected?.map(data=>{
      this.service.deleteCandidato(data.id).subscribe(res=>{
        this.dataSelected=[]
        this.ionViewWillEnter()
      })
    })
  }
  if(type==='votante'){
    if(this.dataSelected==undefined || this.dataSelected.length==0){
      this.handleButtonClick()
    }
    this.dataSelected?.map(data=>{
      this.service.deleteVotante(data.id).subscribe(res=>{
        this.dataSelected=[]
        this.ionViewWillEnter()
      })
    })
  }
    
  }
  async handleButtonClick() {
    const alert = await alertController.create({
      header: 'Select Item',
      message: 'Must select an item to delete',
      buttons: ['Agree'],
    });

    await alert.present();
  }
  openEditForm(){
    let navigationExtras:NavigationExtras={
      state:{
        entity:this.dataSelected[this.dataSelected.length -1],
      }
    }
    //this.router.navigate(['/edit',this.entity],navigationExtras)
   //this.router.navigate(['/add',"customers"])
   this.router.navigateByUrl("/admin/"+this.user+"/edit",navigationExtras)
  }

}
