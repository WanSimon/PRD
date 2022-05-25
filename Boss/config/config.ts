import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  layout: {},
  routes: routes,
  fastRefresh: {},

  proxy: 'development',
  // base: '/docs/',
  // publicPath: '/static/',
  // hash: true,
  // history: {
  //   type: 'hash',
  // },
});
