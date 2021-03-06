import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  comment: DS.attr(),
  story: DS.belongsTo('story', { async: true })
});
