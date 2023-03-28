import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any = []
  partner:any=[]
  datasubmit:any

  constructor(private fb:FormBuilder,private api:ApiService) { }

  ngOnInit(): void {
    this.api.contact().subscribe
      ((result: any) => {
        this.data = result.banner
        console.log(this.data);
      })



      this.api.partner().subscribe
      ((result:any)=>{
        this.partner=result.partners
        // console.log(this.partner);
      })
  }


  contactForm=this.fb.group({
    first_name:['',[Validators.required,Validators.pattern('[a-z A-Z]*')]],
    last_name:['',[Validators.required,Validators.pattern('[a-z A-Z]*')]],
    phone:['',[Validators.required,Validators.pattern('[0-9]*')]],
    email:['',[Validators.required,Validators.email]],
    message:['',[Validators.required,Validators.pattern('[a-z A-Z 0-9]*')]]
    
    
  })


  submit(){
    var first_name=this.contactForm.value.first_name;
    var last_name=this.contactForm.value.last_name;
    var phone=this.contactForm.value.phone;
    var email=this.contactForm.value.email;
    var message=this.contactForm.value.message;
    this.api.contact_post(first_name, last_name, email, phone, message).subscribe
    ((result:any)=>{
      // this.datasubmit=result.partners
      console.log(result);
      this.contactForm.reset()
    })
  }


}
