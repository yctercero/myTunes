// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'ol',

  initialize: function() {
    this.render();
    this.listenTo(this.collection, "add remove", this.render);
  },

  render: function() {
    this.$el.children().detach();

    this.$el.append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
