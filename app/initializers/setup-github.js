export function initialize(application) {
  application.inject('route', 'github', 'service:github');
  application.inject('component', 'github', 'service:github');
}

export default {
  name: 'setup-github',
  initialize
};
