




$(window).scroll(function () {
  if ($(this).scrollTop() > 190) {
    $(".js-fixed-menu2").addClass("b-sevice__fixed2");
  } else {
    $(".js-fixed-menu2").removeClass("b-sevice__fixed2");
  }
});


// $(function () {
//     $(".js-fancybox").fancybox();
//     $(".js-fancyvideo").fancybox({
//       maxWidth: 1000,
//       maxHeight: 800,
//       fitToView: true,
//       width: "100%",
//       height: "50%",
//       autoSize: false,
//       closeClick: false,
//       openEffect: "none",
//       closeEffect: "none",
//     });




    function showScrollTop() {
      if ($(document).scrollTop() >= $(window).height()) {
        $(".js-scrolltop").addClass("b-scrolltop_show");
      } else {
        $(".js-scrolltop").removeClass("b-scrolltop_show");
      }
    }

    showScrollTop();
    $(window).on("scroll", function (event) {
      event.preventDefault();
      showScrollTop();
    });



    $(".js-scrolltop").on("click", function (event) {
      event.preventDefault();
      $("html,body").animate({ scrollTop: 0 }, "slow");
    });
    $(".js-mybusines-btn").on("click", function (event) {
      event.preventDefault();
      $(".js-mybusines-content").stop(true, false).slideToggle("slow");
      $(this).find("span").stop(true, false).toggle();
    });
    // $(".js-excursion-fancy").fancybox({
    //   padding: 0,
    //   maxWidth: 1180,
    //   wrapCSS: "excursion-fancy",
    //   beforeShow: function () {
    //     $("body").css("overflow", "hidden");
    //   },
    //   afterClose: function () {
    //     $("body").css("overflow", "visible");
    //   },
    // });


    function showSidebar() {
      $(".js-sidebar-inner").addClass("l-sidebar_inner_open");
      $(".js-sidebar").fadeIn("1000");
      $("html, body").css("overflow", "hidden");
    }
    function hideSidebar() {
      $(".js-sidebar-inner").removeClass("l-sidebar_inner_open");
      $(".js-sidebar").fadeOut("1000");
      $("html, body").css("overflow", "visible");
    }
    $(".js-sidebar-show").on("click", function (event) {
      event.preventDefault();
      showSidebar();
    });
    $(".js-sidebar-hide").on("click", function (event) {
      event.preventDefault();
      hideSidebar();
    });


    // var $tabsNavLink = $(".js-tabs .tabs__nav a"),
    //   $tabsContent = $("[class*='js-tab-']"),
    //   $tabsContentFirst = $(".js-tab-1");
    // $tabsContent.hide();
    // $tabsContentFirst.show();
    // $tabsNavLink.on("click", function (event) {
    //   event.preventDefault();
    //   var $tabsBlock = $(this).parents(".js-tabs");
    //   var tabsTargetId = $(this).attr("js-tab");
    //   if (tabsTargetId == "" || tabsTargetId == undefined)
    //     tabsTargetId = $(this).attr("href");
    //   $tabsNavLink.removeClass("tabs__on");
    //   $(this).addClass("tabs__on");
    //   $tabsBlock.find($tabsContent).hide();
    //   $tabsBlock.find("." + tabsTargetId).show();
    // });
    // var sliderFront = $(".js-stagescarousel").bxSlider({
    //   pagerCustom: ".js-stagesnav",
    //   adaptiveHeight: true,
    // });
    // var sliderFront2 = $(".js-benefitscarousel").bxSlider({
    //   pager: false,
    //   adaptiveHeight: true,
    //   onSlideNext: doThis2,
    //   onSlidePrev: doThis2,
    // });
    // var sliderBack2 = $(".js-benefitspiccarousel").bxSlider({
    //   auto: false,
    //   touchEnabled: false,
    //   mode: "fade",
    //   onSlideNext: doThis2,
    //   onSlidePrev: doThis2,
    // });
    // function doThis2(ele, old, newi2) {
    //   sliderFront2.goToSlide(newi2);
    //   sliderBack2.goToSlide(newi2);
    // }
    // if ($(".js-bxslider").length) {
    //   $(".js-bxslider").bxSlider({ pager: false });
    // }
    // var $textCarousel = $(".js-textcarousel");
    // $textCarousel
    //   .addClass("owl-carousel")
    //   .owlCarousel({ items: 1, autoPlay: true });
    // var $portfolioCarousel = $(".js-carousel");
    // $portfolioCarousel
    //   .addClass("owl-carousel")
    //   .owlCarousel({ items: 4, autoPlay: false });
    // var $capabCarousel = $(".js-capab-slider");
    // $capabCarousel
    //   .addClass("owl-carousel")
    //   .owlCarousel({ items: 1, dots: false, nav: true, navText: "", loop: true });
    // var $benefCarousel = $(".js-benefits-slider");
    // $benefCarousel
    //   .addClass("owl-carousel")
    //   .owlCarousel({ items: 1, dots: false, nav: true, navText: "" });
    // var $samplesCarousel = $(".js-samples-carousel");
    // $samplesCarousel
    //   .addClass("owl-carousel")
    //   .owlCarousel({
    //     items: 3,
    //     dots: true,
    //     nav: true,
    //     navText: "",
    //     loop: true,
    //     responsive: {
    //       0: { items: 1 },
    //       768: { items: 2 },
    //       980: { items: 3 },
    //       1200: { items: 3 },
    //     },
    //   });
    // var $portfCarousel = $(".js-portf-carousel");
    // if ($portfCarousel.length) {
    //   $portfCarousel
    //     .addClass("owl-carousel")
    //     .owlCarousel({
    //       items: 4,
    //       margin: 20,
    //       dots: true,
    //       navText: "",
    //       nav: true,
    //       lazyLoad: true,
    //       responsive: { 0: { items: 1 }, 768: { items: 3 }, 1240: { items: 4 } },
    //     });
    // }
    // var $sslCarousel = $(".js-ssl-carousel");
    // $sslCarousel
    //   .addClass("owl-carousel")
    //   .owlCarousel({ items: 1, dots: false, nav: true, navText: "" });
    // var $trustCarousel = $(".js-carousel-trust");
    // $trustCarousel
    //   .addClass("owl-carousel")
    //   .owlCarousel({
    //     items: 5,
    //     dots: false,
    //     lazyLoad: true,
    //     nav: true,
    //     navText: "",
    //     loop: true,
    //     responsive: {
    //       0: { items: 1 },
    //       767: { items: 2 },
    //       980: { items: 4 },
    //       1200: { items: 5 },
    //     },
    //   });
    // var $blogCarousel = $(".js-carousel-blog");
    // $blogCarousel
    //   .addClass("owl-carousel")
    //   .owlCarousel({
    //     items: 3,
    //     dots: false,
    //     nav: true,
    //     lazyLoad: true,
    //     navText: "",
    //     margin: 20,
    //     loop: true,
    //     responsive: {
    //       0: { items: 1 },
    //       768: { items: 2 },
    //       980: { items: 3 },
    //       1200: { items: 3 },
    //     },
    //   });
    // var $portfolioCarousel = $(".js-carousel-portfolio");
    // $portfolioCarousel
    //   .addClass("owl-carousel")
    //   .owlCarousel({
    //     items: 1,
    //     dots: false,
    //     lazyLoad: true,
    //     nav: true,
    //     navText: "",
    //     margin: 20,
    //     loop: true,
    //     responsive: {
    //       0: { items: 1 },
    //       768: { items: 1 },
    //       980: { items: 3 },
    //       1200: { items: 3 },
    //     },
    //   });
    // var $certificatesCarousel = $(".js-certificates-carousel");
    // $certificatesCarousel
    //   .addClass("owl-carousel")
    //   .owlCarousel({
    //     items: 3,
    //     dots: false,
    //     nav: true,
    //     loop: true,
    //     margin: 20,
    //     responsive: {
    //       0: { items: 1 },
    //       768: { items: 2 },
    //       980: { items: 2 },
    //       1200: { items: 3 },
    //     },
    //   });
    // var thanksCarousel = $(".js-thanks-carousel");
    // thanksCarousel
    //   .addClass("owl-carousel")
    //   .owlCarousel({
    //     items: 1,
    //     dots: false,
    //     nav: true,
    //     loop: true,
    //     margin: 20,
    //     autoHeight: true,
    //   });
    // if ($(".odometer").length) {
    //   setTimeout(function () {
    //     odometer.innerHTML = 97;
    //   }, 1000);
    // }
