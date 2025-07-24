import { Injectable } from '@angular/core';

export interface ContactItem {
  icon: string; 
  text: string;
  href: string;
  ariaLabel: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContatosService {
  private readonly contactItems: ContactItem[] = [
    {
      icon: 'M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z',
      text: 'Palhoça, Santa Catarina, Brasil',
      href: 'https://www.google.com/maps/place/Palhoça',
      ariaLabel: 'Ver localização em Palhoça, Santa Catarina no mapa',
    },
    {
      icon: 'M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z',
      text: '(48) 99166-0808',
      href: 'tel:+5548991660808',
      ariaLabel: 'Ligar para o telefone (48) 99166-0808',
    },
    {
      icon: 'M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75',
      text: 'victorbroerings@gmail.com',
      href: 'mailto:victorbroerings@gmail.com',
      ariaLabel: 'Enviar um e-mail para victorbroerings@gmail.com',
    },
    {
      icon: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22',
      text: 'GitHub',
      href: 'https://github.com/broeringvictor',
      ariaLabel: 'Visitar perfil no GitHub',
    },
    {
      icon: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
      text: 'LinkedIn',
      href: 'https://linkedin.com/in/victorbroering',
      ariaLabel: 'Visitar perfil no LinkedIn',
    },
  ];

  getContactItems(): ContactItem[] {
    return this.contactItems;
  }
}
