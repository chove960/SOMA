import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiUrl = 'http://127.0.0.1:8000/api/student/'; 

  constructor(private http: HttpClient) {}

  submitStudent(formData: any): Observable<any> {
    const endpoint = `${this.apiUrl}`; 
    return this.http.post(endpoint, formData);
  }


  getStudent(): Observable<any> {
    const endpoint = `${this.apiUrl}`;
    return this.http.get(endpoint);
  }

  
}
