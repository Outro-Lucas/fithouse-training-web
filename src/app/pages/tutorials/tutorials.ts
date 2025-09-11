import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface Exercise {
  id: string;
  name: string;
  category: string;
  duration: string;
  muscle?: string;
  description: string;
  videoUrl?: string;
}
@Component({
  selector: 'app-tutorials',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './tutorials.html',
  styleUrl: './tutorials.css'
})
export class Tutorials implements OnInit {
  public searchTerm = '';
  public categories: string[] = [];
  public exercises: Exercise[] = [];
  public filteredExercises: Exercise[] = [];
  public selectedCategory = 'Todos';
  public selectedExercise!: Exercise;


  ngOnInit(): void {
    // categorias (poderiam vir de API)
    this.categories = ['Todos', 'Superiores', 'Inferiores', 'Cardio', 'Abdômen'];

    // lista de exercícios (exemplos — substitua por dados reais)
    this.exercises = [
      {
        id: 'e1',
        name: 'Supino Reto',
        category: 'Superiores',
        duration: '10min',
        muscle: 'Peito',
        description:
          'O supino reto é um exercício compound para desenvolver a força e hipertrofia dos músculos do peitoral, além de trabalhar tríceps e deltóides.',
        videoUrl: ''
      },
      {
        id: 'e2',
        name: 'Agachamento Livre',
        category: 'Inferiores',
        duration: '15min',
        muscle: 'Pernas',
        description: 'Agachamento livre para força e resistência de pernas.',
        videoUrl: ''
      },
      {
        id: 'e3',
        name: 'Rosca Direta',
        category: 'Superiores',
        duration: '8min',
        muscle: 'Braços',
        description: 'Rosca direta para desenvolvimento do bíceps.',
        videoUrl: ''
      },
      {
        id: 'e4',
        name: 'Prancha Abdominal',
        category: 'Abdômen',
        duration: '5min',
        muscle: 'Abdômen',
        description: 'Prancha para estabilidade do core e resistência isométrica.',
        videoUrl: ''
      },
      {
        id: 'e5',
        name: 'Corrida Estacionária',
        category: 'Cardio',
        duration: '20min',
        muscle: 'Cardio',
        description: 'Exercício cardiovascular de baixa complexidade.',
        videoUrl: ''
      }
    ];

    // seleção inicial
    this.filteredExercises = [...this.exercises];
    this.selectedExercise = this.exercises[0];
  }

  onSelectCategory(cat: string) {
    this.selectedCategory = cat;
    this.applyFilter();
  }

  onSearchChange() {
    // chamado via ngModel change (binding)
    this.applyFilter();
  }

  applyFilter() {
    const term = this.searchTerm.trim().toLowerCase();
    this.filteredExercises = this.exercises.filter(ex => {
      const matchesCategory = this.selectedCategory === 'Todos' || ex.category === this.selectedCategory;
      const matchesSearch =
        !term ||
        ex.name.toLowerCase().includes(term) ||
        (ex.muscle && ex.muscle.toLowerCase().includes(term)) ||
        (ex.category && ex.category.toLowerCase().includes(term));
      return matchesCategory && matchesSearch;
    });

    // se o exercício selecionado for filtrado para fora, selecione o primeiro disponível
    if (!this.filteredExercises.find(e => e.id === this.selectedExercise?.id)) {
      this.selectedExercise = this.filteredExercises[0] ?? ({} as Exercise);
    }
  }

  selectExercise(ex: Exercise) {
    this.selectedExercise = ex;
  }

  isActiveExercise(ex: Exercise) {
    return this.selectedExercise && this.selectedExercise.id === ex.id;
  }
}
