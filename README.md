## Build Box One

Desenvolvi casos de teste automatizados com Cypress para validar o processo de cadastro em uma aplicação web. Eles abrangem uma variedade de cenários, incluindo entradas válidas e inválidas, verificação de campos obrigatórios, validação de formatos de dados e outros aspectos essenciais para garantir a funcionalidade da tela de cadastro.


<br>

## Tecnologias Utilizadas

- **Cucumber:** Utilizado para deixar os testes legíveis e de fácil entendimento, permitindo a escrita de cenários na linguagem Gherkin.
- **Page Objects:** A estrutura do projeto é organizada em Actions, Steps, Features e ElementsMaps, facilitando a manutenção e a escalabilidade dos testes.
- **Puppeteer-plugin:** Utilizado para trocar de abas e realizar as validações necessárias, tudo configurado para garantir a integração com o Cypress.
- **Biblioteca Faker:** Utilizada para o preenchimento automático de formulários de cadastro com dados fictícios, agilizando o processo de teste.
- **GitHub Actions:** Implementação de CI para validação contínua dos testes automatizados, garantindo a qualidade do código e facilitando o processo de integração.


<br>

## Report de Bugs

Durante a execução dos testes automatizados, identifiquei dois bugs que precisam ser corrigidos. Seguem os detalhes de cada bug:

### Bug 1: Campo de Sobrenome Obrigatório Não Está Sendo Respeitado

**Descrição**: Durante os testes automatizados, foi identificado que o campo de preenchimento obrigatório para o sobrenome não está sendo respeitado pelo sistema.
**Passos para Reproduzir**:
  1. Acessar a tela de cadastro.
  2. Tentar submeter o formulário de cadastro sem preencher o campo de sobrenome.
     
**Comportamento Esperado**: O sistema deve exibir uma mensagem de erro indicando que o campo de sobrenome é obrigatório.
**Comportamento Atual**: O sistema permite a submissão do formulário sem preencher o campo de sobrenome, sem exibir mensagem de erro.

<br>

![Bug Screenshot](https://drive.google.com/file/d/15shaQoL1UDNNWtZQoqLsO0XzFwVlXLh-/view?usp=sharing)



### Bug 2: Confirmação de Senha Diferente Não Exibe Mensagem de Erro

**Descrição:** Ao inserir uma confirmação de senha que difere da senha fornecida, a aplicação não está exibindo uma mensagem de erro apropriada para notificar o usuário sobre o erro.

**Passos para Reproduzir:**
1. Acesse a página de cadastro.
2. Preencha os campos obrigatórios, incluindo senha e confirmação de senha.
3. Na confirmação de senha, insira um valor que seja diferente da senha fornecida.
4. Submeta o formulário de cadastro.

**Comportamento Esperado:** Após submeter o formulário, a aplicação deve exibir uma mensagem de erro indicando que a confirmação de senha não corresponde à senha fornecida.

<br>

![Bug Screenshot]([URL_da_Imagem](https://drive.google.com/file/d/1-hOYUQmCcFj4V2MVejoRqS0dpxp2aMyS/view?usp=sharing))



<br>

## Estrutura de arquivos


    
    cypress
        |  |  |  |  |-- cucumber-json
        |  |  |  |  |-- downloads
        |  |  |  |  |-- scenarios
        |  |  |  |  |  |  |-- Register New User
        |  |  |  |  |  |  |  |-- registerNewUser.feature - casos de testes
        |  |  |  |  |-- script
        |  |  |  |  |  |  |-- Actions - Integrações com os elementos da página
        |  |  |  |  |  |  |-- ElementsMaps - Mapeamento dos elementos da interface
        |  |  |  |  |  |  |-- Steps - Definição do comportamento dos testes
        |  |  |  |  |-- support
        |  |  |  |  |  |  |-- commands.js - comando que é utilizado em todo código
        |  |  |  |  |  |  |  |-- e2e.js - imports
       

       |  |  |  |  |  |-- package.json -- Arquivo de configurações

       |  |  |  |  |  |-- cypress.config.js -- Arquivo de configurações
          
  
 
 ------

 <br>


 ![Reprodução dos Testes](https://drive.google.com/file/d/1-BHpO7w0868oBYR-L7gOFdIG3ydg0J1t/view?usp=sharing)
