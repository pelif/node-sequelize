# Consumindo bancos relacionais com Nodejs e Sequelize

Este repositório é resultado de alguns estudos meus sobre o entendimento do 
ORM Sequelize. O Sequelize permite consumo de banco de dados relacionais com o NodeJs. Para tê-lo funcionando é necessário ter o nodejs instalado, bem como o express e sequelize. Para isto, basta cloná-lo com o comando abaixo: 

git clone https://github.com/pelif/node-sequelize 

Após isto, na raiz do projeto basta digitar **npm install**, o npm vai instalar todas as libs presentes no arquivo package.json. 

Para poder rodá-lo no servidor web do node, basta digitar **npm start** na raíz do projeto. Pois o mesmo está com o lib babel instalada. Esta lib transpila o código para ES6 e ES5. Mas primeiro é preciso ter configurado a conexão com o mysql, conforme próximo item abaixo.

A sintaxe do projeto está utilizando o ES6. 

### Conexão do NodeJs com o Mysql

Para poder me conectar com o mysql, utilizei localmente um container docker com o mysql 5.7. Caso queira usar a mesma versão, tendo o docker instalado na sua máquina digite no terminal (levando em conta ambiente linux): 

**docker run --name mysql57 -e MYSQL_ROOT_PASSWORD=sua_senha_root -v /home/seu_usuario/seu_diretorio:/var/lib/mysql -d mysql:5.7**

Tendo rodado este comando o docker vai baixar a imagem referente ao mysql 5.7 e vai subir um container com o mysql-server rodando na porta 3306. Localmente, para mim, o container subiu com o ip 172.17.0.3. Basta configurar o ip do seu container no arquivo src/model/index.js que está na raíz do projeto. Também é preciso observar que é preciso ter o mysql-client instalado localmente na sua máquina. 

### Rodando o projeto

Após configurar a conexão e rodar o projeto com o comando npm start. Basta acessá-lo no endereço **localhost:3000**, a roda index default estará funcionando. 

