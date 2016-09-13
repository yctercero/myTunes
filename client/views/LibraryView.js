// LibraryView.js - Defines a backbone view class for the music library.
var LibraryView = Backbone.View.extend({

  tagName: "ul",

  initialize: function() {
    this.render();
    this.collection.on('upCount', function(){
      this.render();
    }, this);
    this.collection.on('favorited', function(){
      this.render();
    }, this);
    this.collection.on('beingPlayed', function(){
      this.render();
    }, this);
  },

  render: function(){
    this.$el.children().detach();

    this.$el.append(
      this.collection.map(function(song){
        return new LibraryEntryView({model: song}).render();
      })
    );
  }

});
