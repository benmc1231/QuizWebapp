<template>
  <div>
    <ul id="quizList">
        <button v-on:click="enterQuiz('General')">General knowledge</button><br>
        <button v-on:click="enterQuiz('History')">History</button><br>
        <button v-on:click="enterQuiz('Politics')">Politics</button><br>
        <button v-on:click="enterQuiz('Vehicles')">Vehicles</button><br>
        <button v-on:click="enterQuiz('Music')">Music</button><br>
        <button v-on:click="enterQuiz('Science')">Science and Nature</button><br>
    </ul>
        <div id = "scoreArea">
        <p id="score">0/10</p>
        <p id="score">0/10</p>
        <p id="score">0/10</p>
        <p id="score">0/10</p>
        <p id="score">0/10</p>
        <p id="score">0/10</p>

    </div> 
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
        this.$router.push('/quiz/General')
        }
      if (quiz=='History'){
        this.$router.push('/quiz/History')
      }
      if (quiz=='Politics'){
        this.$router.push('/quiz/Politics')
      }
      if (quiz=='Vehicles'){
        this.$router.push('/quiz/Vehicles')
      }
      if (quiz=='Music'){
        this.$router.push('/quiz/Music')
      }
      if (quiz=='Science'){
        this.$router.push('/quiz/Science')
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
#score{
    font-size:190%;
    margin: 6px;
    color: black;
}
#scoreArea{
    border-collapse: collapse;
    table-layout: fixed;
    background-color: grey;
    width: 10%;
    height: 42%;
    left: 60%;
    top: 31.6%;
    padding: 0;
    position: fixed;     
    float: center;
    overflow: auto;
}

</style>
