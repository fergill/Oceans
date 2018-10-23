import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  images = ['erin-simmons-382348-unsplash.jpg', 'francisco-jesus-navarro-hernandez-534560-unsplash.jpg', 'jakob-owens-144048-unsplash.jpg', 'jakob-owens-303066-unsplash.jpg', 'jean-wimmerlin-564179-unsplash.jpg', 'jeremy-bishop-699681-unsplash.jpg', 'kal-loftus-589746-unsplash.jpg'];

  settings: any = {
    theme: 'ios'
}

  vid = "https://www.youtube.com/embed/lRrkaLTVHrs";
  constructor(public navCtrl: NavController, private dom:DomSanitizer) {

  }
sanitize(vid){
  return this.dom.bypassSecurityTrustResourceUrl(vid);
}
}
