# Victor Broering - Portfolio

Este é o código-fonte do meu portfólio pessoal, desenvolvido com Angular e Tailwind CSS. O projeto apresenta as minhas informações profissionais, experiências, projetos e um blog integrado com a API do Hashnode.

## ✨ Visão Geral

O site é SPA estática, projetada para ser rápida e resposível, possíbilitando a hospedagem no github pages.

## 🚀 Tecnologias Utilizadas

- **[Angular](https://angular.io/) 20:** Framework front-end.
- **[Tailwind CSS](https://tailwindcss.com/):** Framework CSS.
- **[Hashnode API](https://hashnode.com/api):** Utilizada para buscar e exibir os posts mais recentes do meu blog diretamente no portfólio.
- **[Karma](https://karma-runner.github.io/):** É o executor de testes que abre um navegador e executa os testes de forma automatizada.
- **[Jasmine](https://jasmine.github.io/):** É o framework de testes utilizado para testes unitários.
- **[GitHub Actions](https://docs.github.com/en/actions):** CI/CD, garantindo a integração contínua e a entrega/deploy contínuo.


## 📂 Estrutura do Projeto

O projeto segue a estrutura padrão do Angular, com os principais arquivos localizados em `src/app`.

```
src/app/
├── components/
│   ├── blog/         # Exibe os últimos posts do blog
│   ├── broering/     # Componente principal do cabeçalho
│   ├── contatos/     # Lista de informações de contato
│   ├── experiencia/  # Exibe a experiência profissional
│   ├── projetos/     # Lista os projetos do portfólio
│   └── sobre/        # Seção de apresentação
└── services/
    ├── blog.service.ts          # Serviço para consumir a API do Hashnode
    ├── contatos.service.ts      # Fornece os dados de contato
    ├── experiencia.service.ts   # Fornece os dados de experiência
    └── projetos.service.ts      # Fornece os dados dos projetos
```

## 🔌Como Executar o Projeto
### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/broeringvictor/broering.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd broering
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

### Executando o Projeto

Execute o comando abaixo para iniciar o servidor de desenvolvimento:

```bash
ng serve
```

Acesse `http://localhost:4200/` em seu navegador.
