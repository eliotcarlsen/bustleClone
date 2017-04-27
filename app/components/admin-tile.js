import Ember from 'ember';

export default Ember.Component.extend({
  model(){
    return this.store.findAll('story');
  },
  actions:{
    delete(story) {
      if (confirm('Are you sure you want to delete this story?')) {
        this.sendAction('destroyStory', story);
      }
    }
  }
});
