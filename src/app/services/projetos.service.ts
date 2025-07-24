import { Injectable } from '@angular/core';

export interface Projeto {
  imagemUrl: string;
  nome: string;
  link: string;
  descricao: string[];
  tecnologias: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ProjetosService {
  private readonly projetos: Projeto[] = [
    {
      imagemUrl: 'https://placehold.co/200x112/0f172a/94a3b8?text=Bot', // Placeholder
      nome: 'PxG Auto Revive Bot',
      link: 'https://github.com/broeringvictor/auto-revive-bot',
      descricao: [
        'Ferramenta de automação para Windows desenvolvida como um estudo sobre a API do Windows (P/Invoke), hooks globais de teclado/mouse e visão computacional com OpenCV.'
      ],
      tecnologias: ['C#', 'WinForms', 'OpenCV', 'P/Invoke']
    },
    {
      imagemUrl: 'https://placehold.co/200x112/0f172a/94a3b8?text=Calculadora', // Placeholder
      nome: 'Calculadora de Validação de Testes A/B',
      link: 'https://github.com/broeringvictor/ab_test_calculator',
      descricao: [
        'Aplicação web interativa que simplifica a análise de significância estatística em testes A/B, tornando o processo acessível para equipes de Produto, CRO e Marketing.'
      ],
      tecnologias: ['Python', 'Streamlit', 'Pandas', 'Heroku', 'GitHub Actions']
    },
    {
      imagemUrl: 'https://placehold.co/200x112/0f172a/94a3b8?text=Gubernare', // Placeholder
      nome: 'Sistema de Gestão Processual Jurídica',
      link: 'https://github.com/broeringvictor/gubernare-public',
      descricao: [
        'Sistema moderno para gestão de processos judiciais confidenciais, desenvolvido em arquitetura de microsserviços com orquestração de containers via .NET Aspire.'
      ],
      tecnologias: ['.NET Aspire', 'ASP.NET Core', 'Angular', 'Redis', 'JWT']
    }
  ];

  getProjetos(): Projeto[] {
    return this.projetos;
  }
}
