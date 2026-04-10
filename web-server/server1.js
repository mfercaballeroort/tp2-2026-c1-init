import express from 'express';

const PORT = 3000;

const app = express();

const inventors = [
  { _id: 1, first: "Albert", last: "Einstein", year: 1879 },
  { _id: 2, first: "Isaac", last: "Newton", year: 1643 },
  { _id: 3, first: "Galileo", last: "Galilei", year: 1564 },
  { _id: 4, first: "Marie", last: "Curie", year: 1867 },
  { _id: 5, first: "Johannes", last: "Kepler", year: 1571 },
  { _id: 6, first: "Nicolaus", last: "Copernicus", year: 1473 },
  { _id: 7, first: "Max", last: "Planck", year: 1858 },
];

app.get('/', (req, res) => {
    res.send('Hola, mundo!');
});

app.get('/api/inventors', (req, res) => {
    res.json(inventors);
});

app.get('/api/inventors/:id', (req, res) => {
    const id = parseInt(req.params.id);
    res.json(inventors.find(inventor => inventor._id === id));
});

app.use(express.json()); // Middleware para parsear JSON Pendiente de explicación
app.post('/api/inventors', (req, res) => {
    const newInventor = {
        _id: inventors.length + 1, // temporal, porque no tenemos una base de datos
        first: req.body.first,
        last: req.body.last,
        year: parseInt(req.body.year)
    };
    inventors.push(newInventor);
    res.json(newInventor);
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});