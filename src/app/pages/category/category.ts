import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Sidebar } from '../../components/sidebar/sidebar';

@Component({
  selector: 'app-category',
  imports: [
    CommonModule,
    Sidebar,
  ],
  templateUrl: './category.html',
  styleUrl: './category.css'
})
export class Category {

}
