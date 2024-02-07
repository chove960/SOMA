import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModuleService } from '../services/module.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent {

   ModuleForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private moduleService: ModuleService,
    private dialog: MatDialog,
    private router:Router
  ) {
    this.createForm();
  }

  createForm(): void {
    this.ModuleForm = this.formBuilder.group({
      module_code: ['', Validators.required],
      module_name: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.ModuleForm.valid) {
      const formData = new FormData();
      Object.keys(this.ModuleForm.value).forEach(key => {
        formData.append(key, this.ModuleForm.get(key)!.value);
      });

      this.moduleService.submitModule(formData).subscribe(
        (response) => {
          this.openConfirmationDialog();
        },
        (error) => {
          console.error('Error submitting found item:', error);
        }
      );
    }
    this.router.navigate(['/semester-result']);
  }
  openConfirmationDialog() {
    throw new Error('Method not implemented.');
  }

}
