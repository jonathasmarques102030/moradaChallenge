import * as express from 'express'
import saqueRoutes from './routes/withdrawRoutes';

const app = express()
const port = 3000

app.use(express.json())

app.use('/api', saqueRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}.`)
})