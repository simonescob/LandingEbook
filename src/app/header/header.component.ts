import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  title = 'LandingEbook';
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: "",  
      email: "",
    })
  }

  sendEmail(e: Event){
    e.preventDefault();
    console.log(this.myForm.value)
  }


}
