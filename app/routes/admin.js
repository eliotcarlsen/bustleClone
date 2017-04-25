import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('story');
  },
  actions: {
    destroyStory(story) {
       story.destroyRecord();
       this.transitionTo('admin');
    },
    saveStory(params) {
      var newStory = this.store.createRecord('story', params);
      newStory.save();
      this.transitionTo('admin');
    },
    update(story, params) {
    Object.keys(params).forEach(function(key) {
      if(params[key]!==undefined) {
        story.set(key,params[key]);
      }
    });
    story.save();
    this.transitionTo('admin');
    },
  }
});
