import { HttpClient, HttpParams  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlHandlingStrategy } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
// import * as data from './sample.json';

interface London {  
  loaction: any;  
    
}  


@Injectable({providedIn: 'root'})

export class MyServiceService {
  private url = 'http://api.weatherapi.com/v1/current.json?key=940b3f0367f14be885e125754222202 &q=London&aqi=no';  
  weather: any =[];
  private data:any = [];
  json: any = [
    {
    "id": 1,
    "name": "Elegance Hair Gel",
    "description": "Strong hold hair gel.",
    "price": 9.99,
    "stock": 10567
    },
    {
    "id": 2,
    "name": "Elegance Hair Serum",
    "description": "Hair serum with vitamins.",
    "price": 14.99,
    "stock": 9956
    },
    {
    "id": 3,
    "name": "Elegance Hair Shampoo",
    "description": "Hair Shampoo with Aloe Vera.",
    "price": 7.99,
    "stock": 5689
    }
   ];
  httpHeaders: HttpHeaders = new HttpHeaders({
    Authorization: 'Bearer JWT-token'
});
  


  
  constructor(private http: HttpClient) 
  { }

  jsonData(){
     
    return this.json
  }
  Weather(){
    const url ='http://api.weatherapi.com/v1/current.json?key=940b3f0367f14be885e125754222202 &q=London&aqi=no'
    this.http.get(url).subscribe((res)=>{
   
    console.log('service is : ', res)
    return
    // 
    })
    
    }

    // this.weather = JSON.stringify(res)
    // this.weather = this.http.get(this.url,  { headers: this.httpHeaders });
    // return this.weather
  
  // configUrl = 'assets/config.json';

  // getConfig() {
  //   return this.http.get( this.configUrl);
  // }
  
  MyMethod() {
    return[
      {
        name: "a"
      },
      {
        name:"b"
      }
    ]
  }
}



