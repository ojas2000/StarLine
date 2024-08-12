var animation = false;

window.onload = () => {
    const parallaxBackground = document.getElementById("ani");
    const parallaxBackground1 = document.getElementById("star");
    const initialBiasX = -0.05 * window.innerWidth;
    const initialBiasY = -0.05 * window.innerHeight;
    parallaxBackground.style.transform = `translate(${initialBiasX}px, ${initialBiasY}px)`;

    document.addEventListener("mousemove", (event) => {
    const movementStrength = 5; // Adjust this value for more or less movement
    const width = window.innerWidth / 2 - event.clientX;
    const height = window.innerHeight / 2 - event.clientY;
    const newTranslateX =
        (width / window.innerWidth) * movementStrength + initialBiasX;
    const newTranslateY =
        (height / window.innerHeight) * movementStrength + initialBiasY;
    parallaxBackground.style.transform = `translate(${newTranslateX}px, ${newTranslateY}px)`;
    });

    fetch('/entries/latest')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const journalEntries = data;
        displayJournalEntries(journalEntries);
      })
      .catch(error => console.error('Error loading JSON data:', error));
};

function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

function bright() {
    var scale_f = 3.5;
    delay(350).then(() => {
    document.getElementById("text_reveal").style =
        "background-position:0% 0%;" +
        "font-size: calc(var(--sizeMT) / " +
        scale_f +
        ");";

    document.getElementById("star_sv").style.opacity = 1;
    });

    delay(650).then(() => {
    animation = true;
    typeWriter("JOURNAL", "text_reveal2", 50);
    delay(50).then(() => {
        document.getElementById("text_con").style =
        "transform: translateX(calc(-43% + calc(var(--sizeMT) * 1.75)));  ";

        var links = document.getElementById("navbarLinks");
        links.classList.toggle("active");
        links.style = "display:block;";

        var listItems = links.getElementsByTagName("li");
        for (let i = 0; i < listItems.length; i++)
        setTimeout(function () {
            listItems[i].style.transform = "translateY(0)";
        }, i * 90);
    });
    });
    document.getElementById("star").style.scale = 0;
    document.getElementById("star").style.width = 0;
    document.getElementById("ani_container").style.height = "15%";
    document.getElementById("ani2").style.opacity = 1;
    document.getElementById("enter_b").style.opacity = 0;
    document.getElementById("enter_b").style.height = 0;
    document.getElementById("splash_text").style = "color:black;";
    document.getElementById("text_reveal").style =
    "font-size: calc(var(--sizeMT) / " + scale_f + ");";

    document.getElementById("text_reveal2").style =
    "font-size: calc(calc(var(--sizeMT) / " + scale_f + ") * .8);";
}

function typeWriter(text, elementId, delay = 100) {
    const element = document.getElementById(elementId);
    let index = 0;
    function type() {
    if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(type, delay);
    }
    }
    type();
}

function home() {
    if (animation) {
    window.location.href = "/";
    }
}

function displayJournalEntries(entries) {

    const container = document.getElementById('fresh_news');
    i = 1;
    entries.forEach(entry => {
     const cont1 = document.getElementById("fn"+i);


     cont1.getElementsByClassName("fn_text")[0].onclick = function() {
      window.location.href = '/journal/' + entry.heading;
    };
     cont1.getElementsByClassName("fn_writer")[0].textContent = entry.writer;
     cont1.getElementsByClassName("fn_topic")[0].textContent = `${entry.heading}`
     cont1.getElementsByClassName("fn_body")[0].textContent = `${entry.content_s}`
     cont1.getElementsByClassName("fn_hearts")[0].textContent = `${entry.likes}`
     cont1.getElementsByClassName("fn_views")[0].textContent = `${entry.views}`
     cont1.getElementsByClassName("fn_img")[0].src = `https://ojas2000.github.io/StarLineImages/${entry.image}`

     i++;
    });
  }



var hearts = document.querySelectorAll(".fn_stats");
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