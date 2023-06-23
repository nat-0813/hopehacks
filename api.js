// const fs = require("fs");
// const express = require("express");
// const app = express();
// const axios = require('axios');
// // const https = require("https");
// const bodyParser = require("body-parser");
// const port = 9000;
// app.listen(port, () => {
//     console.log(`App is running on port ${port}...`);
// });
// app.set('view engine', 'js');
// app.use(express.static('/'));
// app.use(bodyParser.urlencoded({ extended: true }));


// app.post('/', async (req, res) => {
//     const education = req.body.education;
//     const options = {
//       method: 'GET',
//       url: 'https://google-search72.p.rapidapi.com/search',
//       params: {
//         q: 'word cup',
//         gl: 'us',
//         lr: 'lang_en',
//         num: '10',
//         start: '0'
//       },
//       headers: {
//         'X-RapidAPI-Key': '6c097732b3msh0e449dff7fd3753p1dc597jsn4bdefd6b7870',
//         'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
//       }
//     };
      
//       try {
//           const response = await axios.request(options);
//           console.log(response.data);
//       } catch (error) {
//           console.error(error);
//       }

//     try {
//       const response = await axios.request(options);
//       const search = response.data.text;
//       res.status(200).render('index', { search }); // Update the render statement
//   } catch (error) {
//       console.error(error);
//       res.status(500).send('Error retrieving data from the API.');
//   }
//   });
// // get requests from html to server
// app.get('/', (req, res) => {
//     res.status(200).sendFile(__dirname + '/api.html');
    

   

// });

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '04a7b63742mshe31a0e0ebbb49f8p1cd7ebjsn812e3735989f',
		'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
	}
};



const userInput = document.querySelector('input');
const btn = document.querySelector('button');

let params = ''
const callParams = () => {
    params = userInput.value
    fetch(`https://youtube-search-results.p.rapidapi.com/youtube-search/?q=${params}`, options)
        .then(response => response.json())
        .then(data => {
            let output = '';
            data.items.map(item => {
                output += `
                    <h1>${item.title}</h1>
                    <li>
                    <a href="${item.url}">${item.url}</a>
                    </li>
                    `;
            })
            document.querySelector('.result').innerHTML = output;
        })
        .catch(err => console.error(err));
    userInput.value = '';
}




btn.addEventListener('click', callParams)