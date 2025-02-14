//Import express module
const express = require('express');
const app = express();

app.use(express.json());// Middleware to parse JSON data

// sample user data
let users = [
    
];

// GET all users
app.get('/users', (req, res) => {
    res.json(users); // Fixed from res.join(users) to res.json(users)
})

// Post  - Add a new user
app.post('/users', (req, res) => {
    const newUser = { id: users.length + 1, ...req.body };
    users.push(newUser);
    res.status(201).json(newUser);  // Added response after adding a new user
});

// PUT - Update a user
app.put('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: "User not found"});

        user.name = req.body.name || user.name; // Fixed incorrect property reference
        user.email = req.body.email || user.email; // Fixed incorrect property reference

        res.json(user); // Fixed from res.join(user) to res.json(user)
});

//DELETE - Remove a user
app.delete('/users/:id', (req, res) => {
         users = users.filter(user => user.id !== parseInt(req.params.id));
    res.json({ message: 'User Deleted' }); // Fixed from res.join(...)
    });

    // Start the server
    app.listen(8000, () => console.log("Server is running on port 8000"))
     