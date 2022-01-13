// start button to top
let btn = document.querySelector('.button i');
window.onscroll = function ()
{
    if (window.scrollY >= 800)
    {
        btn.style.display = "block";
    }
    else
    {
        btn.style.display = "none";
        }
}
btn.onclick = function ()
{
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
        
    });
        }

// end button to top




// start change background color the website
let icon = document.querySelector('.icon .fa-moon');
let ik = document.querySelector('.icon .fa-sun');

icon.addEventListener("click", function () {
    
    let myelement = document.getElementById('bdbackground');
    if (myelement.className == 'lighterBG')
    {
        myelement.className = 'darkerBG';
        document.querySelector(".color").style.color = "white";
        
        icon.style.display = "none";
        ik.style.display = "block";
       ik.onclick = function ()
{
           myelement.className = 'lighterBG';
           icon.style.display = "block";
           ik.style.display = "none";
                          document.querySelector(".color").style.color = "black";





        }

    }

});
// end change background color the website

// start active navbar
let links = document.querySelectorAll('.navbar-nav .nav-item .nav-link');
let arraylinks = Array.from(links);

arraylinks.forEach(e => {
    e.addEventListener("click", function (ele) {
        arraylinks.forEach(e => {
            e.classList.remove("active");

        });
        ele.currentTarget.classList.add("active");
    });
});

 // end active navbar

 
 
//start count up
 $(document).ready(function () {
        $(".counter").counterUp({
          delay: 10,
          time: 1500,
        });
      });

// end count up



// start a valid form
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

// end a valid form

// start carsoul

   $(document).ready(function(){
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
  responsiveClass: true,
     autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false,
            loop:false
        }
    }
})});
//end carsoul


// start map
let map;


function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 30.033333, lng: 31.233334 },
    zoom: 14,
  });
    
    let marker = new google.maps.Marker({
        position: { lat: 30.033333, lng: 31.233334 },
        map: map
    });
    let InfoWindow = new google.maps.InfoWindow({
        content:'<h1>this is my country<h1>'
    });
    marker.addListener('click', function () {
        InfoWindow.open(map, marker);
    });

  
}
//end map
