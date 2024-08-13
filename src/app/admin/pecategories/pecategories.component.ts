import { Component, Inject } from '@angular/core';
import { AdminService } from '../admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pecategories',
  templateUrl: './pecategories.component.html',
  styleUrls: ['./pecategories.component.scss']
})
export class PEcategoriesComponent {
  token:any;
  categories:any;
  categoryForm: FormGroup;
  isEditing: boolean = false;
  constructor(
    private userService: AdminService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<PEcategoriesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { itemType?: string; itemName?: string; id?: string }
  ) {
    this.categoryForm = this.fb.group({
      itemType: [data.itemType || '', Validators.required],
      itemName: [data.itemName || ''],
    });
  }

  ngOnInit(){
    this.isEditing = !!this.data.id;
    this.token = localStorage.getItem('token')
    this.getCategories();
  }
  getCategories(){
    this.userService.getCategories(this.token).subscribe((data:any)=>{
      this.categories = data;
      console.log(data)
    })
  }

  onSubmit() {
    if (this.categoryForm.valid) {
      const { itemType, itemName } = this.categoryForm.value;
      if (this.isEditing) {
        // Edit category
        this.userService.updateCategory(this.data.id!, itemType, itemName).subscribe(
          (response) => {
            this.dialogRef.close(true);
          },
          (error) => {
            console.error(error);
          }
        );
      } else {
        // Add category
        this.userService.postCategory(itemType, itemName, this.token).subscribe(
          (response) => {
            this.dialogRef.close(true);
          },
          (error) => {
            console.error(error);
          }
        );
      }
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
