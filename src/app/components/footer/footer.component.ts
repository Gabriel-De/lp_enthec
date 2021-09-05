import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Button } from 'selenium-webdriver';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  email = '';

  emailCtrl = new FormControl('', [Validators.email]);


  yourEmail(){
    this.email = this.emailCtrl.value;
  }

  constructor() {

   }

  ngOnInit(): void {
  }

  getEmail(event: Event){
    event.preventDefault();
    console.log(this.emailCtrl.value)
    this.yourEmail();
  }

  showModal(){
    if (this.email.valueOf()){
      Swal.fire({
        width: 600,
        title: 'Bienvenido!',
        text: this.emailCtrl.value,
        imageUrl: '../../../assets/img/applause.png',
        imageWidth: 200,
        imageHeight: 200,
        background: '#24292d',
      });
    } else{
      Swal.fire({
        width: 600,
        icon: 'error',
        title: 'Oops...',
        text: 'Ingresa tu Email',
        background: '#24292d',
      });
    }
  }

}
