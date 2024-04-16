# language: pt
Funcionalidade: Register New User

Cenário: Successful Registration
Dado que estou na página de cadastro
E que estou na página de cadastro
Quando preencho o campo 'Nome' com 'Fulano'
E preencho o campo 'Sobrenome' com 'Silva'
E preencho o campo 'Data de nascimento' com '01011990'
E preencho o campo 'CPF' com 'cpf'
E preencho o campo 'E-mail' com 'email'
E preencho o campo 'Confirme seu E-mail' com 'confirme email'
E preencho o campo 'Senha' com 'senha123'
E preencho o campo 'Confirme sua senha' com 'senha123'
E seleciono o nível de proficiência na língua inglesa como 'Advanced'
E concordo com os Termos de Uso e Política de Privacidade
E seleciono o botão 'buttonNextFirstPage'
E vejo o texto 'Endereço' para seguir com o cadastro
E preencho o campo 'CEP' com '96208-660'
E preencho o campo 'Número residencial' com '90'
E seleciono o botão 'buttonNextSecondPage'
Então vejo o texto 'Thank you for joining us!' de cadastro realizado com sucesso

Cenário: Invalid CPF registration Failure
Dado que estou na página de cadastro
Quando preencho o campo 'Nome' com 'Fulano'
E preencho o campo 'Sobrenome' com 'Silva'
E preencho o campo 'Data de nascimento' com '01011990'
E preencho o campo 'CPF' com '12345678900'
E preencho o campo 'E-mail' com 'email'
E preencho o campo 'Confirme seu E-mail' com 'confirme email'
E preencho o campo 'Senha' com 'senha123'
E preencho o campo 'Confirme sua senha' com 'senha123'
E seleciono o nível de proficiência na língua inglesa como 'Advanced'
E concordo com os Termos de Uso e Política de Privacidade
E seleciono o botão 'buttonNextFirstPage'
Então vejo a mensagem de erro 'CPF inválido.'

Cenário: Registration failed due to missing last name
Dado que estou na página de cadastro
Quando preencho o campo 'Nome' com 'Fulano'
E preencho o campo 'Sobrenome' com '  '
E preencho o campo 'Data de nascimento' com '01011990'
E preencho o campo 'CPF' com 'cpf'
E preencho o campo 'E-mail' com 'email'
E preencho o campo 'Confirme seu E-mail' com 'confirme email'
E preencho o campo 'Senha' com 'senha123'
E preencho o campo 'Confirme sua senha' com 'senha123'
E seleciono o nível de proficiência na língua inglesa como 'Advanced'
E concordo com os Termos de Uso e Política de Privacidade
E seleciono o botão 'buttonNextFirstPage'
Então vejo a mensagem de erro 'Precisa ser preenchido'

Cenário: Failed to register incorrect email confirmation
Dado que estou na página de cadastro
Quando preencho o campo 'Nome' com 'Fulano'
E preencho o campo 'Sobrenome' com 'Silva'
E preencho o campo 'Data de nascimento' com '01011990'
E preencho o campo 'CPF' com 'cpf'
E preencho o campo 'E-mail' com 'email'
E preencho o campo 'Confirme seu E-mail' com 'errrrrr'
E preencho o campo 'Senha' com 'senha123'
E preencho o campo 'Confirme sua senha' com 'senha123'
E seleciono o nível de proficiência na língua inglesa como 'Advanced'
E concordo com os Termos de Uso e Política de Privacidade
E seleciono o botão 'buttonNextFirstPage'
Então vejo a mensagem de erro 'Precisa ser email'

Cenário: Failed to register incorrect password confirmation
Dado que estou na página de cadastro
Quando preencho o campo 'Nome' com 'Fulano'
E preencho o campo 'Sobrenome' com 'Silva'
E preencho o campo 'Data de nascimento' com '01011990'
E preencho o campo 'CPF' com 'cpf'
E preencho o campo 'E-mail' com 'email'
E preencho o campo 'Confirme seu E-mail' com 'confirme email'
E preencho o campo 'Senha' com 'perola'
E preencho o campo 'Confirme sua senha' com '123'
E seleciono o nível de proficiência na língua inglesa como 'Advanced'
E concordo com os Termos de Uso e Política de Privacidade
E seleciono o botão 'buttonNextFirstPage'
Então vejo a mensagem de erro 'Insira uma senha válida'

#coments