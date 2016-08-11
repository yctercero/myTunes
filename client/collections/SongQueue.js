// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on("add", function(){
      if (this.length===1){
        this.playFirst();
      }
    })
  },

  playFirst: function(){
    return this.models[0];
  }

});