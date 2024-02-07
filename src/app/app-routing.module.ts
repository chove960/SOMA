import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { CourseComponent } from './course/course.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { ModuleComponent } from './module/module.component';
import { SemesterResultComponent } from './semester-result/semester-result.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to Home by default
  { path: 'home', component: HomeComponent },
  { path: 'student', component: StudentComponent },
  { path: 'course', component: CourseComponent },
  { path: 'enrollment', component: EnrollmentComponent },
  { path: 'module', component: ModuleComponent },
  { path: 'semester-result', component: SemesterResultComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

