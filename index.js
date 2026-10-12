import express from 'express';

const app = express();
app.use(express.json());
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/tasks', (req, res) => {
    res.json([
        {
            name: "Olivers task",
            task: "To show Layton express.js"
        }
    ]);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
