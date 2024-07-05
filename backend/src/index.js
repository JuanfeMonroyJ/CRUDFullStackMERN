require('dotenv').config()

const mongoose = require('mongoose');
const app = require('./app')
require('./database')

const port = process.env.PORT || 4000;

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));


//Esta lógica es para ejecutar el servidor
async function main() {
    await app.listen(app.get('port'))
    console.log('el servidor se esta ejecutando en el puerto: ', app.get('port'));
}

main();
