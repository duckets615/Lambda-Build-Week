

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  };

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
  };


  const cards = [{"class":"firstCard", "person1":"Tigran", "person2":"Andrew", "person3":"Joe"},
  {"class":"secondCard", "person":"Elan", "picture":"man on map"},
  {"class":"thirdCard", "person":"Desi", "picture":"girl in grass field"},
  {"class":"forthCard", "person":"Chris", "picture":"shaking hands"},
  {"class":"topImg", "picture":"lake and mountains", "position":"fits page width"}]

  console.log(cards);

  const firstCard = {
    person1:"Tigran",
    person2:"Andrew",
    person3:"Joe"
  };

  const secondCard = {
    person: "Elan",
    picture: "man on map"
  };

  const thirdCard = {
    person: "Desi",
    picture: "girl in grass field"
  };

  const forthCard = {
    person: "Chris",
    picture: "shaking hands"
  };

  const topImg = {
    picture: "lake and mountains",
    position: "fits page width"
  };

  const card = [firstCard, secondCard, thirdCard, forthCard, topImg];
console.log(card);



function Characteristics(attributes) {
  this.name = attributes.name;
  this.lastName = attributes.lastName;
}

const queen = new Characteristics({
  name: "Destiny",
  lastName: "Tibbitts",
});

console.log(queen.name)

const submitBtn = document.querySelector('.submit-share');
submitBtn.addEventListener('mouseover', function (e) {
  e.target.style.backgroundColor = "black";
});

submitBtn.addEventListener('mouseleave', function (e) {
  e.target.style.backgroundColor = "rgba(224, 39, 39, 0.767)";
});
