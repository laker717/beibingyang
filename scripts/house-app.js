Polymer('house-app', {
  houses: [],
  page: "houselist",
  ready: function() {
    this.loadData();
  },
  loadData: function() {
    this.$.dataajax.url="data.json";
    this.$.dataajax.go();
  },
  dataLoaded: function(e) {
    console.log(e);
    this.houses = e.detail.response.houses;
  },
  selectedHouseChanged: function() {
    this.page = "housedetails";
  }
});