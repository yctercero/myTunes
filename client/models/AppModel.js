// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  collectionStatus: true,

  initialize: function(params){
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());

    //this.set('collectionStatus', false);
    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the function (this.set('currentSong', song)) would
    end up referring to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */
    params.library.on('enqueue', function(song){
      this.collectionStatus = false;
      var queue = this.get('songQueue');
      queue.add(song);
    }, this);

    params.library.on('dequeue', function(song){
      var queue = this.get('songQueue');
      console.log(queue);
      queue.remove(song);

      if( queue.length === 0 ){
        this.collectionStatus = true;
      }else{
        this.set('currentSong', queue.models[0]);
      }
    }, this)

    params.library.on('play', function(song){
      if( this.collectionStatus ){
        this.set('currentSong', song);
      }
    }, this);
  }

});
