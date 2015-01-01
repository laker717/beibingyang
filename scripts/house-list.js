Polymer('house-list', {
  ready: function() {
  },
  dataChanged: function() {
    console.log(this.data);
  },
  onHouseSelected: function(e) {
    this.selectedHouse = e.target.templateInstance.model.house;
  }
});