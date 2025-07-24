import { Component } from '@angular/core';
import { Broering } from "./components/broering/broering";
import { Sobre } from "./components/sobre/sobre";
import { Experiencia } from "./components/experiencia/experiencia";
import { Projetos } from "./components/projetos/projetos";
import { Blog } from "./components/blog/blog";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Broering, Sobre, Experiencia, Projetos, Blog],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'broering';
}
