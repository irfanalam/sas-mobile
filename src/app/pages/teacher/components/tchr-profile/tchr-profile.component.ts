import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tchr-profile',
  templateUrl: './tchr-profile.component.html',
  styleUrls: ['./tchr-profile.component.css']
})
export class TchrProfileComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  onHandleBack(){
    console.log('go back pressed');
    this._router.navigate(['dashboard']);
  }
}
