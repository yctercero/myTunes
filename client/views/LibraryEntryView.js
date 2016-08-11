// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'li',

  collectionStatus: false,

  template: _.template('<div class="clearfix indSong"><i class="fa fa-play" aria-hidden="true"></i><i class="fa fa-plus-circle" aria-hidden="true"></i><div class="songBod"><h4><%= title %></h4><h5><%= artist %></h5></div></div>'),

  events: {
    'click': function() {
      // this.model.play();
      this.model.enqueue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
