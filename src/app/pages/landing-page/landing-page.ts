import { Component } from '@angular/core';
import { Navhome } from '../../components/navhome/navhome';
import { Hero } from '../../components/hero/hero';
import { CardCarousel } from '../../components/card-carousel/card-carousel';

@Component({
  selector: 'app-landing-page',
  imports: [
    Navhome,
    Hero,
    CardCarousel,
  ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css'
})
export class LandingPage {

}
