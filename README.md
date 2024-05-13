# Versão Brasileira 🇧🇷

<div align="center">
  <img  style="border-radius: 8px;" src="./public/banner.png" width="90%"/>
  <br/>
  <br/>
  <a href="https://front-au.vercel.app/menu" target=”_blank”><strong>Link do Deploy »</strong></a>
  <br/>
  <br/>
</div>
<div align="center">
  <a href="#about">Sobre</a> •
  <a href="#technologies">Tecnologias</a> •
  <a href="#run">Como Rodar?</a>
</div>

## <span id="about">🌐 Sobre o Projeto</span>

Seu principal objetivo é aprofundar os conhecimentos em métodos de renderização, que são possíveis de se utilizar no Next.js 14, para melhorar a experiência do usuário e os métodos de SEO, além de reduzir o tempo de carregamento da página e permitir ações mesmo que o usuário tenha uma conexão lenta.

É exibido um skeleton loading para reduzir a percepção de um longo tempo de carregamento.

Foi realizada a criação de um tema, facilitando que, futuramente seja quase que instantânea a criação e aplicação de novos temas ao site.

A comunicação com o servidor foi feita com o axios utilizando REST. Os hooks de comunicação com o servidor foram gerados utilizando react query, permitindo também um tempo de "cacheamento dos dados" (atualmente setado para um dia), evitando requisições desnecessárias ao servidor.

Para captação e molde dos dados de formulário, foram utlizados react hook form e zod, permitindo, exibição de erros personalizada, com mais interação com o usuário.

Foram utilizados padrões de arquitetura, e boas práticas de clean code, componentizando os componentes da página o máximo possível, abstraindo ao máximo suas responsabilidades, para que as diferentes partes do código não estejam "presas" umas às outras. Por exemplo, os componentes da página estarem presos aos componentes que realizam as chamadas a API.

Abaixo segue a lista de algumas das funcionalidades implementadas:

- React Hook Form e ZOD para formulários
- React Query e Axios para comunicação com a API
- Mudança de tema a partir do Theme Provider (Styled-Components)
- Skeleton Loading como animação de carregamento
- Design Patterns
- Arquitechture Patterns

## <span id="technologies">🛠 Tecnologias</span>

Abaixo seguem as ferramentas e frameworks utilizados no projeto: <br/>

<div style="display: inline_block"> 
  <img alt="Gui-Next" height="30" src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white">
  <img alt="Gui-React" height="30" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
  <img alt="Gui-React-Query" height="30" src="https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white"> 
  <img alt="Gui-React Hook Form" height="30" src="https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white">
  <img alt="Gui-Ts" height="30" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white">
  <img alt="Gui-Styled-Components" height="30" src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">  
  <img alt="Gui-Figma" height="30" src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">
</div>

## <span id="run">⚙️ Como Rodar</span>

1. Clone este repositório
2. Adicione a URL da API nas variáveis de ambiente (exemplo no arquivo .env.example)
3. Instale as dependências

```bash
npm i
```

4. Rode a aplicação com

```bash
npm run dev
```

5. Você pode opcionalmente buildar o projeto

```bash
npm run build
```

6. E executar a versão de produção

```bash
npm start
```

7. Por último, acesse http://localhost:3000 no seu navegador para vizualizar a aplicação
