
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { ContatosService } from '../../services/contatos.service';

@Component({
  selector: 'app-contatos',
  standalone: true,
  imports: [],
  templateUrl: './contatos.html',
  styleUrl: './contatos.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contatos {
  private readonly contatosService = inject(ContatosService);
  readonly contactItems = this.contatosService.getContactItems();
}


