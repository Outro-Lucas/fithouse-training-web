import { Component } from '@angular/core';
import { Navhome } from '../../components/navhome/navhome';
import { Hero } from '../../components/hero/hero';
import { CardCarousel } from '../../components/card-carousel/card-carousel';
import { Features } from "../../components/features/features";
import { FoorterHome } from "../../components/foorter-home/foorter-home";
import { AboutMe } from "../../components/about-me/about-me";
import { Feedback } from "../../components/feedback/feedback";

@Component({
  selector: 'app-landing-page',
  imports: [
    Navhome,
    Hero,
    CardCarousel,
    Features,
    FoorterHome,
    AboutMe,
    Feedback
],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css'
})
export class LandingPage {

}
