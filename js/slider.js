const stgPading = 50



$(".portfolio-carousel").owlCarousel({
  loop: false,
  dotsEach: false,
  margin: 20,
  stagePadding: 20,
  loop:false,
  items: 2,
  left: -30,
  nav: false,
  responsive: {
    0: {
      items: 1
    },
    800: {
      items: 2
    },
    1000: {
      items: 3
    },
  },
});


// $(".owl-two").owlCarousel({
//   loop: true,
//   dotsEach: true,
//   autoplay: true,
//   stagePadding: 100,
//   responsive: {
//     0: {
//       items: 1,
//     },
//     800: {
//       items: 2,
//     },
//     1000: {
//       items: 3,
//     },
//   },
// });


// $(".owl-three").owlCarousel({
//   loop: true,
//   autoplay: true,
//   margin: 20,
//   responsive: {
//     0: {
//       items: 1,
//     },
//     800: {
//       items: 2,
//     },
//     1000: {
//       items: 3,
//     },
//   },
// });



// $(".blog-carousel").owlCarousel({
//   margin: 10,
//   dots: false,
//   nav: true,
//   navText: ['<i class="fas fa-long-arrow-alt-left"></i>', '<i class="fas fa-long-arrow-alt-right"></i>'],

//   responsive: {
//     0: {
//       items: 1,
//     },

//     800: {
//       items: 2,
//     },

//     1000: {
//       items: 3,
//     }
//   }
// })