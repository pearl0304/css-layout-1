import express from 'express';
import data from './database/data.js'

const app = express();
const PORT = 3000

app.set('views', 'views');
app.set('view engine', 'ejs')

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', {
    data: JSON.stringify(data),
  })
})

app.listen(PORT, () =>
    console.log(`http://localhost:${PORT}`),
);