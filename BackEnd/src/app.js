const express = require('express');
const aiRoutes = require("./routes/ai.routes")
const app = express(); // We created an instance of server. We created the server, we didn't run the server. 
const cors = require('cors');



app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello World")
});

app.use('/ai', aiRoutes)  // Any request that comes to our server starts with "/ai" will be handled by aiRoutes. 

module.exports = app;