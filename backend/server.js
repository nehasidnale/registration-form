const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const users = [
    { id: 1, name: 'Michael Holz', dateCreated: '04/10/2013', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Paula Wilson', dateCreated: '05/08/2014', role: 'Publisher', status: 'Active' },
    { id: 3, name: 'Antonio Moreno', dateCreated: '11/05/2015', role: 'Publisher', status: 'Suspended' },
    { id: 4, name: 'Mary Saveley', dateCreated: '06/09/2016', role: 'Reviewer', status: 'Active' },
    { id: 5, name: 'Martin Sommer', dateCreated: '12/08/2017', role: 'Moderator', status: 'Inactive' }
];

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Handle authentication logic here
    if (username === 'admin' && password === 'password') {
        res.status(200).send({ message: 'Login successful!' });
    } else {
        res.status(401).send({ message: 'Invalid credentials' });
    }
});

app.get('/users', (req, res) => {
    res.json(users);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
