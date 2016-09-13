// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'li',

  collectionStatus: false,

  initialize: function(){
    this.model.on('favorited', function(){
      this.render();
    });
  },

  templatePausedNoFav: _.template('<div class="clearfix indSong"><i class="fa fa-play" aria-hidden="true"></i><i class="fa fa-plus-circle" aria-hidden="true"></i><div class="songBod"><h4><%= title %></h4><h5><%= artist %></h5></div><span><%= playCount %></span><span><i class="fa fa-heart-o" aria-hidden="true"></i></span></div>'),

  templatePausedFav: _.template('<div class="clearfix indSong"><i class="fa fa-play" aria-hidden="true"></i><i class="fa fa-plus-circle" aria-hidden="true"></i><div class="songBod"><h4><%= title %></h4><h5><%= artist %></h5></div><span><%= playCount %></span><span><i class="fa fa-heart" aria-hidden="true"></i></span></div>'),

  templatePlayedNoFav: _.template('<div class="clearfix indSong"><i class="fa fa-pause" aria-hidden="true"></i><i class="fa fa-plus-circle" aria-hidden="true"></i><div class="songBod"><h4><%= title %></h4><h5><%= artist %></h5></div><span><%= playCount %></span><span><i class="fa fa-heart-o" aria-hidden="true"></i></span></div>'),

  templatePlayedFav: _.template('<div class="clearfix indSong"><i class="fa fa-pause" aria-hidden="true"></i><i class="fa fa-plus-circle" aria-hidden="true"></i><div class="songBod"><h4><%= title %></h4><h5><%= artist %></h5></div><span><%= playCount %></span><span><i class="fa fa-heart" aria-hidden="true"></i></span></div>'),

  events: {
    'click .fa-plus-circle': function() {
      this.model.enqueue();
    },
    'click .fa-heart-o': function() {
      this.model.favorite();
    },
    'click .fa-heart': function() {
      this.model.favorite();
    },
    'click .fa-play': function() {
      this.model.play();
    },
    'click .fa-pause': function() {
      this.model.paused();
    }
  },

  render: function(){
    if (!this.model.get('favorited')) {
      if (!this.model.get('beingPlayed')) {
        return this.$el.html(this.templatePausedNoFav(this.model.attributes));
      } else {
        return this.$el.html(this.templatePlayedNoFav(this.model.attributes));
      }
    } else {
      if (!this.model.get('beingPlayed')) {
        return this.$el.html(this.templatePausedFav(this.model.attributes));
      } else {
        return this.$el.html(this.templatePlayedFav(this.model.attributes));
      }
    }
  }

});
