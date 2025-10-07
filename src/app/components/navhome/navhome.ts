import { Component } from '@angular/core';

@Component({
  selector: 'app-navhome',
  templateUrl: './navhome.html',
  styleUrl: './navhome.css'
})
export class Navhome {

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      // Calcula a posição considerando a navbar fixa
      const navbarHeight = 80; // Aproximadamente a altura da sua navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}