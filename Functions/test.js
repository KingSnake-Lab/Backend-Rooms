const connection = require('../SQL_CONECTION');

function test(req, res) {
    connection.query('SELECT * FROM alertas', (error, results) => {
        if (error) {
            console.error('Error al ejecutar la consulta:', error);
            res.status(500).send('Error en el servidor');
        } else {
            console.log(results);
            res.json(results);
        }
    });
}

module.exports = {
    test
}