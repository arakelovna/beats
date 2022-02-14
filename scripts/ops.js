const sections = $("section");
const display = $(".maincontent");

let inScroll = false; 

sections.first().addClass("active");

const performTransition = (sectionEq) => {

    if (inScroll == false) {
        inScroll = true;
        const position = sectionEq * -100;

        const currentSection = sections.eq(sectionEq);
        const menuTheme = currentSection.attr("data-sidemenu-theme");
        const sideMenu = $(".side-menu__link");

        if (menuTheme == "gray") {
            sideMenu.addClass("side-menu__link-gray");
            

        } 
        else {
            sideMenu.removeClass("side-menu__link-gray");
            
        }
        

        display.css({
            transform:`translateY(${position}%)`
        });
    
        
        sections.eq(sectionEq).addClass("active").siblings().removeClass("active");

      
        sideMenu.eq(sectionEq).addClass("side-menu__link--active").parent().siblings().find(".side-menu__link").removeClass("side-menu__link--active");

        setTimeout(() => {
            inScroll = false;
        }, 1100)
    }
   
};

const scrollViewport = direction => {
    const activeSection = sections.filter(".active");
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();

    if(direction == "next" && nextSection.length) {
        performTransition(nextSection.index())
    }
    
    if(direction == "prev" && prevSection.length) {
        performTransition(prevSection.index())
        
    }

};

$(window).on("wheel", e => {

    const deltaY = e.originalEvent.deltaY;

    if (deltaY>0){
        scrollViewport("next")
    }
    
    if (deltaY<0){
        scrollViewport("prev")
    }
});

$(window).on("keydown", (e) => {

    const tagName = e.target.tagName.toLowerCase();
    if (tagName!= "input" && tagName!= "textarea") {

        switch(e.keyCode) {
            case 38: 
                scrollViewport("prev");
                break;
    
            case 40:
                scrollViewport("next");
                break; 
        }    

    }    

});

$("[data-scroll-to]").click(e=> {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const target = $this.attr("data-scroll-to");
    const reqSection = $(`[data-section-id =${target}]`);

    performTransition(reqSection.index());

});

//https://github.com/mattbryson/TouchSwipe-Jquery-Plugin

    // $("body").swipe({
    // swipe: function (
    //     event,
    //     direction,
    //   ) {
    //         const scroller = viewportScroller();
    //         let scrollDirection = "";

    //         if(direction =="up") scrollDirection = "next";
    //         if(direction =="down") scrollDirection = "prev";

    //         scroller[scrollDirection]();

    //     }


       
    // });



