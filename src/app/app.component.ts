import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  template: `

  <app-header/>
  <main>
    <router-outlet/>
  </main>
  
  <h1>Welcome to {{title}}!</h1>
  <p>Hello world</p>

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
  title = 'Angular Journey';
}
