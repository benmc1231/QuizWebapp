<template>
  <div id="app">
    <ul id="quizList">
        <button v-on:click="enterQuiz('General')">General knowledge</button><br>
        <button v-on:click="enterQuiz('History')">History</button><br>
        <button v-on:click="enterQuiz('Politics')">Politics</button><br>
        <button v-on:click="enterQuiz('Vehicles')">Vehicles</button><br>
        <button v-on:click="enterQuiz('Music')">Music</button><br>
        <button v-on:click="enterQuiz('Science')">Science and Nature</button><br>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'SelectionArea',
  components: {
    
  },
  data: function(){
    return{
      General: null,
    }
  },
  methods:{
    enterQuiz: function(quiz){
      if (quiz == 'General'){
        console.log("General")
        this.$router.push('/quiz')       }
      if (quiz=='History'){
        console.log("History")

      }
      if (quiz=='Politics'){
        console.log("Politics")
      }
      if (quiz=='Vehicles'){
        console.log("Vehicles")
      }
      if (quiz=='Music'){
        console.log("Music")
      }
      if (quiz=='Science'){
        console.log("Science")
      }

    }     
    
  }
}
</script>

<style>
#quizList{
  border-collapse: collapse;
  table-layout: fixed;
  background-color: grey;
  width: 30%;
  height: 42%;
  left: 30%;
  top: 29%;
  padding: 0;
  position: fixed;     
  float: center;
  overflow: auto;
}
button{
  font-size:190%;
  width: 100%
}

</style>
