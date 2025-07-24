import { Component, inject } from '@angular/core';
import { ProjetosService } from '../../services/projetos.service';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [],
  templateUrl: './projetos.html',
  styleUrl: './projetos.css'
})
export class Projetos {
  private readonly projetosService = inject(ProjetosService);
  readonly projetos = this.projetosService.getProjetos();
}

