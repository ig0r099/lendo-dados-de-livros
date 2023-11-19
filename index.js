const express = require ("express")
const exphbs = require("express-handlebars")
const mysql = require("mysql")

const app = express()

app.engine("handlebars", exphs.emgine())
app.set("view engine", "handlebars")

app.use(express.static("public"))

app.use(express.urlencoded({
    extended: true
}))



app.use(express.json())

app.post("/edit/save", (request, response) => {
    const { id, title, pageqty} = request.body

const sql = `
    UPDATE books
    SET title = '${title}', pageqty = '${pageqty}'
    WHERE id = ${id}
    
    `
    conn.query(sql, (error) => {
        if (error){
            return console.log(error)
        }

        response.redirect("/")
    })
})

app.post("/register/save", (request, response) => {
   const { title, pageqty } =request.body
})

app.get("/register", (requet, response) => {
    response.render("register")

    const query = `
        INSERT INTO books (titli, pageqty)
        VALUES("${title}", "${pageqty}")
    
    `
    conn.query(query, (error) =>{
        if (erro){
            console.log(error)
            return
        }

        response.radirect("/")


    })
})
app.get("/edit/id", (request, response) =>{
    const id = request.params.id

    const sql =`
        SELECT * FROM books
        WHERE id = ${id}

    `
    conn.query(sql, (error, data) =>{
        if (error){
            return console.log(error)
        }
        const book = data[0]

        response.render('edit', { book })
    })
})

app.get("/book/:id", (request, response) => {
    const id = request.params.id

    const sql = `
        SELECT * FROM books
        WHERE id=${id}
        `

        conn.query(sql, (error, data) => {
            if (error) {
                return console.log(error)
            }
            const book = data[0]

            response.render("book", { book })
        })
})

app.get("/", (request, response) => {
    const sql = 'SELECT FROM books'

    conn.query(sql, (error, data) => {
        if (error){
            return console.log(error)
        }

        const books = data 
        
    })


    response.reder("home", {books})
})

const conn = mysql.createConnection({
    
    host: "localhost",
    user: "root",
    password: "root",
    database: "nodemysql",
    port: 3306
})

conn.connect((error) => {
    if (error) {
        console.log(error)
       return
    }

    app.listen(3000, () =>{
            console.log("servidor rodando na porta 3000!")
        })})
