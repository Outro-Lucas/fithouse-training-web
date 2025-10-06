import { CommonModule } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface Card {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  buttonText: string;
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
      imageUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
      title: 'Treino Iniciante',
      description:
        'Perfeito para quem está começando. Exercícios básicos e de fácil execução para criar o hábito de treinar.',
      buttonText: 'Começar Agora',
    },
    {
      id: 2,
      imageUrl: 'https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp',
      title: 'Treino Intermediário',
      description:
        'Para quem já tem experiência e quer evoluir. Exercícios moderados com maior intensidade.',
      buttonText: 'Quero Evoluir',
    },
    {
      id: 3,
      imageUrl: 'https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp',
      title: 'Treino Avançado',
      description:
        'Desafios intensos para resultados máximos. Para alunos que buscam performance elevada.',
      buttonText: 'Desafiar-me',
    },
    {
      id: 4,
      imageUrl: 'https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp',
      title: 'Treino Express',
      description:
        'Treinos curtos de alta intensidade para resultados rápidos, perfeito para dias corridos.',
      buttonText: 'Treinar Rápido',
    },
    {
      id: 5,
      imageUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
      title: 'Yoga Fitness',
      description: 'Combina posturas de yoga com exercícios funcionais para flexibilidade e força.',
      buttonText: 'Experimentar',
    },
    {
      id: 6,
      imageUrl: 'https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp',
      title: 'Treino em Dupla',
      description: 'Exercícios especiais para fazer com parceiro(a), ideal para casais e amigos.',
      buttonText: 'Convidar',
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
}
