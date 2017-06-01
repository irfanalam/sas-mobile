import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

   onHandleBack(){
    console.log('go back pressed');
    this._router.navigate(['dashboard/teacher']);
  }
}
