import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormArray, AbstractControl} from '@angular/forms';
import { SemesterResultService } from '../services/semester-result.service';
import { ModuleService } from '../services/module.service';
import { StudentService } from '../services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-semester-result',
  templateUrl: './semester-result.component.html',
  styleUrls: ['./semester-result.component.css']
})
export class SemesterResultComponent {

  semesterResultForm!: FormGroup;
  modules: any[] = [];
  students: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private semesterResultService: SemesterResultService,
    private studentService: StudentService,
    private moduleService: ModuleService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.fetchModules();
    this.fetchStudentLastName();
  }

  createForm(): void {
    this.semesterResultForm = this.formBuilder.group({
      semesterResults: this.formBuilder.array([]) 
    });
  }

  initSemesterResult(): FormGroup {
    return this.formBuilder.group({
      semester_number: ['', Validators.required],
      last_name: ['', Validators.required],
      modules: this.formBuilder.array([])
    });
  }

  initModule(): FormGroup {
    return this.formBuilder.group({
      module_name: ['', Validators.required],
      grade: ['', Validators.required]
    });
  }

  addSemesterResult(): void {
    const control = this.semesterResultForm.get('semesterResults') as FormArray;
    control.push(this.initSemesterResult());
  }

  addModule(semesterResultIndex: number): void {
    const control = (this.semesterResultForm.get('semesterResults') as FormArray)
      .at(semesterResultIndex)
      .get('modules') as FormArray;
    control.push(this.initModule());
  }

  getSemesterResultsControls(): AbstractControl[] {
    return (this.semesterResultForm.get('semesterResults') as FormArray)?.controls || [];
  }




  getModulesControls(semesterResultIndex: number): AbstractControl[] {
    const semesterResultsControls = this.getSemesterResultsControls();
    const semesterResult = semesterResultsControls[semesterResultIndex];
    return (semesterResult.get('modules') as FormArray)?.controls || [];
  }





  fetchModules(): void {
    this.moduleService.getModule().subscribe(
      (modules) => {
        this.modules = modules; // Assign fetched modules to array
        },
      (error) => {
        console.error('Error fetching modules:', error);
      }
    );
  }

  fetchStudentLastName(): void {
    this.studentService.getStudent().subscribe(
      (students) => {
        this.students = students;
      },
      (error) => {
        console.error('Error fetching students:', error);
      }
    );
  }

onSubmit(): void {
  if (this.semesterResultForm.valid) {
    const formData = new FormData();
    
    const semesterResultsArray = this.semesterResultForm.get('semesterResults') as FormArray;
    
    semesterResultsArray.controls.forEach((control: AbstractControl) => {
      const semesterResultValue = control.getRawValue(); // Get the raw value of the form group
      
      // Append semester number and student ID
      formData.append('semester_number', semesterResultValue.semester_number);
      formData.append('student', semesterResultValue.last_name); // Assuming 'last_name' is the property for student ID
      
      // Iterate over modules
      const modulesArray = semesterResultValue.modules as any[];
      modulesArray.forEach((module: any) => {
        // Append module and grade for each module
        formData.append('module', module.module_name); // Assuming 'module_name' is the property for module name
        formData.append('grade', module.grade); // Assuming 'grade' is the property for grade
      });
    });

    // Log form data before sending the request
    console.log('Form Data:', formData);

    this.semesterResultService.submitSemesterResult(formData).subscribe(
      (response) => {
        this.openConfirmationDialog();
      },
      (error) => {
        console.error('Error submitting enrollment:', error);
      }
    );
  }
  this.router.navigate(['/home']);
}





  openConfirmationDialog() {
    // Implement confirmation dialog if needed
  }

}

