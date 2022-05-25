// import type { IRoute } from 'umi';

// const routes: IRoute[] = [
//   {
//     exact: true,
//     path: '/',
//     // component: '@/pages/index',
//     menu: {
//       flatMenu: true,
//     },
//     routes: [
//       {
//         path: '/users',
//         // component: '@/pages/index',
//         routes: [
//           {
//             path: '/users',
//             redirect: '/users/list',
//             exact: true,
//           },

//           { path: '/users/list', component: '@/pages/UserList', exact: true },
//           {
//             path: '/users/:id',
//             component: '@/pages/UserDetail',
//             exact: true,
//           },
//           {
//             path: '/users/form',
//             component: '@/pages/UserForm',
//             exact: true,
//           },
//           {
//             path: '/users/form/:id',
//             component: '@/pages/UserForm',
//             exact: true,
//           },
//         ],
//       },
//     ],
//   },
// ];

// export default routes;

// const routes = [
//   {
//     path: '/',
//     component: '@/layouts/index',
//     routes: [
//       { path: '/list', component: '@/pages/index' },
//       { path: '/admin', component: '@/pages/UserDetail' },
//     ],
//   },
//   {
//     path: 'userform',
//     component: '@/pages/UserForm',
//   },
//   // { path: '/login', component: 'login' },
// ];
// export default routes;

const routes = [
  // { exact: true, path: '/index', redirect: '@/pages/index' },
  { path: '/users', redirect: '/users/list', exact: true },
  { path: '/users/list', component: '@/pages/UserList', exact: true },
  { path: '/users/detail/:id', component: '@/pages/UserDetail' },
  { ptah: '/users/form/:id', component: '@/pages/UserForm' },
];
export default routes;
