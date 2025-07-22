import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contatos } from "../contatos/contatos";

@Component({
  selector: 'app-broering',
  standalone: true, // É importante definir como standalone
  imports: [CommonModule, Contatos],
  templateUrl: './broering.html',
  styleUrl: './broering.css',

  host: {
    class: 'flex flex-col justify-between h-full' 
  }
})
export class Broering {
  public isEmailCopied = false;

  public copyEmail(): void {
    const email = 'victorbroerings@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      this.isEmailCopied = true;
      setTimeout(() => {
        this.isEmailCopied = false;
      }, 2000);
    }).catch(err => {
      console.error('Falha ao copiar o e-mail para a área de transferência:', err);
    });
  }
}