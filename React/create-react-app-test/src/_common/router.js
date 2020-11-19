import { lazy } from 'react';
import { Redirect } from 'react-router-dom';



export default [
    {
        path: '/',
        exact: true,
        component: lazy(() => import('@/page/app')),
    },
    {
        path: '/auth/login',
        exact: true,
        component: lazy(() => import('@/page/auth/login')),
    },
    {
        path: '/auth/logout',
        exact: true,
        component: lazy(() => import('@/page/auth/logout')),
    },
];
