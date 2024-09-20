const express = require('express');
const app = express();

// Servir archivos estáticos (CSS, imágenes)
app.use(express.static('public'));



// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');

// Rutas del portafolio
app.get('/Portafolio/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    res.render('index', { nombre: nombre });
});

app.get('/Portafolio/:nombre/habilidades', (req, res) => {
    res.render('habilidades', { nombre: req.params.nombre });
});

app.get('/Portafolio/:nombre/experiencia', (req, res) => {
    res.render('experiencia', { nombre: req.params.nombre });
});

// Iniciar el servidor
app.listen(80, () => {
    console.log('Servidor ejecutándose en http://localhost:3000');
});
