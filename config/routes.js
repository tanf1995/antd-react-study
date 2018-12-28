let routeList = [
    {
        path: '/',
        component: '../layouts/BasicLayout',
        routes: [
            {
                path: '/',
                redirect: '/dashboard'
            },
            {
                path: '/dashboard',
                component: './dashboard/Dashboard',
                title: "dashboard",
                icon: 'dashboard',
                isShow: true
            },
            {
                path: '/user',
                component: './user/User',
                title: "用户管理",
                icon: 'smile',
                isShow: true
            },
            {
                path: '/post',
                component: './post/Post',
                title: "文章管理",
                icon: 'profile',
                isShow: true
            },
            {
                path: '/chart',
                title: "Charts",
                icon: 'code',
                routes: [
                    {
                        path: "/chart/ECharts",
                        component: "./chart/ECharts/ECharts",
                        title: "ECharts",
                        icon: 'picture',
                    },
                    {
                        path: "/chart/highCharts",
                        component: "./chart/highCharts/HighCharts",
                        title: "HighCharts",
                        icon: 'picture',
                    },
                    {
                        path: "/chart/Recharts",
                        component: "./chart/recharts/Recharts",
                        title: "Recharts",
                        icon: 'picture',
                    }
                ],
                isShow: true
            }
        ]
    }
]


export default routeList;