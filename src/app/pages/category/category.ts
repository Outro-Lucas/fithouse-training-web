import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Sidebar } from '../../components/sidebar/sidebar';
import { FormsModule } from '@angular/forms';
import { CategoryService } from '../../services/category.service';
import { CategoryType } from '../../interfaces/category/category.type';

@Component({
  selector: 'app-category',
  imports: [
    CommonModule,
    FormsModule,
    Sidebar,
  ],
  templateUrl: './category.html',
  styleUrl: './category.css'
})
export class Category implements OnInit {
  public newCatName: string = "";
  public categories: CategoryType[] = [];

  constructor(
    private categoryService: CategoryService,
  ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
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

  createCategory(): void {
    this.categoryService.createCategory(this.newCatName).subscribe({
      next: (result: any) => {
        this.categories.push(result);
        this.categories.sort((a, b) => a.name.localeCompare(b.name));
        this.newCatName = '';
      },
      error: (error) => {
        console.error(error);
        return;
      }
    });
  }

  deleteCategory(category: any): void {
    this.categoryService.deleteCategory(category._id).subscribe({
      next: () => {
        this.categories = this.categories.filter(cat => cat._id !== category._id);
      },
      error: (error) => {
        console.error(error);
        return;
      }
    });
  }


}
