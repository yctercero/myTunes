// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  initialize: function(){
    this.set('playCount', 0);
    this.set('favorited', false);
    this.set('beingPlayed', false);
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
    if (this.get('beingPlayed')) {
      this.set('beingPlayed', false);
    } else {
      this.set('beingPlayed', true);
    }
  },

  paused: function(){
    this.set('beingPlayed', false);
    this.trigger('paused', this);
  },

  enqueue: function(){
    this.trigger('enqueue', this);
  },

  dequeue: function(){
    this.trigger('dequeue', this);
  },

  ended: function(){
    this.set('playCount', this.get('playCount') + 1);
    this.trigger('upCount');
    this.trigger('ended', this);
  },

  favorite: function(){
    if(this.get('favorited')){
      this.set('favorited', false);
    }else{
      this.set('favorited', true);
    }
    this.trigger('favorite', this);
  }

});
