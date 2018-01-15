// src/app/auth/auth.config.ts

import { ENV } from '../core/env.config';

interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  SCOPE: string;
  NAMESPACE: string;
}

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: 'tQzRAT_G2GD6hEOIJloc9vptRSQ2kKkH',
  CLIENT_DOMAIN: 'auth00000.auth0.com',
  AUDIENCE: 'http://localhost:8000/api/', // likely http://localhost:8000/api/
  REDIRECT: `${ENV.BASE_URI}/callback`,
  SCOPE: 'openid profile',
  NAMESPACE: 'http://myapp.com/roles'
};
