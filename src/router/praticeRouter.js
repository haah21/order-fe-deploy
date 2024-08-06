
import VuetifyComponent from "@/components/practice/VuetifyComponent.vue";
import ModelingComponent from "@/components/practice/ModelingComponent.vue";
import ConditionalComponent from "@/components/practice/ConditionalComponent.vue";
import HookComponent from "@/components/practice/HookComponent.vue";
import WatchUpdateComponent from "@/components/practice/WatchUpdateComponent.vue";
import AxiosTestComponent from "@/components/practice/AxiosTestComponent.vue";
import RouterTestComponent from "@/components/practice/RouterTestComponent.vue";


export const praticeRouter = [
    {
        path: '/practice/vuetify',
        name: 'VuetifyComponent',
        component: VuetifyComponent
    },
    {
        path: '/practice/modeling',
        name: 'ModelingComponent',
        component: ModelingComponent
    },
    {
        path: '/practice/conditional',
        name: 'ConditionalComponent',
        component: ConditionalComponent
    },
    {
        path: '/practice/hooks',
        name: 'HookComponent',
        component: HookComponent
    },
    {
        path: '/practice/hooks-watch-udate',
        name: 'WatchUpdateComponent',
        component: WatchUpdateComponent
    },
    {
        path: '/pratice/axiostest',
        name: 'AxiosTestComponent',
        component: AxiosTestComponent
    },
    {
        path: '/practice/routertest',
        name: 'RouterTestComponent',
        component: RouterTestComponent
    }
]