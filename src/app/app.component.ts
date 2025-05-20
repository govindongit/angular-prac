import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HomeComponent],
  template: `

  <app-header/>
  <main>
    <app-home/>
  </main>


    <h1>Welcome to {{title}}!</h1>
    <p>
      Hello world
    </p>

    <router-outlet />
  `,
  styles: [`

  main{
    padding:16px;
  }
   p{
    background-color:red;
   }
   
    `],
})
export class AppComponent {
  title = 'My Angular Journey';
}
