export default ({
    path:'/film',
    name:'film',
    component: () => import('../../views/Film/Film'),
    // 子路由  nowplaying 正在热映  commingsoon 即将上映
    children:[
        {
            path:'nowplaying',
            component: () => import('../../views/Film/NowPlaying'),
        },
        {
            path:'comingsoon',
            component: () => import('../../views/Film/ComingSoon'),
        },
        {
            path:'/film',
            redirect:'nowplaying'
        }
    ]
})