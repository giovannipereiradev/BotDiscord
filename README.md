# Bot Tutorial Discord
 Este bot é simples, fizemos para aqueles que não tem condições de comprar um BOT  ou não tem conhecimento em programação para criar um.

 Desenvolvido em nome da Royal Store ® (https://discord.gg/QSnrfYkMAA)

# Recomendações importantes!
 Se pretende aprender a criar seus próprios bots para o discord, vocês precisam estudar! Nenhum conhecimento é adquirido por milagre, requer muito tempo de dedicação, esforso e principalmente força de vontade!
 
 Esse bot será desenvolvido em Node.js, que usa a linguagem JavaScript, existem outras linguagens para criação de bots mas a que usaremos nesse projeto será o JavaScript!
 
 Abaixo vou recomendar uma playlist de aulas de JavaScript patrocinada pelo Google para dar início a sua jornada de aprendizagem.
 
 Aulas de JS : https://youtube.com/playlist?list=PLntvgXM11X6pi7mW0O4ZmfUI1xDSIbmTm
 
 # Criando seu primeiro BOT
   Para criar seu primeiro bot vamos acessar o site https://discord.com/developers/applications/ é nesse site que criaremos o nosso BOT.
   
   Criando seu time:
   1) Clique em "Teams"; https://prnt.sc/1i7xhie
   2) Cliquem em "New Team"; https://prnt.sc/1i7xn0e
   3) Escolha um nome pro seu time; https://prnt.sc/1i7xuns
   4) Escolha uma imagem para seu time; (OPCIONAL) https://prnt.sc/1i7ycfm
   5) Clique em "Save Changes"; https://prnt.sc/1i7yo4d

   ATENÇÃO: CRIAR ESSE TIME É MUITO IMPORTANTE PARA MANTER A INTEGRIDADE DA SUA CONTA DO DISCORD! ASSIM QUALQUE POSSÍVEL PUNIÇÃO DE RATE LIMIT QUE SEU BOT TOME NÃO IRÁ AFETAR SUA CONTA DO DISCORD!
   
   Criando seu BOT:
   1) Volte ao site https://discord.com/developers/applications/;
   2) Clique em "New Application"; https://prnt.sc/1i7wd64
   3) Escolha um nome para seu BOT e selecione o time criado anteriormente e clique em "Create"; https://prnt.sc/1i7zmmw
   4) Escolha uma foto para o seu bot e escreva um descrição para ele; (Essas informações irão aparecer para todos) https://prnt.sc/1i80j75
   5) Clique em "Save Changes"; https://prnt.sc/1i80yv4

   Configurando seu BOT:
   1) Cliquem em "Bot"; https://prnt.sc/1i81ta9
   2) Cliquem em "Add Bot"; https://prnt.sc/1i81wnv
   3) Cliquem em "Yes, do it!"; https://prnt.sc/1i821g2 
   4) Depois disso arrastando a página para baixo encontrará algumas caixas de opções; 
   5) Ative as opções "PRESENCE INTENT" e "SERVER MEMBERS INTENT", a opção "PUBLIC BOT" é opcional deixar ele ativa, se ela estiver ativa qualquer pessoa pode add seu BOT em qualquer servidor que ele tenha permissão; https://prnt.sc/1i82x5q
   6) Cliquem em "Save Changes" https://prnt.sc/1i846ve
   
   Pronto! Criámos e configuramos o seu primeiro BOT!
   
   Agora precisamos pegar o TOKEN dele, para podermos colocar nos arquivos do nosso bot para ele funcionar!
   
   ATENÇÃO: O TOKEN DO SEU BOT É TOTALMENTE SECRETO, NUNCA PASSE ESSE TOKEN PARA NINGUÉM E NÃO POSTE EM LUGAR NENHUM! QUEM TIVER ACESSO AO SEU TOKEN TEM ACESSO COMPLETO AO SEU BOT E TODOS OS SERVIDORES QUE ELE ESTIVER PRESENTE!
   
   Como conseguir o TOKEN do seu BOT;
   1) Volte novamente ao site https://discord.com/developers/applications/;
   2) Cliquem em cima da imagem do seu BOT; https://prnt.sc/1i86a5e
   3) Cliquem em "Bot"; https://prnt.sc/1i81ta9
   4) Cliquem em "Copy"; https://prnt.sc/1i86ne2

   Pronto! Agora temos o BOT configurado e já temos o TOKEN em mãos!
   
# Intalando ferramentas para editar e mexer nos códigos do BOT
   Instale o Vs Code 2 e o Node.js
   - Link de intalação Vs Code: https://code.visualstudio.com/
   - Link de intalação Node.js: https://nodejs.org/en/download/

# Download arquivos do BOT
   Para instalar o arquivo do bot base (.zip) siga as instruções:
   1) Va para o site https://github.com/GiPeTa/BotDiscord;
   2) Clique em "Code"; https://prnt.sc/1jx18t3
   3) Cliquem em "Download ZIP"; https://prnt.sc/1jx1cgw
   4) Arraste o download para sua área de trabalho;
   
   Windows:
   1) Clique com o botão direito em cima do arquivo;
   2) Clique em "Extrair aqui";

   MacOs:
   1) Clique no arquivo download;
   2) Coloque a pasta descompactada na sua área de trabalho;
   
# Editando BOT
   1) Renomeie a pasta para o nome do seu bot (Exemplo: TutorialBot) PS: O NOME DA PASTA NÃO PODE CONTER CARACTERES EXPECIAIS, "Ç", e EMOJIS;
   2) Abra o aplicativo do VS Code;
   3) Faça os primeiros passos do aplicatico;
   4) Faça o download da linguagem JavaScript no VS Code; https://prnt.sc/1jx6px7
   5) Clique em "Abrir pasta..."; https://prnt.sc/1jx7mjk
   6) Selecione a pasta do bot (A pasta que trocamos o nome);
   
   Pronto! Agora ja estamos com a pasta origem do nosso bot aberto no VS Code!
   
# Editando arquivos do BOT
   1) Abra o arquivo "config.json" no VS Code;
   2) Edite as informações necessárias, o arquivo deve ficar assim (https://prnt.sc/1jxjbo5);
   3) Abra o arquivo "ready.js" no VS Code;
   4) Edite as frases do status do bot;
   
   Pronto! Nosso BOT já está pronto para ser ligado!
   
# Ligando nosso BOT
   1) Clique em "Terminal";
   2) Clique em "Novo terminal"; https://prnt.sc/1jxlf6l
   3) Digite "npm init" no terminal; https://prnt.sc/1jxm668
   4) Digite "npm i -s discord.js fs moment@2.29.1"; https://prnt.sc/1jxojur
   5) Espere a instalação das bibliotecas
   6) Digite "node ." no terminal; https://prnt.sc/1jxp3pp
   
   Pronto! Seu BOT está online!
   
# Hospedando o BOT
   Recomendamos que hospedem seu bot na Discloud (https://discloudbot.com/), existem planos pagos e planos gratuitos, obviamente os planos pagos são melhores, mas para pequenos BOTS o plano grátis é suficiente.
