import VueRouter from 'vue-router';
import Dashboard from './components/Dashboard';
import Home from './components/Home.vue';
import Register from './components/Register';
import Login from './components/Login';

import NotesList from './components/note/List';

const router = new VueRouter({
    routes: [{
        path: '/',
        name: 'home',
        component: Home
    },{
        path: '/register',
        name: 'register',
        component: Register,
        meta: {
            auth: false
        }
    },{
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            auth: false
        }
    },{
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        meta: {
            auth: true
        }
    },{
        path: '/notes',
        name: 'notes',
        component: NotesList,
        meta: {
            auth: true
        }
    }]
});

export default router;