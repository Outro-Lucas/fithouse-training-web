import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Review {
  id: number;
  avatarUrl: string;
  userName: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-feedback',
  imports: [CommonModule],
  templateUrl: './feedback.html',
  styleUrl: './feedback.css'
})
export class Feedback {
  reviews: Review[] = [
    {
      id: 1,
      avatarUrl: 'https://img.daisyui.com/images/profile/demo/yellingcat@192.webp',
      userName: 'João Silva',
      title: 'Excelente treinador!',
      description: 'O Lucca é um profissional incrível. Sua metodologia de treino em casa é prática e eficiente. Em poucas semanas já senti uma grande evolução na minha resistência e força.'
    },
    {
      id: 2,
      avatarUrl: 'https://img.daisyui.com/images/profile/demo/batperson@192.webp',
      userName: 'Maria Santos',
      title: 'Resultados surpreendentes',
      description: 'Nunca imaginei que conseguiria ter resultados tão bons treinando em casa. Os exercícios são bem explicados e a rotina é fácil de seguir.'
    },
    {
      id: 3,
      avatarUrl: 'https://img.daisyui.com/images/profile/demo/spiderperson@192.webp',
      userName: 'Pedro Costa',
      title: 'Recomendo para todos',
      description: 'Como pessoa ocupada, não tenho tempo para ir à academia. Com os treinos do Lucca, consigo me exercitar em qualquer lugar e a qualquer hora. Perfeito!'
    },
    {
      id: 4,
      avatarUrl: 'https://img.daisyui.com/images/profile/demo/averagebulk@192.webp',
      userName: 'Ana Oliveira',
      title: 'Metodologia inovadora',
      description: 'Adorei a forma como os treinos são organizados. São curtos, porém muito intensos e eficazes. Estou amando os resultados!'
    }
  ];

  currentIndex = 0;

  next() {
    if (this.currentIndex < this.reviews.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.reviews.length - 1;
    }
  }

  trackByReviewId(index: number, review: Review): number {
    return review.id;
  }

  getVisibleSlides(): number[] {
    const slides = [];
    for (let i = 0; i < this.reviews.length; i++) {
      slides.push(i);
    }
    return slides;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

}
