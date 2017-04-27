import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('story', params.story_id);
  },
  actions: {
    saveComment(params){
      var newComment = this.store.createRecord('comment', params);
      var story = params.story;
      story.get('comments').addObject(newComment);
      newComment.save().then(function(){
        return story.save();
      });
      this.transitionTo('article', story);
    },
    destroyComment(comment){
      comment.destroyRecord();
      this.transitionTo('article');
    },
    destroyStory(story){
      var comment_deletions = story.get('comments').map(function(comment){
        return comment.destroyRecord();
      });
      Ember.RSVP.all(comment_deletions).then(function(){
        return story.destroyRecord();
      });
      this.transitionTo('index');
    },
  }
});
