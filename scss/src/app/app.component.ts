import { Component, HostBinding, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { CalendarOptions, constrainPoint } from '@fullcalendar/angular'; // useful for typechecking
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { MyServiceService } from './my-service.service';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {HttpParams} from "@angular/common/http";

interface Location {
  location: any;
  
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})


export class AppComponent {
  location:  any;
  title = 'test';
  todayNumber: number = Date.now();
  checked = true; 
  disabled = false;
  data: any;
  weather: any;
  config_data: any;
  json: any;
  constructor(private http: MyServiceService){
    this.http.getWeather().subscribe(w => this.weather = w);
    
    }    
}