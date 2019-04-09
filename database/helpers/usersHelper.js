const db = require('../dbConfig.js');

module.exports = {
    insert,
    remove,
    get,
    update
}

function insert(user){
    return db('users')
        .insert(user)
}

function remove(id){
    return db('users')
        .where({ id })
        .delete()
}

function get(){
    return db('users')
}

function update(id, updated){
    return db('users')
        .where({id})
        .update(updated)
}