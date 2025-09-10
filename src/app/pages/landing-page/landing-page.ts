import { Component } from '@angular/core';
import { Navhome } from '../../components/navhome/navhome';

@Component({
  selector: 'app-landing-page',
  imports: [
    Navhome
  ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css'
})
export class LandingPage {

}
