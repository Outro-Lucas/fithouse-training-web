import { Component } from '@angular/core';
import { Navhome } from '../../components/navhome/navhome';
import { Hero } from '../../components/hero/hero';

@Component({
  selector: 'app-landing-page',
  imports: [
    Navhome,
    Hero
  ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css'
})
export class LandingPage {

}
