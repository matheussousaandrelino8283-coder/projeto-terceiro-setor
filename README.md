# Impacto Social

Projeto acadêmico desenvolvido para apoiar e apresentar iniciativas do terceiro setor. A aplicação foi construída como uma SPA (Single Page Application), utilizando HTML, CSS e JavaScript, com foco em organização do código, responsividade, acessibilidade e boas práticas de versionamento.

## Visão geral

O projeto apresenta informações sobre iniciativas sociais, projetos e formas de contato. A navegação acontece de forma dinâmica utilizando JavaScript e rotas baseadas em hash, permitindo trocar o conteúdo da aplicação sem recarregar a página.

## Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript ES6+
* Vite
* DOM
* LocalStorage
* Git
* GitHub

## Estrutura do projeto

```text
projeto-terceiro-setor/
├── css/
│   └── style.css
├── html/
│   └── index.html
├── imagens/
├── js/
│   ├── app.js
│   ├── components.js
│   ├── forms.js
│   ├── router.js
│   └── storage.js
├── public/
├── src/
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

## Instalação e execução

Para executar o projeto localmente, é necessário ter o Node.js instalado.

Clone o repositório:

```bash
git clone https://github.com/matheussousaandrelino8283-coder/projeto-terceiro-setor.git
```

Entre na pasta do projeto:

```bash
cd projeto-terceiro-setor
```

Instale as dependências:

```bash
npm install
```

Execute o projeto em ambiente de desenvolvimento:

```bash
npm run dev
```

O Vite disponibilizará um endereço local para acessar a aplicação pelo navegador.

## Funcionalidades

* Navegação dinâmica entre as páginas da aplicação.
* Apresentação de projetos sociais.
* Modal para visualização dos detalhes dos projetos.
* Formulário de contato.
* Validação dos campos do formulário.
* Mensagens de erro e confirmação.
* Armazenamento das mensagens utilizando LocalStorage.
* Modo claro e modo escuro.
* Layout responsivo para diferentes tamanhos de tela.
* Navegação por teclado.
* Indicador visual de foco.
* Recursos de acessibilidade com elementos semânticos e atributos ARIA.

## Acessibilidade

A aplicação foi desenvolvida considerando princípios de acessibilidade e referências da WCAG 2.1.

Foram utilizados:

* Elementos HTML semânticos, como `header`, `nav`, `main` e `footer`.
* Labels associados aos campos dos formulários.
* Atributos ARIA quando necessários.
* Indicadores visuais de foco utilizando `:focus-visible`.
* Suporte à navegação por teclado.
* Contraste adequado entre textos e fundos.
* Modal com `role="dialog"` e `aria-modal="true"`.
* Mensagens de erro associadas aos campos do formulário.

## Versionamento

O projeto utiliza Git e GitHub para controle de versão.

A organização das branches foi baseada em um fluxo semelhante ao GitFlow:

* `main`: versão estável do projeto.
* `develop`: integração das alterações durante o desenvolvimento.
* `feature/*`: desenvolvimento de funcionalidades específicas.

Também foram utilizados commits organizados por tipo de alteração, além de Issues, Milestones e Pull Requests para acompanhar o desenvolvimento.

## Principais commits

* `chore: criar estrutura inicial do projeto`
* `feat: criar estrutura inicial da interface`
* `feat: adicionar navegação e interações com JavaScript`

## Build de produção

A aplicação utiliza Vite para gerar a versão de produção.

Para gerar a build:

```bash
npm run build
```

Para visualizar a build localmente:

```bash
npm run preview
```

## Projeto acadêmico

Este projeto foi desenvolvido como atividade acadêmica de Experiência Prática IV, com foco em desenvolvimento web, versionamento, acessibilidade, otimização e publicação de uma aplicação funcional.
