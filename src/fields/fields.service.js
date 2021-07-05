const knex = require("../db/connection");

const tableName = "fields"

function create(data) {
    return knex(tableName).insert({ data }, "*");
}

module.exports = {
    create,
};