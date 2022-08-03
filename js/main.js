let scrollButton = document.querySelector(".scroll");
window.onscroll= function(){
if(window.scrollY >= 600){
scrollButton.style.display="block";
}
else{
scrollButton.style.display="none";
}
};
scrollButton.onclick =function(){
window.scrollTo({
top:0,
left:0,
behavior:"smooth",
});
};