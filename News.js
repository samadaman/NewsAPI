// async function NewsApi(){

//     const url = 'https://newsapi.org/v2/everything?q=india&apiKey=47b9446b32004c98aec85e67eae625b9'
//     const responce = await fetch(url);
//     const json = await responce.json();
//     const data = json;

//     const container = document.getElementById('container')
    
//         console.log(data.articles[0].content)
//         container.innerHTML = `
//         <h2>${data.articles[0].title}</h2>
     
//         <div class='flexClass'>
//         <p>${data.articles[0].author}</p>
//         <p>${data.articles[0].publishedAt}</p>
//         </div>  
//         <img class="img-fluid" src=" ${data.articles[0].urlToImage} ">
//         `
//     }



// NewsApi()

// Function to fetch data from API
// Function to fetch data from API
async function fetchNews() {
  const apiKey = '47b9446b32004c98aec85e67eae625b9';
  const response = await fetch(`https://newsapi.org/v2/everything?q=tech&apiKey=${apiKey}`);
  const data = await response.json();
  return data.articles;
}

// Function to display news in the HTML body
function displayNews(articles) {
  const newsListElement = document.getElementById('container');
  
  const newsHTML = articles.map(article =>
      `<div class="fetch">
          <h2>${article.title}</h2>
          <div class='flexClass'>
              <p class="author">${article.author}</p>
              <p class="atpub">${article.publishedAt}</p>
          </div>  
          <img class="img-fluid" src="${article.urlToImage}">
          <p class="heading">${article.description}</p>
       </div>`
  ).join('');
  
  newsListElement.innerHTML = newsHTML;
}

// Fetch data and display using map
async function fetchAndDisplayNews() {
  try {
      const articles = await fetchNews();
      displayNews(articles);
  } catch (error) {
      console.error('Error fetching or displaying news:', error);
  }
}

// Call the function to start fetching and displaying news
fetchAndDisplayNews();
