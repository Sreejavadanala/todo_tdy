const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

let todos = [];

app.get('/api/todos', (req, res) => {
    res.json(todos);
});

app.post('/api/todos', (req, res) => {
    const newTodo = req.body;
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
