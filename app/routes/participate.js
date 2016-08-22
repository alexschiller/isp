import Ember from 'ember';
import WarnOnExitRouteMixin from 'exp-player/mixins/warn-on-exit-route';


export default Ember.Route.extend(WarnOnExitRouteMixin, {
  _experiment: null,
  _session: null,
  store: Ember.inject.service(),
  currentUser: Ember.inject.service(),

  _getExperiment() {
    return this.store.find('experiment', '578937f93de08a003bf381ad');
  },
  _getSession(params, experiment) { // jshint ignore: line
    return this.get('currentUser').getCurrentUser().then(([account, profile]) => {
      return account.pastSessionsFor(experiment, profile).then(function(pastSessions) {
        var session;
        if (pastSessions === []) {
            session = this.store.createRecord(experiment.get('sessionCollectionId'), {
                experimentId: experiment.id,
                profileId: profile.get('profileId'),
                completed: false,
                feedback: '',
                hasReadFeedback: '',
                expData: {},
                sequence: []
            });
        } else {
          session = pastSessions[0];
        }
        return session;
      });
    });
  },
  model(params) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      this._getExperiment(params).then((experiment) => {
        this._getSession(params, experiment).then((session) => {
          this.set('_experiment', experiment);
          session.set('experimentVersion', '');
          session.save().then(() => {
            resolve(session);
          });
        });
    }).catch(reject);
  });
  },
  setupController(controller, session) {
    this._super(controller, session);

    controller.set('experiment', this.get('_experiment'));
    controller.set('session', session);
    controller.set('pastSessions', []);
  }
});