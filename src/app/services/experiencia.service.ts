import { Injectable } from '@angular/core';

export interface Experiencia {
  periodo: string;
  cargo: string;
  link: string;
  empresa: string;
  descricoes: string[];
  tecnologias: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  private readonly experiencias: Experiencia[] = [
    {
      periodo: "09/2025 - Presente",
      cargo: "Desenvolvedor Backend",
      link: "https://tributodevido.com.br/",
      empresa: "Tributo Devido",
      descricoes: [
        "Atuo como Desenvolvedor Back-end focado em criação e manutenção de micro serviços para o tratamento de processos fiscais complexos, conformidade fiscal e otimização de performance para grandes volumes de dados tributários.",
        "Implemento arquiteturas orientadas a eventos (Event-Driven), utilizando RabbitMQ para o consumo e gestão assíncrona de eventos de teses tributárias, garantindo a resiliência do pipeline em pods S3 na AWS.",
        "Atuo em Data Engineering, convertendo datasets complexos (como o SPED Tributário) para o formato colunar Parquet, otimizando a performance em ferramentas de análise e no AWS Athena.",
        "Utilizo a biblioteca Pandas para desenvolver lógicas de negócio e realizar transformações de dados, garantindo a normalização precisa para gerar alterações de débitos e créditos. Em 2025, esta abordagem resultou na recuperação de quase 2 bilhões em créditos.",
        "Aplico minha experiência anterior em Direito Tributário no diálogo com especialistas da área e com a equipe de automação, auxiliando o time de desenvolvimento na compreensão das regras de negócio fiscal e da engenharia de dados."
      ],
      tecnologias: ['Python', 'Pandas', 'AWS', 'RabbitMQ', 'Microservices', 'Event-Driven', 'Data Engineering', 'Parquet', 'Athena']
    },
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

  getExperiencias(): Experiencia[] {
    return this.experiencias;
  }
}
