$(document).ready(function () {
  // Hamburger toggle
  $(".hamburger").click(function () {
    $(".nav-links").toggleClass("nav-toggle");
    $(".hamburger").toggleClass("hamburger-toggle");
  });

  $("nav a").click(function () {
    $(".nav-links").removeClass("nav-toggle");
    $(".hamburger").removeClass("hamburger-toggle");
  });

  // Go top of the website
  $("#go-top").click(function () {
    $("html").animate({ scrollTop: 0 }, 800);
  });

  // Scroll section
  $(".nav-links a, .footer-links a").click(function (e) {
    if (this.hash !== "") {
      e.preventDefault();

      const hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        500
      );
    }
  });

  // Nav bar stuck on top when scroll more that 100px

  const stickyNav = function () {
    if ($(window).scrollTop() > 100 || $(window).width() < 768) {
      $("header").addClass("sticky");
    } else {
      $("header").removeClass("sticky");
    }
  };

  $(window).scroll(function () {
    stickyNav();
  });

  stickyNav();

  const option = {
    root: null,
    threshold: 0,
    rootMargin: "-150px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        sectionHeader(entry);
      }
    });
  }, option);


  const observer1 = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        $(entry).addClass('animate__animated')
        entry.target.classList.add('animate__zoomInDown');
        console.log(entry)
      }
    });
  });

  for (var a of $('.hero-text')) {
    observer1.observe(a)
  }






  // Section header animation
  const sectionHeader = function (entry) {
    entry.target.classList.add("animate__flipInX", "opacity");
  };

  for (var i of $(".section-header")) {
    observer.observe(i);
  }


  function scrollActive() {
    const scrollY = window.pageYOffset;

    $("section").each(function (index, current) {
      const sectionTop = current.offsetTop - 50;
      sectionId = current.getAttribute("id");

      if (
        scrollY > sectionTop &&
        scrollY <= sectionTop + $(current).outerHeight()
      ) {
        $(".nav-links a[href*=" + sectionId + "]").addClass("active-link");
      } else {
        $(".nav-links a[href*=" + sectionId + "]").removeClass("active-link");
      }
    });
  }

  $(window).scroll(function () {
    scrollActive();
  });


  
});















// $(document).ready(function() {
//   const prg = function(n, ele) {
//     var count = 0
//     setInterval(() => {
//       if (count < n) {
//         count ++
//       } else {
//         clearInterval()
//       }
//       $(ele).html(count + "%")
//     }, 18)
//   }

// const progress = [85, 90, 70, 80]
//   for (var i = 0; i < 4; i++) {
//     prg(progress[i], $('.percent')[i])
//   }
// })
