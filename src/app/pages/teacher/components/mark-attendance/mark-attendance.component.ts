import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mark-attendance',
  templateUrl: './mark-attendance.component.html',
  styleUrls: ['./mark-attendance.component.css']
})
export class MarkAttendanceComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }
  
  onHandleBack(){
    console.log('go back pressed');
    this._router.navigate(['dashboard/teacher/class']);
  }
}
