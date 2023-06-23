// 'use strict';

// const searchForm = document.getElementById('searchForm');
// const searchInput = document.getElementById('searchInput');
// const dataContainer = document.getElementById('dataContainer');

// searchForm.addEventListener('submit', async (e) => {
//   e.preventDefault();
//   const searchQuery = searchInput.value;
//   const apiUrl = `https://google-search72.p.rapidapi.com/search`

//   try {
//     const response = await fetch(apiUrl, {
//       headers: {
//         'X-RapidAPI-Key': '6c097732b3msh0e449dff7fd3753p1dc597jsn4bdefd6b7870',
//     'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
//       }
//     });
//     const data = await response.json();
//     populateData(data);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// });

// function populateData(data) {
//   dataContainer.innerHTML = '';

//   if (data.length === 0) {
//     dataContainer.textContent = 'No results found.';
//     return;
//   }

//   data.forEach((item) => {
//     const div = document.createElement('div');
//     const editButton = document.createElement('button');
//     const deleteButton = document.createElement('button');

//     div.textContent = `Name: ${item.name}, Description: ${item.description}`;
//     editButton.textContent = 'Edit';
//     deleteButton.textContent = 'Delete';

//     editButton.addEventListener('click', () => {
//       // Handle edit functionality
//       console.log('Editing:', item);
//     });

//     deleteButton.addEventListener('click', () => {
//       // Handle delete functionality
//       console.log('Deleting:', item);
//     });

//     div.appendChild(editButton);
//     div.appendChild(deleteButton);
//     dataContainer.appendChild(div);
//   });
// }


