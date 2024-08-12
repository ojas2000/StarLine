function home() {
  window.location.href = "/";
}

document.addEventListener("DOMContentLoaded", () => {
  const filename = window.location.pathname.split('/').pop(); 
    const type = filename.split('.')[0]; 
  fetch('/entries.json')
    .then(response => response.json())
    .then(data => {
    
      const opinionEntries = data.journal_entries.filter(entry => entry.type === type);
      displayOpinionEntries(opinionEntries);
    })
    .catch(error => console.error('Error loading JSON data:', error));

    
});

function displayOpinionEntries(entries) {
  const container = document.getElementById('contain');
  var description = getQueryParam('description');

}

delay(350).then(() => {
var hearts = document.querySelectorAll(".fn_stats");
  console.log(hearts);

  hearts.forEach(function(heart) {
    heart.addEventListener("click", function() {
      var heartIcon = heart.getElementsByClassName("heart")[0];
      var likesElement = heart.getElementsByClassName("fn_hearts")[0];
      var likes = parseInt(likesElement.innerHTML);
  
      if (heartIcon.classList.toggle("is-active")) {
        likesElement.innerHTML = (likes + 1);
      } else {
        likesElement.innerHTML = (likes - 1);
      }
    });
  });
});

function getQueryParam(param) {
  var urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

var averageReadingSpeed = 225; 

function estimateReadingTime(content) {
  var words = content.split(/\s+/).length;
  var readingTimeMinutes = Math.ceil(words / averageReadingSpeed); 
  if(readingTimeMinutes <= 1)
    return readingTimeMinutes + " minute";
  else
    return readingTimeMinutes + " minute";
}

