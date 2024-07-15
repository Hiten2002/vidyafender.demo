// About slider

$(document).ready(function () {
  var backButton = '<img src="./assets/images/left-arrow.svg" alt="" class="left-arrow">';
  var nextButton = '<img src="./assets/images/right-arrow.svg" alt="" class="right-arrow">';


  // Initialize Slick slider with autoplay set to false
  var aboutSlider = $('.about-slider-card').slick({
    dots: false,
    infinite: false,
    autoplay: false,
    autoplaySpeed: 1000,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: backButton,
    nextArrow: nextButton,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          variableWidth: false,
        }
      },
      {
        breakpoint: 767,
        settings: {
          dots: false,
          infinite: false,
          autoplay: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: false,
        }
      },
      {
        breakpoint: 431,
        settings: {
          dots: false,
          infinite: false,
          autoplay: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        }
      },
    ],
  });

  // Function to start manual autoplay when the slider is in view
  function startAutoplayWithDelay() {
    setTimeout(() => {
      var totalSlides = aboutSlider.slick('getSlick').slideCount;
      var currentSlide = aboutSlider.slick('slickCurrentSlide');

      // Check if the current slide is the last one
      if (currentSlide === totalSlides - 1) {
        aboutSlider.slick('slickPause'); // Stop manual autoplay
      } else {
        aboutSlider.slick('slickNext'); // Move to the next slide
        setTimeout(startAutoplayWithDelay, 1000); // Adjust the delay as needed
      }
    }, 2000); // 5-second delay before starting autoplay
  }

  // Use Intersection Observer to detect when the slider enters the viewport
  const sliderObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startAutoplayWithDelay();
          // Stop observing once manual autoplay starts
          observer.disconnect();
        }
      });
    },
    { threshold: 1 } // Adjust threshold as needed
  );

  // Observe the slider
  sliderObserver.observe(document.querySelector('.about-slider-card'));
});

// Service slider

$(document).ready(function () {
  // Initialize Slick slider with autoplay set to false
  var serviceSlider = $('.services-slider').slick({
    dots: true,
    infinite: false,
    autoplay: false,
    autoplaySpeed: 1000,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          variableWidth: false,
        }
      },
      {
        breakpoint: 1025,
        settings: {
          infinite: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: false,
        }
      },
      {
        breakpoint: 571,
        settings: {
          infinite: true,
          autoplaySpeed: 2000,
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        }
      },
    ],
  });

  // Function to start manual autoplay when the slider is in view
  function startAutoplayWithDelay() {
    setTimeout(() => {
      var totalSlides = serviceSlider.slick('getSlick').slideCount;
      var currentSlide = serviceSlider.slick('slickCurrentSlide');

      // Check if the current slide is the last one
      if (currentSlide === totalSlides - 1) {
        serviceSlider.slick('slickPause'); // Stop manual autoplay
      } else {
        serviceSlider.slick('slickNext'); // Move to the next slide
        setTimeout(startAutoplayWithDelay, 1000); // Adjust the delay as needed
      }
    }, 2000); // 5-second delay before starting autoplay
  }

  // Use Intersection Observer to detect when the slider enters the viewport
  const sliderObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startAutoplayWithDelay();
          // Stop observing once manual autoplay starts
          observer.disconnect();
        }
      });
    },
    { threshold: 1 } // Adjust threshold as needed
  );

  // Observe the slider
  sliderObserver.observe(document.querySelector('.services-slider'));
});

// testimonial slider

// $(document).ready(function () {
//   var backButton = '<img src="./assets/images/left-arrow.svg" alt="" class="testimonial-left-arrow">';
//   var nextButton = '<img src="./assets/images/right-arrow.svg" alt="" class="testimonial-right-arrow">';

//   // Initialize Slick slider with autoplay set to false
//   var testimonialSlider = $('.testimonial-cards').slick({
//     dots: false,
//     infinite: false,
//     speed: 300,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     // variableWidth: false,
//     prevArrow: backButton,
//     nextArrow: nextButton,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           // variableWidth: false,
//         }
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           // variableWidth: false,
//         }
//       },
//       {
//         breakpoint: 435,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           // variableWidth: false,
//         }
//       },
//     ],
//   });


//   // Function to start manual autoplay when the slider is in view
//   function startAutoplayWithDelay() {
//     setTimeout(() => {
//       var totalSlides = testimonialSlider.slick('getSlick').slideCount;
//       var currentSlide = testimonialSlider.slick('slickCurrentSlide');

//       // Check if the current slide is the last one
//       if (currentSlide === totalSlides - 1) {
//         testimonialSlider.slick('slickPause'); // Stop manual autoplay
//       } else {
//         testimonialSlider.slick('slickNext'); // Move to the next slide
//         setTimeout(startAutoplayWithDelay, 1000); // Adjust the delay as needed
//       }
//     }, 2000); // 5-second delay before starting autoplay
//   }

