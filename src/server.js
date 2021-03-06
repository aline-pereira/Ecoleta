const express = require("express")
const server = express()

//pegar o banco de dados
const db = require("./database/db.js")

// configurar pasta public
//configura pasta public para que apareça o styles, main etc
server.use(express.static("public"))


//habilitar o uso do req.body
server.use(express.urlencoded({extended: true}))

//utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

// configurar caminhos da aplicação
// página inicial
// req: requisição/pepido
// res: resposta
server.get("/", (req, res) => {
    return res.render("index.html", { title: "Seu marketplace de coleta de resíduos" })
})

//criar rotas para as outras páginas
server.get("/create-point", (req, res) => {

    //req.query: são o Query Strings da nossa url
    //console.log(req.query)


    return res.render("create-point.html")
})



server.post("/savepoint", (req, res) => {

    //req.body: são o corpo do nosso formulário
    //console.log(req.body)


    //inserir dados no banco de dados
     const query = `
     INSERT INTO places (
       image,
       name,
       adress,
       adress2,
       state,
       city,
       items
   ) VALUES (?,?,?,?,?,?,?);`

     const values = [
        req.body.image,
        req.body.name,
        req.body.adress,
        req.body.adress2,
        req.body.state,
        req.body.city,
        req.body.items
     ]

     function afterInsertData(err) {
         if (err) {
            console.log(err)
            return res.send("Erro no cadastro!")
         }

         console.log("Cadastrado com sucesso")
         console.log(this)

         return  res.render("create-point.html", {saved: true})
     }

     db.run(query, values, afterInsertData)

})



server.get("/search-results", (req, res) => {

    const search = req.query.search

    if(search == "") {
        //pesquisa vazia
        return res.render("search-results.html", {total: 0})
    }

    //Pegar os dados do banco de daddos
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function (err, rows) {
        if (err) {
            return console.log(err)
        }

        const total = rows.length

        //mostrar a página html com os dados do banco de dados
        return res.render("search-results.html", { places: rows, total: total })
    })


})



//ligar o servidor
server.listen(3000)