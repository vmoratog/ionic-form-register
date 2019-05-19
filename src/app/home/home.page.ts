import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild(IonContent) content: IonContent;

  newUser = {
    firstName: '',
    lastName: '',
    phoneNumber: '' 
  }

  register(registerForm: NgForm) {
    this.content.scrollToTop(400);
    if (!registerForm.valid) {
      Object.values(registerForm.controls).forEach(field => {
        field.markAsTouched()
      });
      return
    }
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    users.push(this.newUser)
    localStorage.setItem('users', JSON.stringify(users))
    registerForm.resetForm()
  }
}
