Polymer('image-slider', {
  slider: null,
  ready: function() {
  },
  asyncCreateSlider: function() {
    this.async(this.createSlider, null, 10);
  },
  createSlider: function() {
    this.slider = new window.SimpleSlider(
        this.$.simpleslider,
        {autoPlay: false, startValue: 1, endValue: 1,
         transitionDelay: 6, transitionDuration: 0.7,
         transitionProperty: 'opacity', visibleValue: 1
        });
  },
  onPrevButtonTapped: function() {
    this.slider.prev();
  },
  onNextButtonTapped: function() {
    this.slider.next();
  }
});