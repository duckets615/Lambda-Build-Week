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

  // const menu = document.querySelectorAll('.menu');
  // menu.addEventListener('mouseover', e => {
  //   e.target.style.color = "black";
  // });

  // menu.addEventListener('mouseleave', function (e) {
  //   e.target.style.color = "rgba(224, 39, 39, 0.767)";
  // });

