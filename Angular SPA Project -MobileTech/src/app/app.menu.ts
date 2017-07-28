import { MenuItem } from '../fw/services/menu.service';

export let initialMenuItems: Array<MenuItem> = [
    
    {
        text: 'Home',
        icon: 'glyphicon glyphicon-home',
        route: 'authenticated/home',
        submenu: null
    },
    {
        text: 'Brands',
        icon: 'glyphicon-flag',
        route: null,
        submenu: [
         
               
            {
                text: 'Top 3',
                icon: 'glyphicon-flag',
                route: 'authenticated/brand-list/3',
                submenu: null
            },
            {
                text: 'Top 10',
                icon: 'glyphicon-flag',
                route: 'authenticated/brand-detail',
                submenu: null
            },
            {
                text: 'Contact',
                icon: 'glyphicon-flag',
                route: 'authenticated/contact',
                submenu: null
            }
        ],
    },
     
];