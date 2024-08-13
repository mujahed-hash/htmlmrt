import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PEcategoriesComponent } from '../pecategories/pecategories.component';

@Component({
  selector: 'app-getcategories',
  templateUrl: './getcategories.component.html',
  styleUrls: ['./getcategories.component.scss']
})
export class GetcategoriesComponent implements OnInit {
  token:any;
  categories:any;
  isEditing: boolean = false;
  constructor(
    private userService: AdminService,
    private fb: FormBuilder,
    public dialog: MatDialog
) {

  }

  ngOnInit(){
    this.token = localStorage.getItem('token')
    this.getCategories();
  }
  getCategories(){
    this.userService.getCategories(this.token).subscribe((data:any)=>{
      this.categories = data;
      console.log(data)
    })
  }
  openDialog(category?: any): void {
    const dialogRef = this.dialog.open(PEcategoriesComponent, {
      width: '400px',
      data: category ? { itemType: category.itemType, itemName: category.itemName, id: category._id } : {},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getCategories();
      }
    });
    
  }


  deleteCategory(id: string): void {
    if (confirm('Are you sure you want to delete this category?')) {
      this.userService.deleteCategory({ id }).subscribe(
        response => {
          alert('Category deleted successfully');
          this.getCategories(); // Reload the categories after deletion
        },
        error => {
          console.error('There was an error!', error);
        }
      );
    }
  }
}
