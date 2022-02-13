//overlay menu functioning
let burger = document.querySelector("#hamburger");
let overlay = document.querySelector ("#overlay");
let plankRight = document.querySelector ("#plank-right");
let plankLeft = document.querySelector ("#plank-left");
let plankHide= document.querySelector ("#plank-hide");

let links = document.querySelectorAll (".menu__link-burger");


links.forEach(function(element) {
    element.addEventListener("click", toggleMenu);
});


burger.addEventListener("click", toggleMenu) ;

function toggleMenu () {
   
    overlay.classList.toggle ("overlay--active");
    plankRight.classList.toggle ("hamburger__plank--right");
    plankLeft.classList.toggle ("hamburger__plank--left");
    plankHide.classList.toggle ("hamburger__plank--hide");
};


//team accordeon  desktop 


const openItem = item => {

    const container = item.closest(".team__item");
    const contentBlock = container.find(".team__item-content");
    const textBlock = contentBlock.find(".team__item-details");
    const reqHeight  = textBlock.height ();
    const link = container.find(".team__item-link");
    const arrow = link.find(".team__item-icon");

    container.addClass("active");
    contentBlock.height(reqHeight);
    arrow.addClass("team__item-icon--active");

}

const closeEveryItem  = container => {
    const items = container.find('.team__item-content');
    const itemContainer = container.find('.team__item');
    const link = itemContainer.find(".team__item-link");
    const arrow = link.find(".team__item-icon");
    
    itemContainer.removeClass("active");
    arrow.removeClass("team__item-icon--active");
    items.height(0);
}

$('.team__item-link').click(e=>{
    e.preventDefault();

    const $this = $(e.currentTarget);
    const listContainer = $this.closest('.team');
    elemlistContainer = $this.closest(".team__item");

    if (elemlistContainer.hasClass("active")) {
        closeEveryItem(listContainer); 

    } else {
        closeEveryItem(listContainer); 
        openItem($this);
    }
})

//team accordeon tablets/phones

const openItemTab = item => {

    const container = item.closest(".team-tab__item");
    const contentBlock = container.find(".team-tab__item-wrapper");
    const textBlock = contentBlock.find(".team-tab__item-content");
    const reqHeight  = textBlock.height ();
    const link = container.find(".team-tab__item-link");
    const arrow = link.find(".team-tab__item-icon");

    container.addClass("active");
    contentBlock.height(reqHeight);
    arrow.addClass("team-tab__item-icon--active");

}

const closeEveryItemTab  = container => {
    const items = container.find('.team-tab__item-wrapper');
    const itemContainer = container.find('.team-tab__item');
    const link = itemContainer.find(".team-tab__item-link");
    const arrow = link.find(".team-tab__item-icon");
    
    itemContainer.removeClass("active");
    items.height(0);
    arrow.removeClass("team-tab__item-icon--active");
}

$('.team-tab__item-link').click(e=>{
    e.preventDefault();

    const $this = $(e.currentTarget);
    const listContainer = $this.closest('.team-tab');

    elemlistContainer = $this.closest(".team-tab__item");

    if (elemlistContainer.hasClass("active")) {
        closeEveryItemTab(listContainer); 

    } else {
        closeEveryItemTab(listContainer); 
        openItemTab($this);
    }
})



//slider functioning

const findBlockByAlias = (alias) => {
    return $(".reviews__item").filter((ndx, item) => {
        return $(item).attr("data-linked-with") == alias
    });
};
 
$(".interactive-avatar__link").click(e => {

    e.preventDefault();
    const $this = $(e.currentTarget);
    const target = $this.attr("data-open");
    const ItemToShow = findBlockByAlias(target)
    const CurItem = $this.closest(".reviews__switcher-item");

    ItemToShow.addClass("reviews__item--active").siblings().removeClass("reviews__item--active");
    CurItem.addClass("interactive-avatar--active").siblings().removeClass("interactive-avatar--active");

});


