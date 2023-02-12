import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableServiceService {
  
  baseUrl= "https://localhost:7094/"
  constructor(private httpClient: HttpClient) { }

  postData(data:any){
    console.log(data)
    return this.httpClient.post(this.baseUrl + "AddTableHolderInfo", data)
  }
}
