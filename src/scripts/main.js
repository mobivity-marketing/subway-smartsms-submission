// Smooth Scrolling Links

$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 500);
            return false;
        }
    }
});

// SVG Image Swap Function

function svgasimg() {
  return document.implementation.hasFeature(
    "http://www.w3.org/TR/SVG11/feature#Image", "1.1");
}

if (!svgasimg()){
  var e = document.getElementsByTagName("img");
  if (!e.length){
    e = document.getElementsByTagName("IMG");
  }
  for (var i=0, n=e.length; i<n; i++){
    var img = e[i],
        src = img.getAttribute("src");
    if (src.match(/svgz?$/)) {
      /* URL ends in svg or svgz */
      img.setAttribute("src", 
             img.getAttribute("data-fallback"));
    }
  }    
}

// Tabs Function

$('.selectors').on('click', 'li', function() {
  $('.selectors li.active').removeClass('active');
  $(this).addClass('active');
});

// Form Switch Function

$('.selectors').on('click', 'li.submissionForm', function() {
  $('#submissionForm').removeClass('inactive');
  $('#revisionForm').addClass('inactive');
});

$('.selectors').on('click', 'li.revisionForm', function() {
  $('#submissionForm').addClass('inactive');
  $('#revisionForm').removeClass('inactive');
});