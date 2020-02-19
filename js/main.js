var source   = $("#excuses-template").html();
var template = Handlebars.compile(source);
var data1 = { excuse: [
{ id: "1", 
	title: "As pessoas vão interpretar mal os dados",
	answers: [ 
		{answer: "Acrescente documentação sobre como os dados devem ser lidos; além de notas técnicas, pequenos tutoriais podem ser muito úteis!"},
		{answer: "Prepare-se para ajudar e corrigir essas pessoas; aquelas que interpretarem mal sem querer vão ficar agradecidas pela ajuda;"},
		{answer: "Na verdade, publicar ativamente pode ser útil para fazer um contraponto a distorções intencionais (por exemplo, de dados obtidos via Lei de Acesso à Informação), pois é possível mencionar a base aberta online, refutar a interpretação equivocada e oferecer a possibilidade de outras pessoas interpretarem de forma diferente."}
	]
},
{	id: "2",
	title: "A base é grande demais", 
	answers: [
		{answer: "Provavelmente, não é tão grande quanto pensa (a menos que você esteja no CERN);"},
		{answer: "Os mantenedores dos dados provavelmente têm orgulho do tamanho da base de dados, então não ofenda tentando dizer que não é tão grande assim;"},
		{answer: "Considere subdividir por ano ou outro recorte e disponibilizar bases separadas."},
		{answer: "Pergunte se eles se importam que você faça alguns experimentos (e gentilmente mostre que é algo prático e possível de se fazer)."}
		
	]
},
{	id: "3",
	title: "As pessoas vão começar a ligar para perguntar coisas",
	answers: [
		{answer: "Geralmente, essa é uma objeção de pessoas que se sentem sobrecarregadas e acham que isso não faz parte de suas atribuições. Levar o assunto a um nível mais alto de gestão pode ajudar a identificar se isso vai ser útil ou, de fato, perda de tempo."},
		{answer: "Frequentemente acontece justo o contrário: as pessoas deixam de ter trabalho extraindo a mesma base de dados para setores diferentes mais de uma vez, ou responder individualmente a pedidos de informação."}
	]
},
{	id: "4",
	title: "Ninguém se interessa por esses dados",
	answers: [
		{answer: "Se você está em contato para demandar a abertura desses dados, provavelmente já vê interesse neles. Tente explicar o porquê."},
		{answer: "Procure ilustrar com um caso em que, integrados a outras bases, esses dados poderiam ser mais interessantes - um exemplo que já usei como argumento: a localização exata de cada poste de iluminação pode ser cruzada com os casos de violência contra a mulher, para verificar se há locais mal iluminados que podem estar correlacionados a esses eventos"},
		{answer: "Explique que há interesses que sequer podemos prever, e que é melhor que as pessoas decidam por si; no entanto, procure priorizar o que de fato tem alguma demanda identificada"},
		{answer: "Na Prefeitura de São Paulo, fizemos iniciativas como o Café Hacker e o plano de dados abertos colaborativo do Pátio Digital, na Educação <http://patiodigital.prefeitura.sp.gov.br/project/plano-dados/>, que são boas metodologias para captar e validar o interesse da sociedade pelos dados. No governo federal, além dos dois Encontros Nacionais de Dados Abertos, foi feita uma oficina temática para levantar as necessidades de uso dos dados <http://wiki.dados.gov.br/I-Oficina-tem%c3%a1tica-para-levantamento-de-necessidades-de-uso-de-dados.ashx>."},
		{answer: "Não raro, os dados são solicitados por meio de pedidos de informação ou serviços de atendimento ao cidadão e os técnicos não ficam sabendo; procure saber se é o caso e apresente os números"},
		{answer: "Às vezes, as pessoas podem não estar usando os dados porque não os encontram. Em vez de 'escondê-los' dentro da navegação do portal institucional do órgão, procure catalogá-los em um portal de dados abertos. Promova ações de divulgação do que já foi publicado."}
	]
},
{	id: "5",
	title: "Podemos utilizar os dados em uma publicação inédita nossa",
	answers: [
		{answer: "Já ouvi essa de um departamento que faz pesquisa. Existiria uma opção de fazer um embargo por determinado período, mas ela não seria compatível com a Lei de Acesso à Informação em nosso contexto. Essa não é uma das possibilidades de negativa de abertura previstas em lei."}
	]
},
{	id: "6",
	title: "Este sistema não possui uma API pública",
	answers: [
		{answer: "Mas uma API pública não é requisito para abertura - embora seja algo extremamente desejável."},
		{answer: "É possível extrair bases estáticas e criar uma rotina para transformá-las manual e periodicamente. Também é possível fazer scripts para automatizar esse processo"},
		{answer: "Como último recurso, é possível raspar os dados de uma página web pública"},
		{answer: "Fale com o mantenedor ou fornecedor do sistema; dados abertos estão na moda e pode ser interessante para eles embarcar nisso."}
	]
}
]};
var data2 = { excuse: [
{	id: "7",
	title: "Estamos preocupados com a tutela dos dados pessoais e sensíveis", 
	answers: [
		{answer: "A Lei Geral de Proteção de Dados (Lei n.º 13.709/2018) prevê a tutela do direito à privacidade somente das pessoas físicas, não das pessoas jurídicas (empresas, associações, fundações): portanto, se os dados (melhor: conjunto de dados) não contêm dados pessoais, sensíveis ou judiciários relativos a pessoas físicas, a LGPD não constitui um obstáculo à publicação. Em todo caso, o artigo 31 da Lei de Acesso à Informação (Lei n.º 12.527/2011) e a LGPD disciplinam o acesso à informação e a privacidade, introduzindo critérios que são de consideração geral (ex.: anonimização, definida no artigo 12 da LGPD) e constituir um guia para não incorrer em violações. "},
		{answer: "Se você está preocupado com a privacidade, pode, em todo caso, publicar aquilo que já estiver publicado de forma analógica (não legível por máquina, ex.: no diário oficial)."},
		{answer: "Elimine ou anonimize as strings que contenham dados pessoais."},
		{answer: "Peça aos titulares dos dados uma autorização explícita para publicar os dados que lhe dizem respeito, sempre dentro dos limites que forem impostos pela LGPD."}
	]
},
{	id: "8",
	title: "Não temos certeza se somos os titulares dos dados", 
	answers: [
		{answer: "Este é o problema do catálogo da biblioteca, frequentemente os metadados vêm de diversas fontes de aquisição que não permitem a livre republicação. Às vezes não é claro exatamente quais dados vêm de quais fontes, logo o dataset inteiro está corrompido."},
		{answer: "Há partes do mesmo que temos certeza? Podemos publicar essas partes."},
		{answer: "Se não somos os titulares, conhecemos os efetivos titulares?"},
		{answer: "Há outros dados dos quais temos certeza de que nós somos os titulares?"}
	]
},
{	id: "9",
	title: "Não tenho problemas em abrir os dados, mas estou preocupado que alguém possa se opor a algo", 
	answers: [
		{answer: "Esta é mais uma manobra de distração que um verdadeiro problema."},
		{answer: "Implica que a pessoa tem medo de ser acusada por ter cometido um erro."},
		{answer: "Procure entre os seus superiores alguém de nível suficiente para se assegurar de que não traga problemas."},
		{answer: "Procure um subconjunto dos dados menos controverso."}
	]
},
{	id: "10",
	title: "É muito complicado", 
	answers: [
		{answer: "Esta é uma questão similar a “é grande demais”."},
		{answer: "Não se aparentar satisfeito se vier à tona que não era tão complicado poderia comprometer as suas relações profissionais com os fornecedores dos dados"}
	]
},
{	id: "11",
	title: "Os nossos dados estão sujos de modo embaraçoso",
	answers: [
		{answer: "Muitos olhos o ajudam a melhorar os seus dados (por exemplo apontando imprecisões)."},
		{answer: "As pessoas aceitaram os seus dados pelo que eles são."},
		{answer: "Ofereça ajuda ao titular dos dados para limpá-los ou mantê-los melhor. Fornecendo um sistema que permita aos titulares gerirem melhor os seus dados, poderia lhes fazer um favor."},
		{answer: "Se puder reduzir os riscos, publicar dados abertos é um modo muito válido para motivar os fornecedores dos dados a limpá-los. Mas os dados devem estar visíveis, assim haverá necessidade de uma página web para mostrá-los, assim também o pessoal não técnico poderá vê-los (incluindo as suas inconsistências). Essa página é o local ideal para reafirmar o processo para fazer correções. Isto significará publicar inicialmente dados imperfeitos, mas será muito eficaz. Você pode mandar um e-mail anual às pessoas pedindo que melhorem os seus dados e elas não o farão. No momento em que descobrirem que eles estão visíveis ao público, baterão à sua porta pedindo para poder corrigi-los.."}
	]
},
{
	id: "12",
	title: "Não é uma prioridade e estamos muito ocupados",
	answers: [
		{answer: "Em que está ocupado? Em muitos casos podemos estar em condições de ajudar: por exemplo, se a gente ajudasse a obter os dados que já existem, poderíamos criar o mapa/relatório/instrumento que você precisa."}
	]
},
]};
var data3 = { excuse: [
{
	id: "13",
	title: "Não sou titular dos dados, portanto não posso te dar a permissão",
	answers: [
		{answer: "Responder a esta objeção às vezes pode ser tão simples quanto descobrir quem realmente possui os dados."},
		{answer: "Às vezes ninguém sabe quem é o titular dos dados. Isso parece acontecer frequentemente quando alguém ocupou um posto de trabalho recentemente e não está consciente de que se tornou o titular dos dados."},
		{answer: "Subir os níveis de quem tem a responsabilidade administrativa pode ajudar. Se puder encontrar alguém que evidentemente tenha a responsabilidade pela área à qual o dataset pertence, poderá te indicar o titular dos dados ou te dar diretamente a permissão para usá-los."},
		{answer: "Coloque-se em contato com alguém que esteja em um nível hierárquico muito alto que possa indicar alguém para tomar decisões sobre os dados aparentemente “órfãos”."},
		{answer: "Estimule a mesma pessoa a pesquisar os próprios dados e saber de quais ela é titular, por meio de um pedido de acesso à informação previsto na Lei n.º 12.527, de 18 de novembro de 2011, artigo 10."}
	]
},
{
	id: "14",
	title: "Não temos esses dados",
	answers: [
		{answer: "Às vezes os temos, mas não nos damos conta disso (“Não são dados, é só uma planilha...”)."},
		{answer: "Bem, que dados vocês têm para nós, em vez disso?"},
		{answer: "Temos uma obrigação ou uma solicitação para guardar esses dados e podemos lhes ajudar a começar."},
		{answer: "Mas estão no site de vocês..."},
		{answer: "... podem descobrir que têm uma base de dados que gerenciam"},
		{answer: "... ou os dados são gerenciados manualmente, caso em que poderia obtê-los por scraping, e até mesmo reimplementar o seu site sob um modelo baseado nos dados e tornar mais simples o seu trabalho."}
	]
},
{
	id: "15",
	title: "Os dados já estão publicados pela organização externa X",
	answers: [
		{answer: "Frequentemente as organizações externas não disponibilizam os dados sob uma licença aberta, limitando a sua utilidade às organizações interessadas. Nós os publicarmos de maneira independente implicará que poderemos fazer um uso completo dos dados."},
		{answer: "A auto publicação significa que podemos modelar de modo mais acurado os aspectos de maior interesse para nós."},
		{answer: "As imprecisões nos dados publicados podem ser corrigidas internamente, uma vez percebidas, levando mais acurácia aos dados (argumentação do “muitos olhos enxergam mais que poucos”)."},
		{answer: "Podemos obter esses dados da fonte externa e ligá-los com outros dados nossos? Se não for assim, há um problema."},
		{answer: "Podemos obter os mesmos dados que vocês forneceram à organização externa?"}
	]
},
{
	id: "16",
	title: "Não podemos fornecer esse conjunto de dados por causa de uma de suas partes",
	answers: [
		{answer: "Temos visto solicitações inteiras serem inicialmente negadas por causa de uma pequena parte que não estava disponível ou era controversa: isto não é mais possível porque pode-se recorrer argumentando o §2º do art. 6º da Lei 12.527/2011 “Quando não for autorizado acesso integral à informação por ser ela parcialmente sigilosa, é assegurado o acesso à parte não sigilosa por meio de certidão, extrato ou cópia com ocultação da parte sob sigilo."},
		{answer: "Além do processo formal de solicitação dos dados, mantenha-se em contato com as pessoas a cada etapa. A condição ideal seria por meio de um contato direto dado que uma mensagem por e-mail pode não ser eficaz para eliminar a confusão. Certifique-se do fato que se uma parte dos dados é complexa pode ser pulada (se pode tratar de uma situação bastante incomum)."}
	]
},
{
	id: "17",
	title: "O que acontece se algo der errado e a versão aberta dos dados se tornar obsoleta?",
	answers: [
		{answer: "Planeje de modo a prevenir que isto aconteça (por exemplo, monitorando que as atualizações temporais não sejam esparsas demais)."},
		{answer: "Se apropriado, acrescente um aviso aos dados para advertir que são fornecidos sem qualquer tipo de garantia."},
		{answer: "Integrar os dados abertos nos fluxos internos dos dados significa que as pessoas notarão quando os dados se tornem desatualizados, reduzindo a possibilidade que permaneçam assim, uma situação bastante incomum)."}
	]
},
{
	id: "18",
	title: "Não vemos o benefício",
	answers: [
		{answer: "Mostre exemplos de um trabalho similar que tenha trazido um retorno ao investimento a quem publicou os dados. "}
	]
},
{
	id: "19",
	title: "O que acontece se tivermos a intenção de vender o acesso a esses dados?",
	answers: [
		{answer: "Em alguns casos trata-se de uma preocupação válida, se vender dados faz parte do seu modelo de negócio."},
		{answer: "Para usar uma analogia, diz um ditado chinês que perderia muito se apressadamente decidisse dar a comida grátis, mas perderia também se não disponibilizasse o seu cardápio grátis. Um caminho do meio são as suas receitas, que poderiam constituir um segredo de certo valor, mas que são também de grande interesse para pessoas com intolerância alimentar. Se essas pessoas soubessem tudo de cada prato, poderiam preferir exatamente esse ditado."},
		{answer: "Ajude a saber se se trata de uma possibilidade real, ou só de uma aversão ao risco e, em cada caso, a verificar se se tratam de dados sujeitos à Lei 12.527/2011 e portanto gratuitos, sujeitos no máximo ao custo marginal (ou seja, ao mero custo de produção)."},
		{answer: "Ajude a identificar benefícios práticos derivados da abertura dos dados. E também se não houver, por que deveria se importar?"},
		{answer: "Se os custos da infraestrutura e o volume de acesso são tais que inviabilizaria o acesso gratuito totalmente ilimitado, considere a possibilidade de oferecer um acesso gratuito limitado até um certo volume de dados, como fazem as APIs de empresas como Twitter e Google, por exemplo. Nesse caso, os limites devem ser generosos o suficiente para permitir a experimentação, o aprendizado e a criação de análises e aplicações não comerciais sobre os dados."}
	]
},
{
	id: "20",
	title: "Se publicarmos esses dados, as pessoas poderão nos processar",
	answers: [
		{answer: "Se a preocupação é relativa à violação da privacidade, é suficiente adotar os critérios de tutela dos dados pessoais expostos nas questões anteriores."},
		{answer: "Se a preocupação é sobre outras questões, observe que, no estado atual, a lei italiana não prevê nexo de causalidade entre dados errados e a responsabilidade do publicador, sendo improvável uma causa de ressarcimento de danos, ainda que evitável por meio da colocação do disclaimer sobre a confiabilidade do dado."},
		{answer: "Assegure-se de poder declarar quais dados você forneceu para cada dia específico, por exemplo em casos em que alguém afirma não ter encontrado nos seus dados o hospital mais próximo e que em consequência disso alguém tenha morrido. É muito útil ser capaz de provar e mostrar quais dados se estava fornecendo em alguma data e hora."},
		{answer: "Se os dados já estão disponíveis no seu website ou por meio de um app, estaria realmente aumentando o risco ao abri-los?"}
	]
},
{
	id: "21",
	title: "Queremos que as pessoas venham diretamente a nós para conhecer o motivo pelo qual eles querem os dados",
	answers: [
		{answer: "Isso se assemelha a “as pessoas poderão interpretar mal os dados” se a intenção é ajudar as pessoas a satisfazer as suas necessidades de informação."},
		{answer: "Certo, mas pelo menos os metadados ou qualquer subconjunto dos dados podem ser abertos?"},
		{answer: "Se há a opção de abrir os dados, há possibilidade que a informação já esteja disponível segundo as normas em matéria de acesso aos dados cuja Lei de Acesso à Informação. Segundo o art. 8º, os dados são de publicação obrigatória em transparência ativa, e o solicitante não tem que justificar ou explicar as suas razões. Assim, em virtude do ___, esta é uma objeção ilegal, porque o seu artigo 10, §3º prevê que “são vedadas quaisquer exigências relativas aos motivos determinantes da solicitação de informações de interesse público”."},
		{answer: "Isto pode ser um aspecto delicado já que uma vez que você abrir os seus dados não será capaz de rastrear cada utilização. Isto pode ser um problema para as pessoas que produzem esses dados e não são capazes de fornecer uma prova documental que elas, ou a sua equipe, está fazendo alguma coisa de valor, especialmente em um momento em que as equipes vem sendo reduzidas. Uma opção é aquela de encontrar alguém capaz de garantir que os seu trabalho é valido e que a sua administração compreenda e aceite que quando os dados são abertos está se abrindo mão do controle em favor da utilidade."}
	]
}
]};

$("#bingo-col1").html(template(data1));
$("#bingo-col2").html(template(data2));
$("#bingo-col3").html(template(data3));



