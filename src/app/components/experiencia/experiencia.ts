import { Component, inject } from '@angular/core';
import { ExperienciaService } from '../../services/experiencia.service';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [],
  templateUrl: './experiencia.html',
  styleUrl: './experiencia.css'
})
export class Experiencia {
  private readonly experienciaService = inject(ExperienciaService);
  readonly experiencias = this.experienciaService.getExperiencias();
}
