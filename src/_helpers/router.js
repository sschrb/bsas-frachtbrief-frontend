import Vue from 'vue';
import Router from 'vue-router';

import LadelisteAnlegen from '../ladeliste/LadelisteAnlegen'
import HomePage from '../home/HomePage'
import LoginPage from '../login/LoginPage'
import RegisterPage from '../register/RegisterPage'
import HistoryPage from '../history/HistoryPage'
import ViewPage from '../view/ViewPage'
import AdminPage from '../admin/AdminPage'
import ViewLadeliste from '../view/ViewLadeliste'




Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: HomePage },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/history', component: HistoryPage },
    { path: '/verwaltung', component: AdminPage },
    { path: '/ladeliste', component: LadelisteAnlegen },
    { path: '/frachtbrief/:id', component: ViewPage, props: true, },
    { path: '/ladeliste/:id', component: ViewLadeliste, props: true, },

    // otherwise redirect to home
    { path: '*', redirect: '/' }
  ]
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/register'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
})