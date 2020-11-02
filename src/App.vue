<template>
  <div id="app">
    <TopBar msg="Quizzes with Vue"/>
    <selection-area></selection-area>
    <score-area></score-area>
  </div>
</template>

<script>
import TopBar from './components/TopBar.vue'
import SelectionArea from './components/SelectionArea.vue'
import ScoreArea from './components/ScoreArea.vue'

export default {
  name: 'App',
  components: {
    TopBar,
    SelectionArea,
    ScoreArea
  }
}
</script>

<style>
#app {
  font-family: Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 20px;
}
</style>
