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
      periodo: "Set/2025 - Presente",
      cargo: "Desenvolvedor Backend",
      link: "https://tributodevido.com.br/",
      empresa: "Tributo Devido",
      descricoes: [
        "Na Tributo Devido, eu atuo como Desenvolvedor Back-end focado em criação e manutenção de micro serviços para o tratamento de processos fiscais complexos, conformidade fiscal e otimização de performance para grandes volumes de dados tributários.",
        "Implemento arquiteturas orientadas a eventos (Event-Driven), utilizando RabbitMQ para o consumo e gestão assíncrona de eventos de teses tributárias, garantindo a resiliência do pipeline em pods S3 na AWS.",
        "Atuo em Data Engineering, o que inclui a conversão de dataset complexos (como o SPED Tributário) para o formato colunar Parquet, com o objetivo de otimizar a performance em ferramentas de análise e no Athena, da AWS.",
        "Utilização da biblioteca Pandas para desenvolver lógicas de negócio e realizar transformações de dados, garantindo a normalização precisa para gerar alterações de débitos e créditos. Em 2025, esta abordagem resultou na recuperação de quase 2 bilhões em créditos.",
        "Aplico minha experiência anterior em Direito Tributário no diálogo com especialistas da área e com a equipe de automação, auxiliando o time de desenvolvimento na compreensão das regras de negócio fiscal e da engenharia de dados."
      ],
      tecnologias: ['Python', 'Pandas', 'AWS', 'RabbitMQ', 'Microservices', 'Event-Driven', 'Data Engineering', 'Parquet', 'Athena']
    },
    {
      periodo: "Nov/2020 – Jul/2025",
      cargo: "Desenvolvedor Full Stack e Advogado",
      link: "https://www.victorbroering.adv.br",
      empresa: "Victor Broering Advocacia",
      descricoes: [
        "Liderei a iniciativa de desenvolvimento interno, criando um microssistema de web scraping que gerou uma economia de R$11.000 anuais em licenças de software jurídico.",
        "Desenvolvi e implantei uma solução full stack em .NET que automatizou 100% do processo de geração de contratos, eliminando tarefas manuais e permitindo a delegação segura da precificação.",
        "Integrei sistemas legados que não aceitavam API utilizando Selenium e SQL Server para garantir a consistência e a centralização dos dados da operação."
      ],
      tecnologias: ['.NET', 'C#', 'ASP.NET', 'Blazor', 'Selenium', 'SQL Server', 'Python']
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
