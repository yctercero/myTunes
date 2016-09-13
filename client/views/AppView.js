// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});

    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
    }, this);

    this.model.get('currentSong').on('change:beingPlayed', function(model){
      console.log("I was paused");
    });
  },

  render: function(){
    $('main').height(window.innerHeight);
    $('aside').height(window.innerHeight);
    $('aside').append(this.songQueueView.$el);
    $('#player').append(this.playerView.$el);
    $('main section').append('<h2>Library</h2>');
    $('main section').append(this.libraryView.$el);
  }

});
