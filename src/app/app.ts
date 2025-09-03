import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterModule], // <-- Aquí
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  welcome = 'Bienvenido a mi primera aplicación con Angular';
  tasks = [
    'Instalar el Angular CLI',
    'Crear proyecto',
    'Crear componentes',
    'Crear servicio'
  ];
}

