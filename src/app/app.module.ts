import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { ModuleComponent } from './module/module.component';
import { StudentComponent } from './student/student.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { SemesterResultComponent } from './semester-result/semester-result.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentService } from './services/student.service';
import { CourseService } from './services/course.service';
import { EnrollmentService } from './services/enrollment.service';
import { ModuleService } from './services/module.service';
import { SemesterResultService } from './services/semester-result.service';
@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    ModuleComponent,
    StudentComponent,
    EnrollmentComponent,
    SemesterResultComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers: [
    StudentService,
    EnrollmentService,
    ModuleService,
    CourseService,
    SemesterResultService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
