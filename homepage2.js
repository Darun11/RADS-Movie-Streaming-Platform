const slides = document.querySelectorAll(".slide");
let slideIndex = 0;
let intervalId = null;


slides.forEach(
    (slide, index) =>{
      slide.style.left = `${index * 100}%`;
    }
)

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if(slides.length > 0){
        intervalId = setInterval(goNext, 5000);
    }
}

function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${slideIndex * 100}%)`
        }
    )
    initializeSlider();
}

function goPrev(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function goNext(){
    clearInterval(intervalId);
    slideIndex++;
    showSlide(slideIndex);
}

function searchMovie(){
    let value1=document.getElementById("searchBar").value;
    value1+=".html";
    let value2=document.getElementById("linkMovie");
    value2.href=value1;
    console.log(value1);
  }