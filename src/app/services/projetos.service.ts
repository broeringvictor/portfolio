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
      imagemUrl: 'https://placehold.co/200x112/0f172a/94a3b8?text=FastAPI',
      nome: 'FastAPI Backend Template',
      link: 'https://github.com/broeringvictor/fastapi',
      descricao: [
        'Estudo e modelo reutilizável de backend utilizando FastAPI, focado em arquitetura, Clean Code e padrões de projeto em Python.',
        'Comparação direta com tecnologias .NET para compreensão de assincronismo e ORMs (SQLAlchemy vs Entity Framework).',
        'Implementação de autenticação JWT segura (HttpOnly, CSRF), arquitetura modular e Value Objects.',
        'Suíte completa de testes com Pytest, Factory Boy e Freezegun, utilizando uv para gerenciamento de dependências.'
      ],
      tecnologias: ['Python', 'FastAPI', 'SQLAlchemy', 'JWT', 'Pytest', 'PostgreSQL', 'Clean Code']
    },
    {
      imagemUrl: 'https://placehold.co/200x112/0f172a/94a3b8?text=Bot', // Placeholder
      nome: 'PxG Auto Revive Bot',
      link: 'https://github.com/broeringvictor/auto-revive-bot',
      descricao: [
        'Combinei a API do Windows(user32.dll) e visão computacional (OpenCVSharp) para criar uma automação inteligente.'
      ],
      tecnologias: ['C#', '.NET', 'Windows Forms', 'P/Invoke', 'OpenCVSharp']
    },
    {
      imagemUrl: 'https://placehold.co/200x112/0f172a/94a3b8?text=Calculadora', // Placeholder
      nome: 'Validador Estatístico de Testes A/B',
      link: 'https://github.com/broeringvictor/ab_test_calculator',
      descricao: [
        'Arquitetei e construí uma ferramenta de análise estatística para testes A/B que abstrai a complexidade de métricas para usuários não-técnicos. Estando hoje na rotina de uma equipe de marketing em uma empresa com mais de 200 funcionários.'
      ],
      tecnologias: ['Python', 'Streamlit', 'Pandas', 'Heroku', 'GitHub Actions']
    },
    {
      imagemUrl: 'https://placehold.co/200x112/0f172a/94a3b8?text=Gubernare', // Placeholder
      nome: 'Sistema de Gestão Processual Jurídica',
      link: 'https://github.com/broeringvictor/gubernare-public',
      descricao: [
        'Prototipei a conversão de uma aplicação interna para uma arquitetura de microsserviços open-source, orquestrada com .NET Aspire com Docker, com um sistema de segurança com JWT, hash com salt (PBKDF2) e criptografia AES-256.'
      ],
      tecnologias: ['.NET Aspire', 'ASP.NET Core', 'Angular', 'Python', 'Docker', 'Redis', 'JWT']
    },
    {
      imagemUrl: 'https://placehold.co/200x112/0f172a/94a3b8?text=Portfolio', // Placeholder
      nome: 'Portfólio pessoal',
      link: 'https://github.com/broeringvictor/portfolio',
      descricao: [
        'Portfólio pessoal, desenvolvido com Angular e Tailwind CSS. O projeto apresenta as minhas informações profissionais, experiências, projetos e um blog integrado com a API do Hashnode.'
      ],
      tecnologias: ['Angular', 'CI/CD', 'Tailwind', 'Jasmine', 'Karma', 'GitHub Actions']
    }
  ];

  getProjetos(): Projeto[] {
    return this.projetos;
  }
}
