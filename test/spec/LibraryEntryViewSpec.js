describe('LibraryEntryView', function() {
  var view, model;

  beforeEach(function() {
    model = new SongModel({
      artist: 'Fakey McFakerson',
      title: 'Never Gonna Mock You Up',
      url: 'example/url',
    });
    view = new LibraryEntryView({model: model});
    view.render();
  });

  xit ('plays clicked songs', function(){
    sinon.spy(SongModel.prototype, 'play');

    view.$el.children().first().click();
    expect(model.play).to.have.been.called;

    SongModel.prototype.play.restore();
  });

  it('queues clicked songs', function(){
    sinon.spy(SongModel.prototype, 'enqueue');

    view.$el.children().first().click();
    expect(model.enqueue).to.have.been.called;

    SongModel.prototype.enqueue.restore();
  });

});
