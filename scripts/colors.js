
const measureWidth = item => {
    let reqItemWidth = 0;
    const screenWidth = $(window).width();
    const container = item.closest(".colors__list");
    const titlesBlocks = container.find(".color__name");
    const titlesWidth = titlesBlocks.width()*titlesBlocks.length;

    const textContainerOut = item.find(".color__content");
    const textContainer = textContainerOut.find(".color__text");
    const marginLeft = parseInt(textContainer.css("margin-left"));
    const marginRight = parseInt(textContainer.css("margin-right"));

    const isTablet = window.matchMedia("(max-width: 768px)").matches;

    if (isTablet) {
        reqItemWidth = screenWidth - titlesWidth; 
    } else {
        reqItemWidth = 546;
    }
    return {
        container: reqItemWidth,
        textContainer: reqItemWidth - marginRight - marginLeft

       
    };
   
   
};




const closeEveryItemInContainer = outer => {
    const items = outer.find(".colors__items");
    const content = outer.find(".color__content");
   
    content.width(0);
    items.removeClass("active");
    
};

const openColorItem = item => {
    const hiddenContent = item.find(".color__content");
    const reqWidth = measureWidth(item);
    const textBlock = hiddenContent.find(".color__text");
    
    textBlock.width(reqWidth.textContainer);
    item.addClass("active");
    hiddenContent.width(reqWidth.container);

    console.log(reqWidth);

};

$(".color__name-item").on("click", e =>{
    e.preventDefault();

    const $this = $(e.currentTarget);
    const item = $this.closest(".colors__items");
    const itemOpened = item.hasClass("active");
    const outer = item.closest(".colors__list");

 

   

    if (itemOpened) {
        closeEveryItemInContainer(outer)
    } else {
        closeEveryItemInContainer(outer);
        openColorItem(item);
    }
});

$(".color__btn").on("click", e =>{
    e.preventDefault();

    closeEveryItemInContainer($('.colors__list'));

});




