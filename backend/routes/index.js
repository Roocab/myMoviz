var express = require('express');
var router = express.Router();



const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.OWM_API_KEY}`
    }
};

router.get('/movies', (req, res) => {
    fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
        .then(response => response.json())
        .then(data => {
            res.json({ movies: data.results });
        });
});

// const data = {
//     firstname: "John",
//     lastname: "Doe"

// }
// fetch('http://localhost:3000/save', {

//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(data)

// })
//  .then(response => response.json())
//  .then(data => {
//    console.log(data);
//  });

module.exports = router;
