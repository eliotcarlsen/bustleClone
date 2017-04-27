import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(story){
      if (confirm('Are you sure?')){
        this.sendAction('destroyStory', story);
      }
    },
    destroyComment(comment){
      this.sendAction('destroyComment', comment);
    }
  }
});
