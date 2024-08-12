function home() {
    window.location.href = "/";
}

document.addEventListener("DOMContentLoaded", () => {
    const filename = window.location.pathname.split('/').pop(); 
    const type = filename.split('.')[0]; 
    fetch(`/entries/type/${type}`)
      .then(response => response.json())
      .then(data => {
     
        const opinionEntries = data;
        displayOpinionEntries(opinionEntries);
      })
      .catch(error => console.error('Error loading JSON data:', error));

      
  });

  function displayOpinionEntries(entries) {
    const container = document.getElementById('contain');

    entries.forEach(entry => {
     
      const entryDiv = document.createElement('div');
      entryDiv.id = 'fn1';
      entryDiv.classList.add('fn', 'flex', 'column');

      
      const textDiv = document.createElement('div');
      textDiv.id = 'fn_text';
      textDiv.classList.add('flex');
      textDiv.onclick = function() {
        let str = entry.heading;
        window.location.href = '/journal/' + str.replace(/ /g, "-");
    };

      const imgDiv = document.createElement('div');
      imgDiv.id = 'img';
      if(entry.image != 'Nan'){
        imgDiv.style = `background-image: url(https://ojas2000.github.io/StarLineImages/${entry.image});`;
      }
      else{
        imgDiv.style = 'width:0vw!important;';
      }
      



      const t_tDiv = document.createElement('div');
      t_tDiv.classList.add('fn_t_t');

     
      const innerDiv = document.createElement('div');
      const writerDiv = document.createElement('div');
      const writerInfo = document.createElement('div');
      const writerInfo1  = document.createElement('div');
      const writerImg = document.createElement('img');
      const writer_time = document.createElement('div');
      writerImg.src = "/writer.png";
      writerInfo.classList.add('writerInfo', 'flex');
      writerImg.classList.add('writer_img');
      writerDiv.classList.add('fn_writer');
      writerInfo1.classList.add('flex','column','writerInfo1');
      writer_time.textContent = entry.date +" • "+ estimateReadingTime(entry.content);


      writerDiv.textContent = entry.writer;
      writerInfo1.append(writerDiv);
      writerInfo1.append(writer_time);
      writerInfo.append(writerImg);
      writerInfo.append(writerInfo1);
      

      const topicDiv = document.createElement('div');
      topicDiv.classList.add('fn_topic');
      topicDiv.textContent = entry.heading;

      const bodyDiv = document.createElement('div');
      bodyDiv.classList.add('fn_body');
      bodyDiv.textContent = entry.content_s;

      innerDiv.appendChild(writerInfo);
      innerDiv.appendChild(topicDiv);
      innerDiv.appendChild(bodyDiv);

      const statsDiv = document.createElement('div');
      statsDiv.classList.add('fn_stats', 'flex');

      const heartsDiv = document.createElement('div');
      heartsDiv.classList.add('hearts', 'flex');


      var stage = document.createElement("div");
      stage.className = "stage";
    
   
      var heart = document.createElement("div");
      heart.className = "heart";
    
 
      stage.appendChild(heart);


      const heartsCount = document.createElement('div');
      heartsCount.classList.add('fn_hearts');
      heartsCount.textContent = entry.likes;

      heartsDiv.appendChild(stage);
      heartsDiv.appendChild(heartsCount);

    
      const viewsDiv = document.createElement('div');
      viewsDiv.classList.add('views', 'flex');
      const viewsCount = document.createElement('div');
      viewsCount.classList.add('fn_views');
      viewsCount.textContent = `${entry.views} view${entry.views !== 1 ? 's' : ''}`;

      viewsDiv.appendChild(viewsCount);

      
      statsDiv.appendChild(heartsDiv);
      statsDiv.appendChild(viewsDiv);

  
      t_tDiv.appendChild(innerDiv);
      t_tDiv.appendChild(statsDiv);

      textDiv.appendChild(imgDiv);
      textDiv.appendChild(t_tDiv);

   
      entryDiv.appendChild(textDiv);

  
      container.appendChild(entryDiv);
    });
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