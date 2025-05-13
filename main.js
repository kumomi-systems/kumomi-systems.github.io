import { createApp } from 'vue';
import { createWebHashHistory, createRouter } from 'vue-router'

import App          from "@/App.vue";
import PageNotFound from "@/PageNotFound.vue";

import AboutView    from "@/pages/About.vue";
import ContactView  from "@/pages/Contact.vue";
import PeopleView   from "@/pages/People.vue";
import ProjectView  from "@/pages/projects/Project.vue";
import ProjectsView from "@/pages/projects/Projects.vue";
import SupportView  from "@/pages/Support.vue";

const routes = [
  { path: '/',                component: AboutView },
  { path: '/about',           component: AboutView },
  { path: '/contact',         component: ContactView },
  { path: '/people',          component: PeopleView },
  { path: '/projects',        component: ProjectsView },
  { path: '/projects/:name',  component: ProjectView },
  { path: '/support',         component: SupportView },
  { path: '/:catchAll(.*)',   component: PageNotFound },
]

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth'
      };
    }
    return { x: 0, y: 0 };
  },
  routes,
});

createApp(App)
  .use(router)
  .mount('#app');