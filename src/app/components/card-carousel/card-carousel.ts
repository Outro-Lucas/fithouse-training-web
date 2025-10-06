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
  visibleCards = 1;
  maxVisibleCards = 3; // Máximo de cards visíveis

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    this.updateVisibleCards();
  }

  @HostListener('window:resize')
  onResize() {
    if (isPlatformBrowser(this.platformId)) {
      this.updateVisibleCards();
    }
  }

  updateVisibleCards() {
    if (isPlatformBrowser(this.platformId)) {
      const width = window.innerWidth;
      if (width < 768) {
        this.visibleCards = 1;
      } else if (width < 1024) {
        this.visibleCards = 2;
      } else {
        this.visibleCards = this.maxVisibleCards; // Máximo de 3 cards
      }

      // Ajusta o currentIndex para não ultrapassar o limite
      this.adjustCurrentIndex();
    } else {
      this.visibleCards = 1;
    }
  }

  // Ajusta o currentIndex para não mostrar cards cortados
  adjustCurrentIndex() {
    const maxIndex = Math.max(0, this.cards.length - this.visibleCards);
    if (this.currentIndex > maxIndex) {
      this.currentIndex = maxIndex;
    }
  }

  next() {
    const maxIndex = Math.max(0, this.cards.length - this.visibleCards);
    if (this.currentIndex < maxIndex) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Volta para o início (ciclo infinito)
    }
  }

  prev() {
    const maxIndex = Math.max(0, this.cards.length - this.visibleCards);
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = maxIndex; // Vai para o final (ciclo infinito)
    }
  }

  getTransform(): string {
    const cardWidth = 316; // 300px (card) + 16px (padding)
    return `translateX(-${this.currentIndex * cardWidth}px)`;
  }

  trackByCardId(index: number, card: Card): number {
    return card.id;
  }

  getVisibleSlides(): number[] {
    const slides = [];
    const totalSlides = Math.max(1, this.cards.length - this.visibleCards + 1);
    for (let i = 0; i < totalSlides; i++) {
      slides.push(i);
    }
    return slides;
  }

  goToSlide(index: number) {
    const maxIndex = Math.max(0, this.cards.length - this.visibleCards);
    this.currentIndex = Math.min(index, maxIndex);
  }
}
