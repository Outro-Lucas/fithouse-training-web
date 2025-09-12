import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Sidebar } from '../../components/sidebar/sidebar';

@Component({
  selector: 'app-exercise',
  imports: [
    CommonModule,
    Sidebar,
  ],
  templateUrl: './exercise.html',
  styleUrl: './exercise.css'
})
export class Exercise {

}
