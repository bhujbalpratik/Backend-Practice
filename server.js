import express from "express";

import ejs from "ejs";

import SerRouter from "./router/services.js";

const HOSTNAME = "localhost";

const PORT = 5000;

const app = express();

app.set("view engine", "ejs");

app.set("views", "./view");

app.get('/', (req, res) => {
    res.render("index", {
        title: "Home Page"
    })
});

app.get('/about', (req, res) => {
    res.render("about", {
        title: "About Page"
    });
});

app.get('/contact', (req, res) => {
    res.render("contact", {
        title: "Contact Page"
    });
});

app.use('/services', SerRouter);

app.get('/login', (req, res) => {
    res.render("login", {
        title: "Login Page"
    });
});


app.listen(PORT, HOSTNAME, () => {
    console.log(`Server is Working On http://${HOSTNAME}:${PORT}`);
});