//   // Use Intersection Observer to detect when the slider enters the viewport
//   const sliderObserver = new IntersectionObserver(
//     (entries, observer) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           startAutoplayWithDelay();
//           // Stop observing once manual autoplay starts
//           observer.disconnect();
//         }
//       });
//     },
//     { threshold: 1 } // Adjust threshold as needed
//   );

//   // Observe the slider
//   sliderObserver.observe(document.querySelector('.testimonial-cards'));
// });


$(document).ready(function () {
  // Initialize Slick slider with autoplay set to false
  $('.review-cards').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: $('.prev-button'),
    nextArrow: $('.next-button'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 435,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ],
  });

  // Click event handlers for custom navigation buttons
  $('.prev-button').click(function () {
    $('.review-cards').slick('slickPrev');
  });

  $('.next-button').click(function () {
    $('.review-cards').slick('slickNext');
  });
});




// Gallery

// function enableIsotope() {
//   // for each filters
//   $('.masonry-filters').each(function (i, buttonGroup) {
//     var $buttonGroup = $(buttonGroup);

//     // init isotope
//     var grid = $buttonGroup.data('target');
//     $(grid).imagesLoaded(function () {
//       $(grid).isotope({
//         itemSelector: '.grid-item',
//         layoutMode: 'packery'
//       })
//     });

//     // button click
//     $buttonGroup.on('click', 'li', function () {
//       var $this = $(this);
//       // filter isotope
//       var filterValue = $this.attr('data-filter');
//       $(grid).isotope({ filter: filterValue })
//       // change selected
//       $buttonGroup.find('.active').removeClass('active');
//       $this.addClass('active');
//     });
//   });

// };

// enableIsotope();



// $(document).ready(function () {
//   var $container = $('.grid').isotope({
//     itemSelector: '.grid-item',
//     percentPosition: false,
//     masonry: {
//       // use outer width of grid-sizer for columnWidth
//       columnWidth: '.grid-sizer'
//     }
//   });

//   var initShow = 12;
//   var counter = initShow;
//   var iso = $container.data('isotope');

//   function loadMore(toShow) {
//     $container.find(".hidden").removeClass("hidden");
//     var hiddenElems = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function (item) {
//       return item.element;
//     });
//     $(hiddenElems).addClass('hidden');
//     $container.isotope('layout');
//     if (hiddenElems.length == 0) {
//       $("#load-more").hide();
//     } else {
//       $("#load-more").show();
//     }
//   }

//   loadMore(initShow);

//   $container.after(`<div class="view-more-btn"><button class="main-btn gallery" id="load-more">View More</button></div>`);
//   $("#load-more").click(function () {
//     counter += initShow;
//     loadMore(counter);
//   });

//   $(".button-group").click(function () {
//     counter = initShow;
//     loadMore(counter);
//   });
// });

function enableIsotope() {
  // for each filters
  $('.masonry-filters').each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);

    // init isotope
    var grid = $buttonGroup.data('target');
    $(grid).imagesLoaded(function () {
      $(grid).isotope({
        itemSelector: '.grid-item',
        layoutMode: 'packery'
      })
    });

    // button click
    $buttonGroup.on('click', 'li', function () {
      var $this = $(this);
      // filter isotope
      var filterValue = $this.attr('data-filter');
      $(grid).isotope({ filter: filterValue });
      // change selected
      $buttonGroup.find('.active').removeClass('active');
      $this.addClass('active');
    });
  });
}

function reloadLayoutPeriodically($container) {
  setInterval(function () {
    $container.isotope('layout');
  }, 500); // adjust interval as needed
}

$(document).ready(function () {
  enableIsotope();

  var $container = $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: false,
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: '.grid-sizer'
    }
  });

  var initShow = 12;
  var counter = initShow;
  var iso = $container.data('isotope');

  function loadMore(toShow) {
    $container.find(".hidden").removeClass("hidden");
    var hiddenElems = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function (item) {
      return item.element;
    });
    $(hiddenElems).addClass('hidden');
    $container.isotope('layout');
    if (hiddenElems.length == 0) {
      $("#load-more").hide();
    } else {
      $("#load-more").show();
    }
  }

  loadMore(initShow);

  $container.after('<div class="view-more-btn"><button class="main-btn gallery" id="load-more">View More</button></div>');
  $("#load-more").click(function () {
    counter += initShow;
    loadMore(counter);
  });

  $(".button-group").click(function () {
    counter = initShow;
    loadMore(counter);
  });

  reloadLayoutPeriodically($container);
  $(window).resize(function () {
    $container.isotope('layout');
  });
});



// Mobile view gallery

// filter items on button click
$('.filter-button-group').on('click', 'li', function () {
  var filterValue = $(this).attr('data-filter');
  $('.grid').isotope({ filter: filterValue });
});

