import {Dialect} from 'sequelize';

export default {
  host: 'localhost',
  port: 3306,
  dialect: <Dialect>'mysql',
  username: 'root',
  password: 'cavalodetroia',
  database: 'ifood',
  logging: true
}
// docker run --name ifoodDB -e POSTGRES_PASSWORD=semente -d -p 5432:5432 postgres