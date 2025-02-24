var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay:{
      delay: 2500,
     disableOnInteraction: false,
   },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


const myjsmedia = (widthSize) => {
  if(widthSize.matches) {
    new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,

    });
  } else {
    new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
     
    });
  }
}
  const widthSize = window.matchMedia("(max-width: 720px)");
  myjsmedia(widthSize);
widthSize.addEventListener("change", myjsmedia);
/*
*/

/*update number*/
/*const counterNum = document.querySelectorAll(".counter-numbers");
const speed = 500;
counterNum.forEach((curElem) => {
	const updateNumber = () => {
	const targetNumber = parseInt(curElem.dataset.number);
    const initialNum = parseInt(curElem.innerText);
	const incrementNumber = Math.trunc(targetNumber/ speed);
    //console.log(incrementNumber);
if (initialNum < targetNumber) {
	curElem.innerText = `${initialNum + incrementNumber}+`;
	setTimeout(updateNumber, 10);
}



};
updateNumber();
});*/
/*end*/





  // Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




/**/ 


