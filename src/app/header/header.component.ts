import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import emailjs, { EmailJSResponseStatus, init } from 'emailjs-com';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  title = 'LandingEbook';
  myForm: FormGroup;
  SERVICE_EMAIL_ID = "service_akdmwn8";
  TEMPLATE_EMAIL_ID = "Send_email";
  USER_EMAIL_ID = 'user_EVcJ5zcUWEVqBVD57YumL';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    init("user_EVcJ5zcUWEVqBVD57YumL");
    this.myForm = this.fb.group({
      name: "",  
      email: "",
      subject: "Descarga de pdf",
    })
  }

  public sendEmail(e: Event){
    e.preventDefault();
    console.log(this.myForm.value)
    emailjs.send(
      this.SERVICE_EMAIL_ID, 
      this.TEMPLATE_EMAIL_ID, 
      this.myForm.value,
    )
    .then((result: EmailJSResponseStatus) => {
      console.log(result.text);
      this.router.navigate(["thanks"]);
    }, (error) => {
      console.log(error.text);
    });
  }


}
