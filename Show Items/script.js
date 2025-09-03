let users = [
  {
    name: "Iphone Apple",
    pic: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Very Good phone with best price",
  },
  {
    name: "Oppo",
    pic: "https://b2c-contenthub.com/wp-content/uploads/2024/07/P1003368.jpg?quality=50&strip=all",
    bio: "Good Phone with Good Features ",
  },
  {
    name: "Samsung Galaxy",
    pic: "https://static0.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/53467816407_968a0b0757_o.jpg",
    bio: "Very good Features with good life",
  },
  {
    name: "Realme",
    pic: "https://images.pexels.com/photos/18480848/pexels-photo-18480848.jpeg?cs=srgb&dl=pexels-zeleboba-18480848.jpg&fm=jpg",
    bio: "Realme Phone Photos",
  },
  {
    name: "Tecno",
    pic: "https://mobilemall.pk/public_html/images/product/product_1633355918CH6__hui_800_800.png",
    bio: "Tecno Mobile Price in Pakistan | Upto 18% Off ",
  },
  {
    name: "Redmi",
    pic: "https://www.whatmobile.com.pk/control/news/assets/25102023/945dbdb8e80dbd27ec4abff445706512.jpg",
    bio: "Redmi Mobile - Redmi A3 (4GB, 128GB)",
  },

];

function showUsers (arr){
arr.forEach(function(user) {

    // Create outer card div

    const card = document.createElement("div");
    card.classList.add("card");

      // Create image
    const img = document.createElement("img");
    img.src = user.pic;
    img.classList.add("bg-img");

    // Create blurred-layer div

    const blurredLayer = document.createElement("div");
    blurredLayer.style.backgroundImage = `url(${user.pic})`;
    blurredLayer.classList.add("blurred-layer");

    const content = document.createElement("div");
    content.classList.add("content");

    const heading = document.createElement("h3");
    heading.textContent=user.name;

    const para = document.createElement("p");
    para.textContent= user.bio;

    content.appendChild(heading);
    content.appendChild(para);

    card.appendChild(img)
    card.appendChild(blurredLayer)
    card.appendChild(content)


    document.querySelector(".cards").appendChild(card)
    });
}
    showUsers(users);

    let inp = document.querySelector(".inp");
    inp.addEventListener("input", function(){
        let newUsers = users.filter((user) => {
            return user.name.toLowerCase().includes(inp.value.toLowerCase()); 
        });

    
    let cardsContainer = document.querySelector(".cards");
    cardsContainer.innerHTML = "";

    if (newUsers.length > 0){
        showUsers(newUsers)
    }else{
       let  msg = document.createElement("p")
       msg.textContent= "No Item Found";
       msg.classList.add("no-user-msg")
       cardsContainer.appendChild(msg)
    }

});


