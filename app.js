const express = require('express');
const info = require('./info');
//needs package.json
const app = express();

//mov short for movie, con short for country, vote short for avg_vote (movie rating)
app.get('/movie' , (req,res) => {
    console.log('message')
    let film = req.query.film;
    console.log('film');
    let movieGenre = info.filter(
        mov => {
            if(mov.genre === movieGenre) {
                return mov;
            }})
    let movieCountry = movieGenre.filter(
        con => {
            if(con.country === movieCountry) {
                return con;
            }
        }
    
    )
    let movieVote = movieCountry.filter(
        vote => {
            if(vote.avg_vote === movieVote) {
                return vote;
            }
        }
    
    )
    console.log(app)
return res.status(200).json(movieVote);
        }
    )
    app.listen(8080 , ()=> {
        console.log("Running on port 8080");
    });
module.exports= app;