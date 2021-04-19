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

9. Gilvanildo Carvalho tem 52 anos, é contador e possui um escritório próprio. É casado há 22 anos e estuda Teologia devido ao seu desejo de aprofundar seus conhecimentos sobre sua crença, está muito envolvido com suas atividades religiosas.

10. Luan Neri tem 28 anos, é formado em administração há 2 anos. Trabalha em uma concessionária de carros novos e usados como assistente no setor financeiro. Está em busca de um curso de especialização na área de gestão financeira, onde pretende seguir carreira. É recém casado e junta dinheiro junto com sua parceira para comprar imóvel próprio.

11. Luís Alves, 18 anos, Jovem Aprendiz, recém formado no ensino médio, mora com seus avós e gosta de manter a aparência em dia, roupas da moda e cabelo “na régua”. Normalmente cortava cabelo aos sábados por ser o dia que ele tinha mais tempo para aguardar na fila da barbearia de um conhecido de seu bairro, porém com as restrições impostas pela pandemia teve que trocar para uma barbearia que atende apenas por agendamento pois tem medo do risco que qualquer aglomeração pode trazer para ele e sua família. Luís sonha em se formar como enfermeiro para poder cuidar de seus avós ainda melhor. 

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`                                            |PARA ... `MOTIVO/VALOR`                                    |
|--------------------|-------------------------------------------------------------------------------|-----------------------------------------------------------|
|Antônio             |Organizar a agenda de atendimento de maneira mais eficiente                    |Programar melhor o tempo de cada atendimento               |
|Sérgio              |Contatar clientes e funcionários para monitorar a ordem de antendimento        |Coordenar os atendimentos entre diferentes funcionários    |    
|Antônio             |Inserir recursos tecnológicos na administração do salão                        |Ser mais competitivo no mercado                            |
|Sérgio              |Melhorar a comunicação com os clientes                                         |Manter a clientela fidelizada                              |
|Fernando Ribeiro    |Poder agendar grande parte dos serviços que utliza no seu cotidiano            |Ter um controle maior do seu tempo livre                   |
|Paulo Henrique      |Ter controle da quantidade de clientes a ser atendida e horário de atendimento |Evitar filas de espera para não aglomerar clientes no salão|
|Gilvanildo Carvalho |Acessar uma agenda com horários disponíveis                                    |Planejar melhor as atividades do dia                       |
|Gilvanildo Carvalho |Verificar o dia e hora de menor movimento                                      |Evitar contato com outras pessoas e se proteger durante a pandemia|
|Luan Neri           |Agendar horário do serviço, a qualquer momento                                 |Não perder tempo ao ligar para o estabelecimento ou ir até o local|
|Ricardo Nepomuceno  |Agendar horários para atender os clientes de forma mais automatizada           |Diminuir perca de tempo atendendo clientes pelo telefone   |
|Luís Alves          |Encontrar uma barbearia que atenda por agendamento                             |Evitar  aglomerações                                       |               
|Lucas Pereira | Acessar os horários de funcionamento da barbearia | Precisa planejar um horário que encaixe com o seu trabalho |
| Renato Lopes | Acessar os horários aos finais de semana com agilidade | Agendar um horário sem precisar sair de sua casa ou trabalho |

## Requisitos

### Requisitos Funcionais

|ID       | Descrição do Requisito                  | Prioridade |
|---------|-----------------------------------------|----|
|RF-01    | Agendamento de horário de atendimento            | ALTA  | 
|RF-02    | Possuir cadastro de clientes                     | ALTA  | 
|RF-03    | Ter um controle de qualidade(Ótimo, Bom, Regular e Ruim) | ALTA  | 
|RF-04    | Disponibilizar uma grade de horários para os clientes | ALTA  | 
|RF-05    | Saber data da última visita do cliente           | MÉDIA | 
|RF-06    | Opção de desmarcar o atendimento automaticamente | MÉDIA | 
|RF-07    | Escolher o serviço que será realizado na barbearia (exemplo: corte, pintura, barba e etc.) | MÉDIA |
|RF-08    | Opção de gerar relatório de agendamentos | MÉDIA |
|RF-09    | Ter um programa de fidelidade para o cliente (exemplo: a cada 5 serviços utilizados o cliente ganha um desconto no próximo serviço) | MÉDIA |
|RF-10    | Apresentar opção de reproduzir n TV/PC para exibir no salão |MÉDIA|

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-01| Por segurança / Criptografia no login e dados | MÉDIA | 
|RNF-02| Deve processar requisições do usuário em no máximo 3s |  BAIXA |
|RNF-03| A sistema da aplicação deve ser responsivo para ser utilizada em dipositios móvéis |  MÉDIA |
|RNF-04| Criar uma interface de usuário de fácil compreensão e utilizaçãos |  MÉDIA |



## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o começo de julho   |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| Desconhecimento dos integrantes do grupo sobre a linguagem e o ambiente de programação |





