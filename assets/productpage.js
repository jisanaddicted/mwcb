let status11el=document.querySelector('.status11');
let status1el=document.querySelector('.status1');
let sortbyel=document.querySelector('.sort-by');
let minimizebuttonel=document.querySelector('.closebutton1');

status11el.addEventListener('click',()=>{
    sortbyel.style.display="none";
    status1el.style.display="revert";
    


})
minimizebuttonel.addEventListener('click',()=>{
    sortbyel.style.display="flex";
    status1el.style.display="none";
})



let sizeCollapsedEl = document.querySelector('.size');
let sizeExpandedEl = document.querySelector('.status2');
let sizeOpenButtonEl = document.querySelector('.size .plus-button');
let sizeCloseButtonEl = document.querySelector('.closebutton2');

sizeOpenButtonEl.addEventListener('click', () => {
    sizeCollapsedEl.style.display = "none";
    sizeExpandedEl.style.display = "revert";
});

sizeCloseButtonEl.addEventListener('click', () => {
    sizeCollapsedEl.style.display = "flex";
    sizeExpandedEl.style.display = "none";
});
// ===== COLOR FILTER =====
let colorCollapsedEl = document.querySelector('.color');
let colorExpandedEl = document.querySelector('.status3');
let colorOpenButtonEl = document.querySelector('.color .plus-button');
let colorCloseButtonEl = document.querySelector('.closebutton3');

colorOpenButtonEl.addEventListener('click', () => {
    colorCollapsedEl.style.display = "none";
    colorExpandedEl.style.display = "revert";
});

colorCloseButtonEl.addEventListener('click', () => {
    colorCollapsedEl.style.display = "flex";
    colorExpandedEl.style.display = "none";
});

// ===== COLLECTION FILTER =====
let collectionCollapsedEl = document.querySelector('.collection');
let collectionExpandedEl = document.querySelector('.status5');
let collectionOpenButtonEl = document.querySelector('.collection .plus-button');
let collectionCloseButtonEl = document.querySelector('.closebutton4');

collectionOpenButtonEl.addEventListener('click', () => {
    collectionCollapsedEl.style.display = "none";
    collectionExpandedEl.style.display = "revert";
});

collectionCloseButtonEl.addEventListener('click', () => {
    collectionCollapsedEl.style.display = "flex";
    collectionExpandedEl.style.display = "none";
});

// ===== FABRIC FILTER =====
let fabricCollapsedEl = document.querySelector('.fabric');
let fabricExpandedEl = document.querySelector('.status6');
let fabricOpenButtonEl = document.querySelector('.fabric .plus-button');
let fabricCloseButtonEl = document.querySelector('.closebutton5');

fabricOpenButtonEl.addEventListener('click', () => {
    fabricCollapsedEl.style.display = "none";
    fabricExpandedEl.style.display = "revert";
});

fabricCloseButtonEl.addEventListener('click', () => {
    fabricCollapsedEl.style.display = "flex";
    fabricExpandedEl.style.display = "none";
});

