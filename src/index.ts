import express, {type Request, type Response} from 'express';
const app = express()
const port = process.env.PORT || 3000

const products = [{title: 'tomato'}, {title: 'orange'}]
const addresses = [{value: 'Nezalejnosti 17'}, {value: 'Salickaga11'}]

app.get('/', (req: Request, res: Response) => {
    let helloMessage = 'Hello IT-INCUBATOR.EU';
    res.send(helloMessage)
})
app.get('/products', (req: Request, res: Response) => {
    res.send(products)
})
app.get('/products/tomato', (req: Request, res: Response) => {
    let tomato = products.find(p => p.title === 'tomato');
    res.send(tomato)
})
app.get('/addresses', (req: Request, res: Response) => {
    res.send(addresses)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
