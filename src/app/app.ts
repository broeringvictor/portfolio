import { Component } from '@angular/core';
import { Broering } from "./components/broering/broering";
import { Experiencia } from "./components/experiencia/experiencia";
import { Projetos } from "./components/projetos/projetos";
import { Blog } from "./components/blog/blog";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Broering, Experiencia, Projetos, Blog],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'broering';
}
