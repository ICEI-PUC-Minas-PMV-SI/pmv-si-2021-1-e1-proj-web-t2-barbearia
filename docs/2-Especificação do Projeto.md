# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

1. Ricardo Nepomuceno, homem de 26 anos, morador de um bairro classe média de Belo Horizonte. Técnico em administração, barbeiro e proprietário de uma barbearia, cuida de seu negócio sozinho e por isso muitas vezes seu tempo é extremamente curto. Ricardo gosta de manter as informações da barbearia sempre atualizadas, o tempo tem sido seu maior inimigo. Tem como meta ter um estabelecimento maior para atender mais pessoas ao mesmo tempo, com um ou mais dois barbeiros como colaboradores. Não é muito consumista, porém quando precisa de algo não se importa em pagar um pouco mais em algo que seja de qualidade. Ele é extrovertido e adora usar as redes sociais e estar com a família e amigos em seu tempo livre.

2. Lucas Pereira, 20 anos, é esforçado, solteiro e trabalha em uma grande empresa de programação.
Ele é um jovem bem focado em suas atividades profissionais, sempre está inovando suas ideias e conhecimentos, trabalha durante a grande parte do dia.
Em seu tempo livre, gosta de encontrar com seus amigos para beber e colocar a conversa em dia.
Sua maior dificuldade é a gestão do seu tempo, pois a grande parte do seu dia está trabalhando ou estudando.

3.  Renato Lopes, 27 anos, é recém-formado em direito e já trabalha em um escritório fora da sua cidade. Futuramente ele pensa em montar o seu próprio escritório mais próximo de sua casa, já que gasta muito tempo se locomovendo até o seu local de trabalho. Como no meio da semana ele está trabalhando fazendo com que ele fique bastante cansado e quando chega aos finais de semana ele fica em sua casa descansando do trabalho.

4. Antônio tem 48 anos e é cabeleireiro há 20. É dono do próprio negócio há 13 anos, desde que resolveu abrir o seu salão. Como proprietário de salão tem agenda agitada: tem que cuidar da limpeza e organização do local, manter o equipamento de trabalho adequado para dar conta do atendimento aos clientes e satisfazer a clientela o máximo possível. Extremamente sociável e com muita experiência em cortar cabelo, Antônio tem uma lista de clientes fieis e desempenha um importante papel na sua comunidade, mantendo uma ampla rede de contatos entre os moradores do bairro conde trabalha. Com o surgimento da pandemia do coronavírus, Antônio teve de aprender a lidar com novos desafios: manter as condições higiênicas ideais, num contexto de perda de clientela e restrição ao funcionamento de estabelecimentos comerciais.

5. Sérgio tem 53 anos e é cabeleireiro há 32. Entrou no ramo por influência do pai, barbeiro experiente que por muito tempo comandou uma barbearia na região Oeste de Belo Horizonte. Atualmente Sérgio tem um salão próprio, onde comanda o trabalho de outros quatro funcionários, entre eles seu irmão e o filho mais velho. O salão funciona de acordo com a agenda de cada um: cada cliente interage com seu barbeiro de preferência (seja pessoal ou virtualmente) e marca horário dependendo das cadeiras ociosas (pode-se atender até quatro clientes ao mesmo tempo). A restrição de funcionamento imposta pelas autoridades sanitárias no combate ao coronavírus impôs que Sérgio sugerisse aos seus funcionários organizar um cronograma de funcionamento no salão, em que apenas um cliente fosse atendido por vez, com tempo de 10 minutos entre um atendimento e outro para a adequada higienização do local.

6. Pedro Paulo tem 26 anos, é arquiteto recém-formado e autônomo. Pensa em se desenvolver profissionalmente através de um mestrado fora do país, pois adora viajar, é solteiro e sempre quis fazer um intercâmbio. Está buscando uma agência que o ajude a encontrar universidades na Europa que aceitem alunos estrangeiros. 

7. Fernando Ribeiro tem 26 anos, solteiro e é policial. Fernando optou por seguir uma tradição de sempre ter policiais na família, desde seu bisavô,  posteriormente seu avó, seu pai e agora ele. O serviço de Fernando além de ser de risco, exige muito de seu tempo. Nas horas livres ele treina Jiu-Jitsu e as vezes se reune com seus amigos, seja em churrascos ou no bar.  Como Fernando não dispõe de muito tempo, ele gosta de ter controle dos seus horários e até utiliza um aplicativo em seu celular que o permite fazer esse gerenciamento, para que assim ele possa aproveitar ao máximo as horas livres.

8. Paulo Henrique tem 23 anos, solteiro, nas horas livres gosta de jogar futebol e videogame com seus amigos. Em 2018 concluiu seu curso profissionalizante de barbeiro. No mesmo ano, graças a ajuda de seus pais, conseguiu alugar um espaço para montar seu salão, no bairro em que mora. O começo do trabalho de Paulo Henrique foi tranquilo, pois ele ainda não tinha clientes fixos, embora conhecesse muita gente em seu bairro, principalmente amigos da época da escola. Paulo Henrique percebeu que a demanda do seu negócio aumentou bastante depois que ele melhorou o visual da barbearia, adicionando uma nova pintura, som ambiente, Wi-fi, mesa de sinuca e um pequeno frigobar com água, suco e refrigerante. Porém com a chegada da pandemia, ele está tendo um problema com a aglomeração de clientes, mesmo após ele ter conseguido contratar uma pessoa para ajudar com os serviços,  ainda ficam muitos clientes dentro da barbearia esperando atendimento, principalmente nos finais de semana.

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`                                      |PARA ... `MOTIVO/VALOR`                                |
|--------------------|-----------------------------------------------------------------------  |-------------------------------------------------------|
|Antônio             |Organizar a agenda de atendimento de maneira mais eficiente              |Programar melhor o tempo de cada atendimento           |
|Sérgio              |Contatar clientes e funcionários para monitorar a ordem de antendimento  |Coordenar os atendimentos entre diferentes funcionários| 
|Antônio             |Inserir recursos tecnológicos na administração do salão                  |Ser mais competitivo no mercado                        |
|Sérgio              |Melhorar a comunicação com os clientes                                   |Manter a clientela fidelizada                          |
|Fernando Ribeiro    |Poder agendar grande parte dos serviços que utliza no seu cotidiano      |ter um controle maior do seu tempo livre               |
                      

| EU COMO ... `PERSONA`| QUERO / PRECISO... `FUNCIONALIDADE ` | PARA... `MOTIVO / VALOR`                  |
|  ----------------------|---------------------------------|---------------------------------------------|
|Lucas Pereira | Acessar os melhores horários de funcionamento da barbearia | Precisa planejar um horário que encaixe com o seu trabalho|
| Renato Lopes | Acessar os horários  aos finais de semana com agilidade | Agendar um horário sem precisar sair de sua casa ou trabalho |

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
