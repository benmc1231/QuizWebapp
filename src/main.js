import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import NotFound from "./components/NotFound"
import QuizPage from "./components/QuizPage"
import TopBar from "./components/TopBar"
import SelectionArea from "./components/SelectionArea"


Vue.use(VueRouter);

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {path: '/', components: {default: SelectionArea, top: TopBar}},
    {path: '/:score', components: {default: SelectionArea, top: TopBar}},
    {path: '/quiz/:id', components: {default: QuizPage, top: TopBar}},
    {path: '*', component: NotFound},
  ],
  mode: 'history'
});


new Vue({
  router,
  render: h => h(App),

  data: {
    posts: null,
    results: [''],
  }

}).$mount('#app')
