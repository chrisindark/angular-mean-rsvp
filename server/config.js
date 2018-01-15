// server/config.js

module.exports = {
  AUTH0_DOMAIN: 'auth00000.auth0.com',
  AUTH0_API_AUDIENCE: 'http://localhost:8000/api/', /* likely 'http://localhost:8000/api/' */
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost/mean-rsvp',
  NAMESPACE: 'http://myapp.com/roles'
};
