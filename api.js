const fs = require("fs");
const express = require("express");
const app = express();
const axios = require('axios');
const https = require("https");
const bodyParser = require("body-parser");
const port = 9000;
app.listen(port, () => {
    console.log(`App is running on port ${port}...`);
});
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/', async (req, res) => {
    const education = req.body.education;
    const options = {
        method: 'GET',
        url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI',
        params: {
          q: 'taylor swift',
          pageNumber: '1',
          pageSize: '10',
          autoCorrect: 'true'
        },
        headers: {
          'X-RapidAPI-Key': '6c097732b3msh0e449dff7fd3753p1dc597jsn4bdefd6b7870',
          'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
      } catch (error) {
          console.error(error);
      }

    try {
      const response = await axios.request(options);
      const ImageSearchAPI = response.data.text;
      res.status(200).render('home', { ImageSearchAPI }); // Update the render statement
  } catch (error) {
      console.error(error);
      res.status(500).send('Error retrieving data from the API.');
  }
  });
// get requests from html to server
app.get('/edu', (req, res) => {
    res.status(200).sendFile(__dirname + '/edu.html');
});
