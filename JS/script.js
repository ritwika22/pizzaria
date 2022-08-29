function openMenuBox() {
    document.getElementById("menu-id").style.visibility = "visible";
    document.getElementById("menu-id").style.opacity = "1";
    document.getElementById("menu-id").style.transform = "translateY(0px)";
}
function closeMenuBox() {
    document.getElementById("menu-id").style.visibility = "hidden";
    document.getElementById("menu-id").style.opacity = "0";
    document.getElementById("menu-id").style.transform = "translateY(10px)";
}
function openCartBox() {
    document.getElementById("ddid").style.visibility = "visible";
    document.getElementById("ddid").style.opacity = "1";
    document.getElementById("ddid").style.transform = "translateY(0px)";
}
function closeCartBox() {
    document.getElementById("ddid").style.visibility = "hidden";
    document.getElementById("ddid").style.opacity = "0";
    document.getElementById("ddid").style.transform = "translateY(10px)";
}
function shiftFirstli() {
    document.getElementById("first-li").style.padding = "0 30px 0 0";
}
function unshiftFirstli() {
    document.getElementById("first-li").style.padding = "0 15px 0 0";
}
function shiftSecondli() {
    document.getElementById("second-li").style.padding = "0 30px 0 0";
}
function unshiftSecondli() {
    document.getElementById("second-li").style.padding = "0 15px 0 0";
}
function shiftThirdli() {
    document.getElementById("third-li").style.padding = "0 30px 0 0";
}
function unshiftThirdli() {
    document.getElementById("third-li").style.padding = "0 15px 0 0";
}
function shiftFourthli() {
    document.getElementById("fourth-li").style.padding = "0 30px 0 0";
}
function unshiftFourthli() {
    document.getElementById("fourth-li").style.padding = "0 15px 0 0";
}

// window.onscroll = function() {myFunction()};

// var header = document.getElementById("myHeader");
// var sticky = header.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    autoplay: {
        delay: 5000,
    }
});


const cswiper = new Swiper('.chef-swiper',{
    // Optional parameters
    slidesPerView: 1,
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    autoplay: {
        delay: 5000,
    },

    breakpoints: {
        868: {
            slidesPerView: 2,
        },
        1100: {
            slidesPerView: 3,
        }
    }
});

function mainpage(){
    window.location.href = "index.html";
}

function openNav() {
    document.getElementById("responsive-side").style.width = "100%";
}
function closeNavibar() {
    document.getElementById("responsive-side").style.width = "0%";
}

let pbg = document.getElementById('bg-img');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    console.log(value);
    let offset = screen.height;
    try{
        pbg.style.top = -(value * 0.5) + 'px';
    }
    catch{}
})