$(document).ready(function () {
  $('.filter-button-group li').click(function () {
    $('.filter-button-group li').removeClass('active');
    $(this).addClass('active');
  });
});

$(document).ready(function () {
  $("#sort-select").on('click', '.dropdown-item', function () {
    var selected = $(this).data("target");
    $(".sort-box").hide();
    if (selected === "all") {
      $(".sort-box").fadeIn();
    } else {
      $(".sort-box." + selected).fadeIn();
    }
  });
});

$('.sort-box:gt(11)').hide();
$('#view-more').click(function () {
  $('.sort-box:hidden').slice(0, 12).fadeIn();
  if ($('.sort-box:hidden').length === 0) {
    $('#view-more').hide();
  }
});

// value show in button

document.addEventListener('DOMContentLoaded', function () {
  // Get the button and dropdown items
  var button = document.querySelector('.dropdown-toggle');
  var dropdownItems = document.querySelectorAll('.dropdown-item');

  // Add click event listener to each dropdown item
  dropdownItems.forEach(function (item) {
    item.addEventListener('click', function () {
      // Update the button text with the selected value
      button.innerText = item.innerText;
    });
  });
});

// Form reset

// function resetForm() {
//   document.getElementById("contactForm").reset();
// }

// Active class / Navbar

function highlightActiveLinkOnScroll() {
  var scrollPosition = window.scrollY;

  // Loop through each nav link and check if its corresponding section is in the viewport
  document.querySelectorAll('.navbar-nav a').forEach(function (link) {
    var targetId = link.getAttribute('href').substring(1); // Remove the '#' from the href
    var targetSection = document.getElementById(targetId);

    if (targetSection) {
      var sectionTop = targetSection.offsetTop;
      var sectionBottom = sectionTop + targetSection.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    }
  });
}

// Initial highlight on page load
document.addEventListener('DOMContentLoaded', highlightActiveLinkOnScroll);

// Highlight the active link on scroll
window.addEventListener('scroll', highlightActiveLinkOnScroll);


$(document).ready(function () {
  $(".nav-link").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });
});

$(document).ready(function () {
  $(".main-btn").on("click", function () {
    // Close the navbar when the button is clicked
    $(".navbar-collapse").collapse("hide");
  });
});

$(document).ready(function () {
  // Close the navbar when clicking outside of it
  $(document).on("click", function (event) {
    var target = $(event.target);

    // Check if the click target is not inside the navbar
    if (
      !target.closest(".navbar").length &&
      !target.hasClass("navbar-toggler-icon") &&
      !target.hasClass("main-btn")
    ) {
      $(".navbar-collapse").collapse("hide");
    }
  });

  // Close the navbar when the "Contact Us" button is clicked
  $(".main-btn").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });
});

// counter

function startCounterAnimation() {
  $('.count').each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 2000,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    });
  });
}

// Use Intersection Observer to detect when the section comes into view
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Start the counter animation when the section is in view
      startCounterAnimation();
      // Unobserve the section to avoid multiple animations
      observer.unobserve(entry.target);
    }
  });
});

// Target the section and start observing
const counterSection = document.getElementById('counter-section');
observer.observe(counterSection);


window.onload = function () {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  document.getElementById('currentYear').textContent = currentYear;
};




document.addEventListener('DOMContentLoaded', () => {
  const testimonials = document.querySelectorAll('.testimonial-text');
  const popup = document.getElementById('popup');
  const popupText = document.getElementById('popup-text');
  const popupHeading = document.getElementById('popup-heading');
  const popupReview = document.getElementById('popup-review');
  const companyName = document.getElementById('company-name');
  const closePopup = document.querySelector('.close');

  const truncateText = (text, wordLimit) => text.split(' ').length > wordLimit ? text.split(' ').slice(0, wordLimit).join(' ') + '...' : text;

  testimonials.forEach(testimonial => {
    const fullText = testimonial.getAttribute('data-full-text');
    const truncatedText = truncateText(fullText);
    testimonial.innerHTML = truncatedText + ' <span class="read-more">....Read More</span>';

    testimonial.querySelector('.read-more').addEventListener('click', () => {
      popupHeading.textContent = testimonial.closest('.testimonial-card').querySelector('.testimonial-person-heading').textContent;
      popupReview.innerHTML = testimonial.closest('.testimonial-card').querySelector('.review').innerHTML;
      companyName.innerHTML = testimonial.closest('.testimonial-card').querySelector('.company').innerHTML;
      popupText.innerHTML = fullText;
      popup.style.display = 'block';
      document.body.classList.add('body-hidden');
    });
  });

  closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
    document.body.classList.remove('body-hidden');
  });

  window.addEventListener('click', event => {
    if (event.target === popup) popup.style.display = 'none';
  });
});
