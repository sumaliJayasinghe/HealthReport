# HealthReport

HealthReport is server application which provide RESTful API which communucate client application and backend database. This is build with Node JS, Express AND MySQL using Sequelize ORM. 

# Steps
1. run "npm install"
2. change credentials of ../app/config/config.json to connect your database
3. run "cd app"
4. run "../node_modules/.bin/sequelize db:migrate"

You may encounter with following error in terminal

"Sequelize CLI [Node: 6.14.1, CLI: 4.0.0, ORM: 4.37.6]

Loaded configuration file "config/config.json".
Using environment "development".
sequelize deprecated String based operators are now deprecated. Please use Symbol based operators for better security, read more at http://docs.sequelizejs.com/manual/tutorial/querying.html#operators ../node_modules/sequelize/lib/sequelize.js:242:13

ERROR: Client does not support authentication protocol requested by server; consider upgrading MySQL client"


solution:

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '{your password}';
SELECT plugin FROM mysql.user WHERE User = 'root';
