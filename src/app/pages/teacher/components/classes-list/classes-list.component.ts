import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-classes-list',
  templateUrl: './classes-list.component.html',
  styleUrls: ['./classes-list.component.css']
})
export class ClassesListComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }
 
  onHandleClassList(){
    console.log('im being pressed to mark attendance of students');
    this._router.navigate(['dashboard/teacher/mark-attendance']);
  }

  onHandleBack(){
    this._router.navigate(['dashboard']);
  }
}
