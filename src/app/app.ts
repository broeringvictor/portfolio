import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Broering } from "./components/broering/broering";
import { Sobre } from "./components/sobre/sobre";
import { Experiencia } from "./components/experiencia/experiencia";
import { Projetos } from "./components/projetos/projetos";
import { Blog } from "./components/blog/blog";
import { Contatos } from "./components/contatos/contatos";

@Component({
  selector: 'app-root',
  imports: [Broering, Sobre, Experiencia, Projetos, Blog, Contatos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'broering';
}
