
// Get the modaaaaaaaaaaaaaaaaaaaaaaaaaaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaaaaaaaaaaaaaaaal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}// Get the modaaaaaaaaaaaaaaaaaaaaaaaaaaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaaaaaaaaaaaaaaaal 2222
var modal0 = document.getElementById('id00');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal0) {
        modal0.style.display = "none";
    }
}





const $window = $(window);
const $body = $('body');

class Slideshow {
  constructor(userOptions = {}) {
    const defaultOptions = {
      $el: $('.slideshow'),
      showArrows: false,
      showPagination: false,
      duration: 900,
      autoplay: false };


    let options = Object.assign({}, defaultOptions, userOptions);

    this.$el = options.$el;
    this.maxSlide = this.$el.find($('.js-slider-home-slide')).length;
    this.showArrows = this.maxSlide > 1 ? options.showArrows : false;
    this.showPagination = options.showPagination;
    this.currentSlide = 1;
    this.isAnimating = false;
    this.animationDuration = 1200;
    this.autoplaySpeed = options.duration;
    this.interval;
    this.$controls = this.$el.find('.js-slider-home-button');
    this.autoplay = this.maxSlide > 1 ? options.autoplay : false;

    this.$el.on('click', '.js-slider-home-next', event => this.nextSlide());
    this.$el.on('click', '.js-slider-home-prev', event => this.prevSlide());
    this.$el.on('click', '.js-pagination-item', event => {
      if (!this.isAnimating) {
        this.preventClick();
        this.goToSlide(event.target.dataset.slide);
      }
    });

    this.init();
  }

  init() {
    this.goToSlide(2);
    if (this.autoplay) {
      this.startAutoplay();
    }

    if (this.showPagination) {
      let paginationNumber = this.maxSlide;
      let pagination = '<div class="pagination"><div class="container">';

      for (let i = 0; i < this.maxSlide; i++) {
        let item = `<span class="pagination__item js-pagination-item ${i === 1 ? 'is-current' : ''}" data-slide=${i + 1}>${i + 1}</span>`;
        pagination = pagination + item;
      }

      pagination = pagination + '</div></div>';

      this.$el.append(pagination);
    }
  }

  preventClick() {
    this.isAnimating = true;
    this.$controls.prop('disabled', true);
    clearInterval(this.interval);

    setTimeout(() => {
      this.isAnimating = false;
      this.$controls.prop('disabled', false);
      if (this.autoplay) {
        this.startAutoplay();
      }
    }, this.animationDuration);
  }

  goToSlide(index) {
    this.currentSlide = parseInt(index);

    if (this.currentSlide > this.maxSlide) {
      this.currentSlide = 1;
    }

    if (this.currentSlide === 0) {
      this.currentSlide = this.maxSlide;
    }

    const newCurrent = this.$el.find('.js-slider-home-slide[data-slide="' + this.currentSlide + '"]');
    const newPrev = this.currentSlide === 1 ? this.$el.find('.js-slider-home-slide').last() : newCurrent.prev('.js-slider-home-slide');
    const newNext = this.currentSlide === this.maxSlide ? this.$el.find('.js-slider-home-slide').first() : newCurrent.next('.js-slider-home-slide');

    this.$el.find('.js-slider-home-slide').removeClass('is-prev is-next is-current');
    this.$el.find('.js-pagination-item').removeClass('is-current');

    if (this.maxSlide > 1) {
      newPrev.addClass('is-prev');
      newNext.addClass('is-next');
    }

    newCurrent.addClass('is-current');
    this.$el.find('.js-pagination-item[data-slide="' + this.currentSlide + '"]').addClass('is-current');
  }

  nextSlide() {
    this.preventClick();
    this.goToSlide(this.currentSlide + 1);
  }

  prevSlide() {
    this.preventClick();
    this.goToSlide(this.currentSlide - 1);
  }

  startAutoplay() {
    this.interval = setInterval(() => {
      if (!this.isAnimating) {
        this.nextSlide();
      }
    }, this.autoplaySpeed);
  }

  destroy() {
    this.$el.off();
  }}


(function () {
  let loaded = false;
  let maxLoad = 3000;

  function load() {
    const options = {
      showPagination: true };


    let slideShow = new Slideshow(options);
  }

  function addLoadClass() {
    $body.addClass('is-loaded');

    setTimeout(function () {
      $body.addClass('is-animated');
    }, 600);
  }

  $window.on('load', function () {
    if (!loaded) {
      loaded = true;
      load();
    }
  });

  setTimeout(function () {
    if (!loaded) {
      loaded = true;
      load();
    }
  }, maxLoad);

  addLoadClass();
})();
















$('.portale').click(function(){
  $('.pop-up').addClass('open');
});

$('.pop-up .closee').click(function(){
  $('.pop-up').removeClass('open');
});




/*llllllllllllllllllllllllllllllllllllllsssssssssssssssssssssssssddddddddddddddddddddddddddddddddddddddd*/
$('#awesomeness-reasonable').click(function(){
  $('.ah').text("lyser");
 });
$('#awesomeness-reasonable').click(function(){
      $('.bh').text("7 - 12 hours");
 });
$('#awesomeness-reasonable').click(function(){
      $('.ch').text("8$");
 });
$('#awesomeness-reasonable').click(function(){
      $('.dh').text("oral, sublingual..");
 });
$('#awesomeness-reasonable').click(function(){
      $('.eh').text("14 days charge");
 });
$('#awesomeness-reasonable').click(function(){
      $('.azzz').text("LSD");
 });
$('#awesomeness-reasonable').click(function(){
      $('.ssa').text("25 - 75 μg");
 });
$('#awesomeness-reasonable').click(function(){
      $('.ssb').text("75 - 150 μg");
 });
$('#awesomeness-reasonable').click(function(){
      $('.ssc').text("150 - 300 μg");
 });
$('#awesomeness-reasonable').click(function(){
      $('.ssd').text("300+ μg");
 });
/*ddddddddddddddddddddddddddddddddmmmmmmmmmmmmmmmmmmmmmmmmmmttttttttttttttttttttttttttttttt*/
$('#awesomeness-ridiculous').click(function(){
  $('.ah').text("triptamine");
 });
$('#awesomeness-ridiculous').click(function(){
      $('.bh').text("15 min");
 });
$('#awesomeness-ridiculous').click(function(){
      $('.ch').text("homemade");
 });
$('#awesomeness-ridiculous').click(function(){
      $('.dh').text("smoke");
 });
$('#awesomeness-ridiculous').click(function(){
      $('.eh').text("absent");
 });
$('#awesomeness-ridiculous').click(function(){
      $('.azzz').text("DMT");
 });
$('#awesomeness-ridiculous').click(function(){
      $('.ssa').text("10 - 20mg");
 });
$('#awesomeness-ridiculous').click(function(){
      $('.ssb').text("20 - 40 mg");
 });
$('#awesomeness-ridiculous').click(function(){
      $('.ssc').text("40 - 60 mg");
 });
$('#awesomeness-ridiculous').click(function(){
      $('.ssd').text("60+ mg");
 });
