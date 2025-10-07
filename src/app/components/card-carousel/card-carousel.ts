import { CommonModule } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface Card {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-card-carousel',
  imports: [CommonModule],
  templateUrl: './card-carousel.html',
  styleUrl: './card-carousel.css',
})
export class CardCarousel {
  cards: Card[] = [
    {
      id: 1,
      imageUrl: 'flexao.jpg',
      title: 'Treino de Superiores',
      description:
        'Fortaleça peito, ombros e braços com exercícios clássicos da calistenia como flexões, dips e pranchas.',
    },
    {
      id: 2,
      imageUrl: 'agachamento.jpg',
      title: 'Treino de Inferiores',
      description: 'Trabalhe pernas e glúteos com agachamentos, avanços e pistol squats.',
    },
    {
      id: 3,
      imageUrl: 'prancha.jpg',
      title: 'Treino de Abdômen',
      description:
        'Fortaleça o abdômen e estabilize o corpo com pranchas, leg raises e exercícios isométricos de calistenia.',
    },
    {
      id: 4,
      imageUrl: 'upper.jpg',
      title: 'Treino de Corpo Inteiro',
      description: 'Combine movimentos compostos para trabalhar o corpo todo em uma única sessão.',
    },
    {
      id: 5,
      imageUrl: 'alongamento.jpg',
      title: 'Mobilidade e Alongamento',
      description:
        'Melhore mobilidade e flexibilidade com alongamentos dinâmicos e controle corporal da calistenia.',
    },
    {
      id: 6,
      imageUrl: 'corrida.jpg',
      title: 'Treino de Resistência',
      description:
        'Aumente resistência e condicionamento com circuitos intensos para queimar gordura.',
    },
  ];

  currentIndex = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  @HostListener('window:resize')
  onResize() {
    // Ajusta o currentIndex quando a tela é redimensionada
    this.adjustCurrentIndex();
  }

  getVisibleCards(): number {
    if (!isPlatformBrowser(this.platformId)) return 1;

    const width = window.innerWidth;
    if (width < 768) {
      return 1;
    } else if (width < 1024) {
      return 2;
    } else {
      return 3;
    }
  }

  getTotalSlides(): number {
    const visibleCards = this.getVisibleCards();
    return Math.ceil(this.cards.length / visibleCards);
  }

  adjustCurrentIndex() {
    const maxIndex = this.getTotalSlides() - 1;
    if (this.currentIndex > maxIndex) {
      this.currentIndex = maxIndex;
    }
  }

  next() {
    const maxIndex = this.getTotalSlides() - 1;
    if (this.currentIndex < maxIndex) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  prev() {
    const maxIndex = this.getTotalSlides() - 1;
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = maxIndex;
    }
  }

  trackByCardId(index: number, card: Card): number {
    return card.id;
  }

  getVisibleSlides(): number[] {
    const slides = [];
    const totalSlides = this.getTotalSlides();
    for (let i = 0; i < totalSlides; i++) {
      slides.push(i);
    }
    return slides;
  }

  goToSlide(index: number) {
    const maxIndex = this.getTotalSlides() - 1;
    this.currentIndex = Math.min(index, maxIndex);
  }

  goToHortmart() {
    if (isPlatformBrowser(this.platformId)) {
      window.open('https://hotmart.com/pt-br', '_blank');
    }
  }
}
