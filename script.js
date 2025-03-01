document.addEventListener("DOMContentLoaded",function(){
    const slides=document.querySelectorAll(".slide");
    const slider=document.querySelector(".slider");
    let currentSlide=0;
    const totalSlides=slides.length;
    if(totalSlides==0){
        console.error("No slides found");
        return;
    }
    function showSlide(index){
        const newTransformValue=`translateX(-${index * 100}vw)`;
        slider.style.transform=newTransformValue;

    }
    function moveSlide(direction){
        currentSlide=(currentSlide+direction+totalSlides)%totalSlides;
        showSlide(currentSlide);
    }
    setInterval(()=> moveSlide(1),5000);
})