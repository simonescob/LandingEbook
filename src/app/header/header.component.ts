import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  title = 'LandingEbook';

  dataForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {}

  onReset(){
    this.dataForm.reset();
  }

  sendData(){
    let formValue = this.dataForm.value;
    [formValue].map((e) => console.log(e.name +' '+ e.email))
    this.onReset();
  }

}
