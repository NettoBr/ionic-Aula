import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public nomeUser:string = "Domingos O. Netto";
  public no:number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaDois(num1:number, num2:number): void{
    this.no = (num1+num2);
    
  }

  ionViewDidLoad() {
    this.somaDois(20,80);
  }

}