//     $(".js-table table").cardtable({ myClass: "js-stacktable", headIndex: 3 });
//     var $autor_certificatesCarousel = $(".js-carousel-autor-certificates");
//     $autor_certificatesCarousel
//       .addClass("owl-carousel owl-theme")
//       .owlCarousel({
//         items: 1,
//         dots: true,
//         nav: true,
//         navText: "",
//         loop: true,
//         margin: 10,
//         responsive: {
//           0: { items: 1 },
//           425: { items: 2 },
//           768: { items: 3 },
//           980: { items: 1 },
//           1200: { items: 1 },
//         },
//       });
//     let owlCases = $(".js-owl-cases");
//     if (owlCases.length) {
//       owlCases.owlCarousel({
//         items: 1,
//         nav: true,
//         navText: "",
//         lazyLoad: true,
//         margin: 0,
//         responsive: { 0: { items: 1 }, 768: { items: 1 }, 1240: { items: 1 } },
//       });
//       $(".js-cases-next").click(function () {
//         owlCases.trigger("next.owl.carousel");
//       });
//       $(".js-cases-prev").click(function () {
//         owlCases.trigger("prev.owl.carousel");
//       });
//     }
//     if (window.location.search) {
//       let getParams = window.location.search;
//       if (getParams.includes("fromDemo")) {
//         let formButton = $(".js-demo-trigger a");
//         if (formButton.length) {
//           formButton.click();
//         }
//       }
//     }
//     let dropDownList = $(".js-drop-down-list");
//     let dropDownButton = $(".js-drop-down-button");
//     let dropDownButtonText = $(".js-visual-button-text");
//     dropDownButton.click(() => {
//       $("li", dropDownList).toggleClass("portfolio-det__item-active");
//       $(dropDownButtonText).toggleClass("portfolio-det__text-active");
//     });
//   });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
//   $(function () {
//     $('.js-anchor[href*="#"]').on("click", function (event) {
//       let target = this.hash;
//       let menuFixedHeight = $(".js-fixed-menu2").outerHeight();
//       if ($(target).length) {
//         event.preventDefault();
//         $("html, body")
//           .stop(true, false)
//           .animate(
//             { scrollTop: $(target).offset().top - menuFixedHeight },
//             900,
//             "swing"
//           );
//       }
//     });
//   });
  $(function () {
    $(".js-solution-tabs-nav").on(
      "click",
      "li:not(.solution-tabs__active)",
      function () {
        $(this)
          .addClass("solution-tabs__active")
          .siblings()
          .removeClass("solution-tabs__active")
          .closest(".js-solution-tabs")
          .find(".solution-tabs__content")
          .removeClass("solution-tabs__content--active")
          .eq($(this).index())
          .addClass("solution-tabs__content--active");
      }
    );
  });
  $(function () {
    let popupLink = null;
    popupLink = $("[data-ytvideo]");
    if (popupLink.attr("data-ytvideo")) {
      tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      let firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      let htmlPopupYTVideo = $(
        `<div class="b-overlay"></div><div class="b-popup-yt"><div class="popup-yt__inner"><div class="popup-yt__box"><div class="popup-video-yt__close"><svg height="100%"viewBox="0 0 16 16"width="100%"fill="currentColor"><path d="M13 4L12 3 8 7 4 3 3 4 7 8 3 12 4 13 8 9 12 13 13 12 9 8z"></path></svg></div><div class="popup-video-yt__container"><div class="popup-video-yt__frame"></div></div></div></div></div>`
      );
      let player;
      let flag = false;
      popupLink?.each(function (idx, el) {
        if ($(el).attr("data-ytvideo").length !== 0) {
          $(this).on("click", function (e) {
            e.preventDefault();
            $("body").css("overflow", "hidden");
            $("body").append(htmlPopupYTVideo);
            let iFrame = $(".popup-video-yt__frame");
            let videoId = $(this).attr("data-ytvideo");
            let playerId = `${idx}-` + $(this).attr("data-ytplayer");
            let close = $(".popup-video-yt__close");
            playerId ? iFrame.attr("id", playerId) : "";
            flag = true;
            let countInterval = 0;
            let plInterval = setInterval(function () {
              countInterval += 1;
              if (countInterval > 10 || flag === false) {
                clearInterval(plInterval);
                closePopup();
              }
              if ($("#www-widgetapi-script").length) {
                player = new YT.Player(playerId, {
                  playerVars: { playsinline: 1, autoplay: 0 },
                  videoId: videoId,
                  events: { onReady: onPlayerReady },
                });
                clearInterval(plInterval);
              }
            }, 1000);
            close.on("click", closePopup);
          });
        }
      });
      function closePopup() {
        $("body").css("overflow", "auto");
        htmlPopupYTVideo.remove();
        flag = false;
        if (player !== undefined) {
          player.destroy();
        }
      }
      function onPlayerReady(event) {
        let video = event.target.i;
      }
    }
  });
  

  function getFaqAccordion() {
    $(".faq__answer").hide();
    $(".faq__question").on("click", function () {
      $(this).toggleClass("active");
      $(this).next().slideToggle();
    });
  }

  getFaqAccordion();
