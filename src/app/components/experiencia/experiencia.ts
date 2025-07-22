import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  imports: [CommonModule],
  templateUrl: './experiencia.html',
  styleUrl: './experiencia.css'
})
export class Experiencia {
  public experiencias = [
    {
      periodo: "11/2020 – 05/2025",
      cargo: "Desenvolvedor Full Stack Jr & Advogado",
      link: "https://www.victor@victorbroering.adv.br",
      empresa: "Victor Broering Advocacia",
      descricoes: [
        "Reduzi em 1 hora o processo de cadastro de usuários ao desenvolver um sistema de automação com Angular, Azure Functions e APIs REST, garantindo a qualidade do código com os princípios SOLID e Clean Code.",
        "Desenvolvi um sistema de automação em .NET e C# que automatizou 100% da geração de contratos e viabilizou a delegação da precificação, utilizando Selenium e SQL Server para integrar dados de sistemas legados sem API."
      ],
      tecnologias: ['Angular', '.NET', 'C#', 'Azure Functions', 'APIs REST', 'SQL Server', 'SOLID', 'Python', 'Selenium']
    },
    {
      periodo: "01/2020 – 11/2020",
      cargo: "Estagiário de Direito",
      link: "https://www.henriquef.com.br",
      empresa: "Henrique Franceschetto Advocacia",
      descricoes: [
        "Otimizei processos internos da equipe ao assumir responsabilidades-chave em um ambiente de metodologia ágil.",
        "Aumentei a velocidade e precisão na identificação de créditos tributários ao automatizar a análise de bi-tributação com Power BI."
      ],
      tecnologias: ['Power BI', 'Metodologia Ágil']
    }
  ];
}
