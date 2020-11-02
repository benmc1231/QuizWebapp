import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import NotFound from "./components/NotFound"
import QuizPage from "./components/QuizPage"

Vue.use(VueRouter);

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {path: '/', component: App},
    {path: '/quiz', component: QuizPage},
    {path: '*', component: NotFound},
  ],
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),

  //Make a new one for each of the ~5 quizzes available
  mounted: function(){
    axios.get('https://opentdb.com/api.php?amount=10').then(response=>this.posts = response.data)
    axios.get('https://opentdb.com/api.php?amount=10').then(response => console.log(response))
    .catch(this.posts = [{title: "No posts found"}])
    .finally(() => console.log('Data loading complete'));
  },

  data: {
    posts: null,
  }

}).$mount('#app')
