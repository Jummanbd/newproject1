const menuBar = document.querySelector('.header-menu');
const navTop = document.querySelector('.back-to-top');
const menuArea = document.querySelector('.menu-area');


window.addEventListener('scroll', function(){
 
    const scrollHight = window.pageYOffset;
  
   const coned = menuBar.getBoundingClientRect().height;
  
   if(scrollHight > coned){
       menuBar.classList.add('show-background');
      menuArea.style.marginTop = '0px';

   }else{
      menuBar .classList.remove('show-background')
      menuArea.style.marginTop = '25px';
       
   }
   if( scrollHight > 320 ){
    navTop.classList.add('show-upward')
  
  }
  else{
     navTop.classList.remove('show-upward')
  }
  });


//   menu anther item 
const  listItem = document.querySelectorAll('.menu-list-item');
 listItem.forEach(function(singleItem){
    const button = singleItem.querySelectorAll('.menu-single-item');

    button.forEach(function(btn){
        btn.addEventListener('click', function(){
            listItem.forEach(function(item){
                if(item !== singleItem){
                    item.classList.remove('site-menu-list-show')
                }
            }); 
            singleItem.classList.toggle('site-menu-list-show')
        })
    });

 });


//  

var siteWrapper = document.querySelector('.site-menu-wrapper');

const barBtn = document.querySelector('.bar-btn');
const timeBtn = document.querySelector('.times-btn');

barBtn.addEventListener('click', () => {
   siteWrapper.classList.toggle('site-menu-active')
});

timeBtn.addEventListener('click', () => {
   siteWrapper.classList.remove('site-menu-active')

})


var loadingShow = document.querySelector('.load-show');

window.addEventListener('load', function(){
    loadingShow.classList.add('load-hiden')
})
