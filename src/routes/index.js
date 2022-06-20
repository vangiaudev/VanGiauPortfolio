import Home from '~/pages/Home';
import About from '~/pages/About';
import Project from '~/pages/Project';
import Resume from '~/pages/Resume';

export const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/about',
        component: About,
    },
    {
        path: '/project',
        component: Project,
    },
    {
        path: '/resume',
        component: Resume,
    },
];
