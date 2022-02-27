import { Component, HostBinding, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { CalendarOptions, constrainPoint } from '@fullcalendar/angular'; // useful for typechecking
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { MyServiceService } from './my-service.service';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {HttpParams} from "@angular/common/http";
// import * as data from './sample.json';

interface Location {
  location: any;
  
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent {
  location:  any = this.http.Weather() ;
  title = 'test';
  todayNumber: number = Date.now();
  checked = true; 
  disabled = false;
  data: any =[];
  weather: any = [];
  // weather: any =[{'date', ${data}];
  config_data: any = [];
  json: any = [];
  
  
  // calendarOptions: CalendarOptions = {
  // initialView: 'dayGridMonth'
  // };



  constructor(private http: MyServiceService){
    // this.todayNumber
    // this.json = this.http.jsonData()
    // console.log(this.json)

    // this.data = this.http.MyMethod()
    console.log(this.data)
    // this.weather = this.http.Weather()
    
    this.weather = this.http.Weather()
    // console.log(this.location)
    console.log("datajson2 is : " ,this.weather)
 
  

    

    // return Object.keys(this.weather)
    // console.log(this.weather)
    // .subscribe()
    // (data =>{
    //       this.weather = data;
    //     });

// this.weather = data.weather;



    
    
    
    }


    // showConfig() {
    //   this.config_data = this.http.getConfig()
    // }

    // showConfig() {
    //   this.config_data = this.http.getConfig()
    //   console.log('Congig data is:', this.config_data)
    //   return this.config_data
        
    // }

    // showConfig() {
    //   this.config_data = this.http.getConfig()
    //   console.log(this.config_data)
    //   return this.config_data
    //     };
       
    
      }

      

   
  
// constructor(private http: MyServiceService){
  
//   // this.data = this.http.MyMethod()
//   this.http.Getweather().subscribe(data =>{
//     this.weather$ = data;
//   }, error =>{
//     console.log(error);
//   })}}