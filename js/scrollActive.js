// Cache selectors
var lastId,
    topMenu = $("#top-menu"),
    topMenuHeight = topMenu.outerHeight()+4,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      let item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  let href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   let fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   let cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   let id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }                   
});


// jQuery(window).scroll(function(){
//          var $sections = $('div');
// 	$sections.each(function(i,el){
//         var top  = $(el).offset().top-1;
//         var bottom = top +$(el).height();
//         var scroll = $(window).scrollTop();
//         var id = $(el).attr('id');
//     	if( scroll > top && scroll < bottom){
//             $('a.active-menu').removeClass('active-menu');
// 			$('a[href="#'+id+'"]').addClass('active-menu');

//         }
//     })
//  });

// $("nav").on("click","a", function (event) {
//         // исключаем стандартную реакцию браузера
//         event.preventDefault();
 
//         // получем идентификатор блока из атрибута href
//         var id  = $(this).attr('href'),
 
//         // находим высоту, на которой расположен блок
//             top = $(id).offset().top;
         
//         // анимируем переход к блоку, время: 800 мс
//         $('body,html').animate({scrollTop: top}, 800);
//     });