let  images = document.querySelectorAll('.pictures__img'),
     main = document.querySelectorAll('.img')




images.forEach((img,index) => {
    img.addEventListener('click', function() {
        let data = img.getAttribute('data-img')
                 
                     main.forEach ((mainImg)=> {
                        mainImg.classList.remove('active')
                        main[data].classList.add('active')
                     })
                  
                     
                   
     
                 
    })
})