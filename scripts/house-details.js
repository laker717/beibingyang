Polymer('house-details', {
  ready: function() {
  },
  houseDetailsChanged: function() {
    this.images = this.houseDetails.images;
    this.name = this.houseDetails.name;
    this.description = this.houseDetails.description;
    document.querySelector("body /deep/ image-slider").asyncCreateSlider();
  }
});