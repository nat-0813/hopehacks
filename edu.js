'use strict';

const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const dataContainer = document.getElementById('dataContainer');

searchForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const searchQuery = searchInput.value;
  const apiUrl = `https://greeningschools-uskzqsuua3.p.rapidapi.com/search?query=${searchQuery}`;

  try {
    const response = await fetch(apiUrl, {
      headers: {
        'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY',
        'X-RapidAPI-Host': 'greeningschools-uskzqsuua3.p.rapidapi.com'
      }
    });
    const data = await response.json();
    populateData(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});

function populateData(data) {
  dataContainer.innerHTML = '';

  if (data.length === 0) {
    dataContainer.textContent = 'No results found.';
    return;
  }

  data.forEach((item) => {
    const div = document.createElement('div');
    const editButton = document.createElement('button');
    const deleteButton = document.createElement('button');

    div.textContent = `Name: ${item.name}, Description: ${item.description}`;
    editButton.textContent = 'Edit';
    deleteButton.textContent = 'Delete';

    editButton.addEventListener('click', () => {
      // Handle edit functionality
      console.log('Editing:', item);
    });

    deleteButton.addEventListener('click', () => {
      // Handle delete functionality
      console.log('Deleting:', item);
    });

    div.appendChild(editButton);
    div.appendChild(deleteButton);
    dataContainer.appendChild(div);
  });
}


const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const https = require('https');

app.use(bodyParser.urlencoded({extended: true}))
app.get('/', (req,res) => { //// The root route ("/") is defined using app.get(). When a GET request is made to the root route, the server responds by sending the edu.html file
    res.sendFile(__dirname + '/edu.html');//pulling the API to the edu.html
})
