import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  vid = "https://www.youtube.com/embed/lRrkaLTVHrs";
  constructor(public navCtrl: NavController, private dom:DomSanitizer) {

  }
sanitize(vid){
  return this.dom.bypassSecurityTrustResourceUrl(vid);
}
}
