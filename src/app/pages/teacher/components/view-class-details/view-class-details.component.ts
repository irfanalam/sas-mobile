import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-class-details',
  templateUrl: './view-class-details.component.html',
  styleUrls: ['./view-class-details.component.css']
})
export class ViewClassDetailsComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  onHandleBack(){
    console.log('go back pressed');
    this._router.navigate(['dashboard']);
  }
}
