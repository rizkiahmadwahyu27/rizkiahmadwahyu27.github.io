
function layarsLayout() {
    const nav = document.getElementsByClassName('nav');
    
    const isAndroid = window.innerWidth >= 760;
    const boxNavbar1 = document.getElementsByClassName("box-navbar");
    for (let boxN of boxNavbar1){
        if (isAndroid) {
            boxN.classList.add('hidden');
        }
    };
    for (let navElement of nav){
        if (isAndroid) {
            navElement.classList.remove('hidden');
        } else {
            navElement.classList.add('hidden');
        }
    };
    const logoBox = document.getElementsByClassName('logo-box');
    for (let logo of logoBox){
        if (isAndroid) {
            logo.classList.remove('w-fit');
        } else {
            logo.classList.add('w-fit');
        }
    };

    const tombolNav = document.getElementsByClassName('tombol-nav');
    for (let tblNav of tombolNav){
        if (isAndroid) {
            tblNav.classList.add('hidden');
        } else {
            tblNav.classList.remove('hidden');
        }
    };
}

layarsLayout();

window.addEventListener('resize',layarsLayout);

const toggleMav = document.getElementById("toggleNav");
toggleMav.addEventListener('click', function (e){
    const boxNavbar = document.getElementsByClassName("box-navbar");
    for (let boxNav of boxNavbar){
            
            boxNav.classList.remove('hidden');
        
    };
});