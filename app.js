const input =document.getElementById('input');
const premiered = document.getElementById('premiered');
const genre = document.getElementById('genre');
const network = document.getElementById('network');
const country = document.getElementById('country');
const tvShowName = document.getElementById('show-title');

const imageDiv = document.getElementById('image');
const imageTag = document.createElement('img');
  imageTag.id = "image-tag";


async function getTVShowData (){

  const response = await fetch(`http://api.tvmaze.com/singlesearch/shows?q=${input.value}`);
  
  const data = await response.json();

  const imageId = data.id;
  
  const imagesResponse = await fetch(`https://api.tvmaze.com/shows/${imageId}/images`);
  const imageData = await imagesResponse.json();
  
  for (let i = 0; i < imageData.length-1; i++) {
    console.log(imageData[i].resolutions.medium.url);
    imageTag.src = imageData[1].resolutions.medium.url;
    //make images appear one after the other
    imageDiv.appendChild(imageTag);
  }


  premiered.innerHTML = data.premiered;
  genre.innerHTML = data.genres;
  network.innerHTML = data.network.name;
  country.innerHTML = data.network.country.name;
  tvShowName.innerText = data.name;

}

input.addEventListener('input',getTVShowData);

// `https://api.tvmaze.com/shows/id/images`

















