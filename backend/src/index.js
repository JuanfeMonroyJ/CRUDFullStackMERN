const app = require('./app')

//Esta lógica es para ejecutar el servidor
async function main() {
    await app.listen(app.get('port'))
    console.log('el servidor se esta ejecutando en el puerto: ', app.get('port'));
}

main();
