import { Component, signal } from '@angular/core';

import { RouterModule } from '@angular/router';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './labs.html',
  styleUrl: './labs.css'
})

export class Labs {
welcome = 'Bienvenido a mi primera aplicación con Angular';
  tasks = signal([
    'Instalar el Angular CLI',
    'Crear proyecto',
    'Crear componentes',
    'Crear servicio'
  ]);

  name = signal('Nicolas');
  age = 18;
  disable = true;
  img = 'https://w3schools.com/howto/img_avatar.png'

  person = signal({
    name: 'Nicolas',
    age: 19,
    avatar: 'https://w3schools.com/howto/img_avatar.png'
  });
  colorCtrl = new FormControl();
  widthCtrl = new FormControl(50,{
    nonNullable:true,
  });

  nameCtrl = new FormControl( 'nicolas',{
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(3)
    ]
  });

  constructor(){
    this.colorCtrl.valueChanges.subscribe(value => {
      console.log(value);
    })
  }

  clickHandler(){
    alert('Hola')
  }
  changeHandler(event: Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
  }

  keydownHandler(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log(input.value);
    
  }
  changeAge(event: Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update(prevState => {
      return {
        ... prevState,
        age: parseInt(newValue, 10)
      }
    });
  }
  changeName(event: Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update(prevState => {
      return {
        ... prevState,
        name: newValue
      }
    });
  }
}
