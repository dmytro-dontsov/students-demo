import express, {type Request, type Response} from 'express';
const app = express()
const port = process.env.PORT || 3000

const products = [{id: 1, title: 'tomato'}, {id: 2, title: 'orange'}]
const addresses = [{id: 1, value: 'Nezalejnosti 17'}, {id: 2, value: 'Salickaga11'}]

app.get('/', (req: Request, res: Response) => {
    let helloMessage = 'Hello IT-INCUBATOR.EU';
    res.send(helloMessage)
})
app.get('/products', (req: Request, res: Response) => {
    if (req.query.title) {
        res.send(products.filter(p => p.title.indexOf(<string>req.query.title) > -1))
    } else {
        res.send(products)
    }
})
app.get('/products/:id', (req: Request, res: Response) => {
    // @ts-ignore
    let product = products.find(p => p.id === +req.params.id);
    if (product) {
        res.send(product)
    } else {
        res.status(404).send('Not Found')
    }
})
app.delete('/products/:id', (req: Request, res: Response) => {
    for (let i= 0; i < products.length; i++) {
        // @ts-ignore
        if (products[i].id === +req.params.id) {
            products.splice(i, 1);
            res.status(204).send()
            return;
        }
    }
    res.status(404).send('Not Found')
})
app.get('/addresses', (req: Request, res: Response) => {
    res.send(addresses)
})
app.get('/addresses/:id', (req: Request, res: Response) => {
    // @ts-ignore
    let address = addresses.find(p => p.id === +req.params.id);
    if (address) {
        res.send(address)
    } else {
        res.status(404).send('Not Found')
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
