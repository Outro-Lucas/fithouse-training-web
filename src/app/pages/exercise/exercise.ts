import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Sidebar } from '../../components/sidebar/sidebar';
import { CategoryService } from '../../services/category.service';
import { ExerciseService } from '../../services/exercise.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ExerciseCreate, ExerciseResponse } from '../../interfaces/exercise/exercise.type';
import { CategoryResponse } from '../../interfaces/category/category.type';

@Component({
  selector: 'app-exercise',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Sidebar,
  ],
  templateUrl: './exercise.html',
  styleUrl: './exercise.css'
})
export class Exercise implements OnInit {

  public newExerciseForm = new FormGroup({
    name: new FormControl('', { validators: [Validators.required] }),
    description: new FormControl('', { validators: [Validators.required] }),
    videoUrl: new FormControl('', { validators: [Validators.required] }),
    category: new FormControl('', { validators: [Validators.required] })
  });

  public putExerciseForm = new FormGroup({
    name: new FormControl('', { validators: [Validators.required] }),
    description: new FormControl('', { validators: [Validators.required] }),
    videoUrl: new FormControl('', { validators: [Validators.required] }),
    category: new FormControl('', { validators: [Validators.required] })
  });

  public categories: CategoryResponse[] = [];
  public exercises: ExerciseResponse[] = [];
  public selectedExercise: ExerciseResponse | null = null;

  @ViewChild('createDialog') createDialog!: ElementRef<HTMLDialogElement>;
  @ViewChild('updateDialog') updateDialog!: ElementRef<HTMLDialogElement>;
  @ViewChild('deleteDialog') deleteDialog!: ElementRef<HTMLDialogElement>;

  constructor(
    private readonly categoryService: CategoryService,
    private readonly exerciseService: ExerciseService,
  ) { }

  ngOnInit(): void {
    this.getAllCategories();
    this.getAllExercises();
  }

  getAllCategories(): void {
    this.categoryService.getAllCategories().subscribe({
      next: (result: any) => {
        this.categories = result;
      },
      error: (error) => {
        console.error(error);
        return;
      }
    });
  }

  getAllExercises() {
    this.exerciseService.getAll().subscribe({
      next: (result: any) => {
        this.exercises = result;
      },
      error: (error) => {
        console.error(error);
        return;
      }
    });
  }

  openAnyDialog(modal: string, exercise: ExerciseResponse | null) {
    switch (modal) {
      case 'create':
        this.createDialog?.nativeElement?.showModal();
        break;
      case 'update':
        if (exercise) {
          this.selectedExercise = exercise;
          this.putExerciseForm.patchValue({
            name: exercise.name,
            description: exercise.description,
            videoUrl: exercise.videoUrl,
            category: exercise.category._id
          });
          this.updateDialog?.nativeElement?.showModal();
        }
        break;
      case 'delete':
        this.selectedExercise = exercise;
        this.deleteDialog?.nativeElement?.showModal();
        break;
    }
  }

  closeAnyDialog(modal: string) {
    switch (modal) {
      case 'create':
        this.createDialog.nativeElement.close();
        this.resetNewExerciseForm();
        break;
      case 'update':
        this.updateDialog.nativeElement.close();
        this.selectedExercise = null;
        this.resetPutExerciseForm();
        break;
      case 'delete':
        this.selectedExercise = null;
        this.deleteDialog.nativeElement.close();
        break;
      default:
        console.warn(`Modal desconhecido: ${modal}`);
        break;
    }
  }

  resetNewExerciseForm() {
    this.newExerciseForm.reset({
      name: '',
      description: '',
      videoUrl: '',
      category: ''
    });
  }

  resetPutExerciseForm() {
    this.putExerciseForm.reset({
      name: '',
      description: '',
      videoUrl: '',
      category: ''
    });
  }

  createExercise() {
    const body: ExerciseCreate = {
      name: this.newExerciseForm.value.name || '',
      description: this.newExerciseForm.value.description || '',
      videoUrl: this.newExerciseForm.value.videoUrl || '',
      category: this.newExerciseForm.value.category || ''
    }

    this.exerciseService.create(body).subscribe({
      next: (result: any) => {
        this.exercises.push(result);
        this.exercises.sort((a, b) => a.name.localeCompare(b.name));
        this.closeAnyDialog("create");
      },
      error: (error) => {
        console.error(error);
        return;
      }
    });
  }

  editExercise() {
    if (!this.selectedExercise) {
      console.error('No exercise selected for update.');
      return;
    }

    const body: ExerciseCreate = {
      name: this.putExerciseForm.value.name || '',
      description: this.putExerciseForm.value.description || '',
      videoUrl: this.putExerciseForm.value.videoUrl || '',
      category: this.putExerciseForm.value.category || ''
    };

    this.exerciseService.update(body, this.selectedExercise._id).subscribe({
      next: (result: ExerciseResponse) => {
        // Encontra o exercício no array
        const index = this.exercises.findIndex(e => e._id === this.selectedExercise!._id);
        if (index !== -1) {
          this.exercises.splice(index, 1);
        }
        this.exercises.sort((a, b) => a.name.localeCompare(b.name));
        this.closeAnyDialog("update");
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  deleteExercise() {
    if (!this.selectedExercise) {
      console.error('No exercise selected.');
      return;
    }

    this.exerciseService.delete(this.selectedExercise._id).subscribe({
      next: () => {
        this.exercises = this.exercises.filter(e => e._id !== this.selectedExercise!._id);
        this.closeAnyDialog("delete");
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

}
