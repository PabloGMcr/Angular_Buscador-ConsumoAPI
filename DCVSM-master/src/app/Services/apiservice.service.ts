import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
private url:string = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http:HttpClient) { }
}
