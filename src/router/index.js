//创建一个路由器，并暴露出去

//第一步:引入createRouter
import {createRouter,createWebHistory} from 'vue-router'
//引入一个一个可能要呈现的组件
import person from '@/view/person.vue'
import diary from '@/view/diary.vue'
import program from '@/view/program.vue'
import share from '@/view/share.vue'
import main from '@/App.vue'

//第二步：创建路由器
const router =createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),//路由器的工作模式
    routes:[// 一个一个的路由规则
        {
            path: '/',
            redirect:'/person',
        },
        {
            path:'/person',
            component:person,
            name:'person',
            meta: { title: '个人主页' }
        },
        {
            path:'/diary',
            component:diary,
            name:'diary',
            meta: { title: '探店日记' }
        },
        {
            path:'/program',
            component:program,
            name:'program',
            meta: { title: '编程心得' }
        },
        {
            path:'/share',
            component:share,
            name:'share',
            meta: { title: '影音书分享' }
        }
    ]
})
router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'Sakura的个人主页'
    next()
})

//暴露出去router
export default router