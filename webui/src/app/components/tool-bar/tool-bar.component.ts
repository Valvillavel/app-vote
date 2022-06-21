import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss'],
})
export class ToolBarComponent implements OnInit {

  constructor(
    public menu: MenuController
  ) { }

  ngOnInit() {}
  openMenu(){
    this.menu.toggle();
  }
}
