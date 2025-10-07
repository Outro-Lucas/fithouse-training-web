import { Component } from '@angular/core';

@Component({
  selector: 'app-foorter-home',
  imports: [],
  templateUrl: './foorter-home.html',
  styleUrl: './foorter-home.css'
})
export class FoorterHome {

  redirectTo(platform: string) {
    switch (platform) {
      case 'whatsapp':
        const phoneNumber = '558592288023';
        const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os cursos e a consultoria.');
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
        break;
      case 'instagram':
        window.open('https://www.instagram.com/lucca_guerra/', '_blank');
        break;
      case 'facebook':
        window.open('https://www.facebook.com/lucca.guerrinha/?locale=pt_BR', '_blank');
        break;
      case 'youtube':
        window.open('https://www.youtube.com/', '_blank');
        break;
      default:
        console.warn('Plataforma desconhecida');
        break;
    }
  }

}
