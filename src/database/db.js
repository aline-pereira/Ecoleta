//importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

// criar o objeto que irá fazer operações no banco de dados
//dentro do método database passa uma propriedade para dentro e ele entende que deve criar um banco de dados nesse caminho
const db = new sqlite3.Database("./src/database/database.db")

//exportar o objeto
module.exports = db

//utilizar o objeto de banco de dados para operações
//db.serialize(() => {

    //com comando sql vou:
    //criar uma tabela com as colunas de campos dentro
    // com a crase consigo quebrar linhas sem estragar o código, com as aspas não
//     db.run(`
//      CREATE TABLE IF NOT EXISTS places (
//          id INTEGER PRIMARY KEY AUTOINCREMENT,
//          image TEXT,
//          name TEXT,
//          adress TEXT,
//          adress2 TEXT,
//          state TEXT,
//          city TEXT,
//          items TEXT
//      );
//  `)

//     //inserir dados na tabela
//     const query = `
//     INSERT INTO places (
//       image,
//       name,
//       adress,
//       adress2,
//       state,
//       city,
//       items
//   ) VALUES (?,?,?,?,?,?,?);`

//     const values = [
//         "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
//         "Papersider",
//         "Guilherme Gemballa, Jardim América",
//         "N° 260",
//         "Santa Catarina",
//         "Rio Sul",
//         "Resíduos Eletrônicos e Lâmpadas"
//     ]

//     function afterInsertData(err) {
//         if (err) {
//             return console.log(err)
//         }

//         console.log("Cadastrado com sucesso")
//         console.log(this)
//     }

//     db.run(query, values, afterInsertData)


    //3 consultar dados da tabela
    // db.all(`SELECT * FROM places`, function (err, rows) {
    //     if (err) {
    //         return console.log(err)
    //     }
    //     console.log("Aqui estão seus registros")
    //     console.log(rows)
    // })


    //4 deletar um dado da tabela
//      db.run(`DELETE FROM places WHERE id = ?`, [1], function (err) {
//          if (err) {
//              return console.log(err)
//          }

//          console.log("Registro deletado com sucesso")
//      })


// })