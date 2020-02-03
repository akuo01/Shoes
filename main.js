var shoe1 = {
    title: "Salomon XT6",
    description:
        "The S/Lab series applies hallmarks of Salomon's trail running footwear : the support and stability of the Advanced Chassis design, responsive ground feel and superior traction to energy returning cushioning.",
    image:
        "https://stockx.imgix.net/Salomon-S-Lab-XT-6-Softground-LT-Adv-Grey.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&trim=color&updated_at=1567050637&w=1000"
};

function displayInfo1() {
    var container1 = document.querySelector("#container1");
    var title = document.createElement("h3");
    var rockImage = document.createElement("img");
    var description = document.createElement("p");
  
    description.innerHTML = shoe1.description;
    rockImage.src = shoe1.image;
    title.innerHTML = shoe1.title;
  
    title.className = "titleClass1";
    description.className = "descriptionClass1";
    rockImage.className = "imageClass1";
  
    container1.appendChild(rockImage);
    container1.appendChild(title);
    container1.appendChild(description);

    document.querySelector(".button1").disabled = true;

  }

var shoe2 = {
    title: "Paraboot Michael",
    description:
        "Derby plate jointed bead, two eyelets. Leather lined model, genuine Norwegian stitching, on natural rubber outsole. Handemade in France.",
    image:
        "http://www.novoidplus.com/shop/includes/modules/kiss_image_thumbnailer/thumbs/911x668_paraboot-micheal-bbr-noir-1.jpg"
};

function displayInfo2() {
    var container2 = document.querySelector("#container2");
    var title = document.createElement("h3");
    var rockImage = document.createElement("img");
    var description = document.createElement("p");
  
    description.innerHTML = shoe2.description;
    rockImage.src = shoe2.image;
    title.innerHTML = shoe2.title;
  
    title.className = "titleClass2";
    description.className = "descriptionClass2";
    rockImage.className = "imageClass2";
  
    container2.appendChild(rockImage);
    container2.appendChild(title);
    container2.appendChild(description);

    document.querySelector(".button2").disabled = true;

  }

var shoe3 = {
    title: "Nike React 87",
    description:
        "The see-through TPU upper and cored-out React foam midsole provide a deconstructed-yet-futuristic look unlike anything seen before.",
    image:
        "https://stockx-360.imgix.net/Nike-React-Element-87-Undercover-Green-Mist/Images/Nike-React-Element-87-Undercover-Green-Mist/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1538080256&w=1000"
};

function displayInfo3() {
    var container3 = document.querySelector("#container3");
    var title = document.createElement("h3");
    var rockImage = document.createElement("img");
    var description = document.createElement("p");
  
    description.innerHTML = shoe3.description;
    rockImage.src = shoe3.image;
    title.innerHTML = shoe3.title;
  
    title.className = "titleClass3";
    description.className = "descriptionClass3";
    rockImage.className = "imageClass3";
  
    container3.appendChild(rockImage);
    container3.appendChild(title);
    container3.appendChild(description);

    document.querySelector(".button3").disabled = true;
  }

var shoe4 = {
    title: "Yeezy 700",
    description:
        "The adidas Yeezy Boost 700 is a sneaker designed by Kanye West and adidas. It was first revealed during the Yeezy Season 5 fashion show in February, 2017, and later officially released on August 12th, 2017.",
    image:
        "https://stockx-360.imgix.net/Adidas-Yeezy-700-Mauve/Images/Adidas-Yeezy-700-Mauve/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1539982972&w=1000"
};

function displayInfo4() {
    var container4 = document.querySelector("#container4");
    var title = document.createElement("h3");
    var rockImage = document.createElement("img");
    var description = document.createElement("p");
  
    description.innerHTML = shoe4.description;
    rockImage.src = shoe4.image;
    title.innerHTML = shoe4.title;
  
    title.className = "titleClass4";
    description.className = "descriptionClass4";
    rockImage.className = "imageClass4";
  
    container4.appendChild(rockImage);
    container4.appendChild(title);
    container4.appendChild(description);

    document.querySelector(".button4").disabled = true;
  }

var shoe5 = {
    title: "Reebok DMX",
    description:
        "MISBHV futuristic take on iconic sneaker silhouette of late 1990s - Reebok Daytona DMX.",
    image:
        "https://stockx.imgix.net/Reebok-Daytona-DMX-MISBHV.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&trim=color&updated_at=1554774042&w=1000"
};

function displayInfo5() {
    var container5 = document.querySelector("#container5");
    var title = document.createElement("h3");
    var rockImage = document.createElement("img");
    var description = document.createElement("p");
  
    description.innerHTML = shoe5.description;
    rockImage.src = shoe5.image;
    title.innerHTML = shoe5.title;
  
    title.className = "titleClass5";
    description.className = "descriptionClass5";
    rockImage.className = "imageClass5";
  
    container5.appendChild(rockImage);
    container5.appendChild(title);
    container5.appendChild(description);

    document.querySelector(".button5").disabled = true;
  }

