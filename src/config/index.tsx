import devConfig from './localhost';
import prodConfig from './production';

const configs = {
  development: devConfig,
  production: prodConfig,
  localhost: devConfig,
};

type Env = keyof typeof configs;

const env = (import.meta.env.VITE_ENVIRONMENT as Env) || 'development';
const config = configs[env];

export default config;
