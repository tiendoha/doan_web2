// Xử lý Pop up video trailer
let iconClosePopUp = document.querySelector('#icon-close-popup');
let containerPopUp = document.querySelector('.container-popup');

iconClosePopUp.addEventListener(
    "click",
    (e) => {
        containerPopUp.style.display = 'none';
    },
    false
)

let playIcon = document.querySelector('#play-icon');

playIcon.addEventListener(
    'click',
    (e) => {
        containerPopUp.style.display = 'block';
    },
    false
)

// Xử lý lịch chiếu phim 
const listDays = document.querySelector('.list-days');
const days = document.getElementsByClassName('day');
const btnLeft = document.querySelector('#btn-left');
const btnRight = document.querySelector('#btn-right');
const length = days.length;
let current = 0;

btnLeft.addEventListener(
    'click',
    (e) => {
        if (current == 0) {
            current = length - 1;
            let width = days[0].offsetWidth;
            listDays.style.transform = `translateX(${-width * current}px)`;
        } else {
            current--;
            let width = days[0].offsetWidth;
            listDays.style.transform = `translateX(${-width * current}px)`; 
        }
    }
)

btnRight.addEventListener(
    'click',
    (e) => {
        if(current == length - 1) {
            current = 0;
            let width = days[0].offsetWidth;
            listDays.style.transform = `translateX(0px)`;
        } else {
            current++;
            let width = days[0].offsetWidth;
            listDays.style.transform = `translateX(${width * -1 * current}px)`; 
        }
    }
)

// Xử lý sự kiện đóng menu-chon-ghe
const iconCloseMenuChonGhe = document.querySelector('#icon-close-menu-chon-ghe');
const containerPopupMenuChonGhe = document.querySelector('.container-popup-menu-chon-ghe');

iconCloseMenuChonGhe.addEventListener(
    "click",
    (e) => {
        containerPopupMenuChonGhe.style.display = "none";
    },
    false
)

// Xử lý sự kiện mở menu-chon-ghe
const hour = document.querySelectorAll(".hour");
for(let i = 0; i < hour.length; i++) {
    hour[i].addEventListener(
        "click",
        (e) => {
            containerPopupMenuChonGhe.style.display = "flex";
        },
        false
    )
}

// Xử lý sự kiện đóng menu-chon-nuoc
const iconCloseMenuChonNuoc = document.querySelector('#icon-close-menu-chon-nuoc');
const containerPopupMenuChonNuoc = document.querySelector('.container-pop-up-menu-chon-nuoc');


iconCloseMenuChonNuoc.addEventListener(
    "click",
    (e) => {
        containerPopupMenuChonNuoc.style.display = "none";
        for( let i = 0; i < soLuongs.length; i++) {
                let soLuongStr = soLuongs[i].textContent.trim();
                let soLuong = isNaN(soLuongStr) ? 0 : parseInt(soLuongStr); 
                soLuong = 0; 

                let tongCongStr = tongCongs.textContent.trim();
                let tongCong = isNaN(tongCongStr) ? 0 : parseInt(tongCongStr);
                tongCong = 0; 
            
                soLuongs[i].textContent = soLuong.toString();
                tongCongs.textContent = tongCong.toString();
        }
        
        containerPopupMenuChonGhe.style.display = "flex";
    },
    false
)

// Xử lý sự kiện mở menu-chon-ghe
const btnMuaVe = document.querySelector("#btn-mua-ve");

btnMuaVe.addEventListener(
    "click",
    (e) => {
        containerPopupMenuChonNuoc.style.display = "flex";

        containerPopupMenuChonGhe.style.display = "none";
    },
    false
)