import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  contact() {
    return this.http.get('https://api-staging.farstay.in/api/banner/getByName?name=Contact')
  }

  partner() {
    return this.http.get('https://api-staging.farstay.in/api/partner/')
  }


  contact_post(first_name: any, last_name: any, email: any, phone: any, message: any) {
    const data = {
      first_name, last_name, email, phone, message
    }
    return this.http.post('https://api-staging.farstay.in/api/contact/', data)
  }
}
