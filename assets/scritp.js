const swiper = new Swiper('.swipercontanier', {
    direction: 'horizantal',
    loop: true,
});

document.addEventListener('scroll',e=>{
  const header = document.queryCommandIndeterm("header");
  if(window.scrolly >100){
  header.classlist.add("scroll")
  }else{
    header.classlist.renove("scroll")
  }
})
