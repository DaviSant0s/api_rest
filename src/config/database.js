/**
 * Aqui vamos fazer as configurações das bases de dados, onde vamos
 * passar usuário, senha, host, dealeto que vamos utilizar (mariadb),
 * enfim, algumas coisas assim.
 */

require('dotenv').config();

module.exports = {
  dialect: 'mariadb',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_POST,
  username: process.env.DATABASE_USERNAME,
  database: process.env.DATABASE,

  /**
   *  Vamos criar um campo, onde ele vai usar esses campos pra falar quando foi
   * criado um registro na tabela e quando um registro foi atualizado naquela tabela.
   * Isso é útil pra saber a data de criação e atualização do registro.
   */
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },

  dialectOption: {
    timezone: 'America/Sao_Paulo',
  },

  timezone: 'America/Sao_Paulo',
};
