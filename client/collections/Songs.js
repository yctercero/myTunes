// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function(){
    this.on('change:playCount', function(){
      this.trigger('upCount');
    }, this);

    this.on('change:favorited', function(){
      this.trigger('favorited');
    }, this);

    this.on('change:beingPlayed', function(){
      this.trigger('beingPlayed');
    }, this);
  }

});