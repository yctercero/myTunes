// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());

    this.set('params', params);

    params.library.on('enqueue', function(song){
      var queue = this.get('songQueue');
      queue.add(song);
    }, this);

    params.library.on('play', function(song){
      this.set('currentSong', song);
    }, this);

    params.library.on('stop', function(song){
      this.set('currentSong', null);
    }, this);
  }

});
