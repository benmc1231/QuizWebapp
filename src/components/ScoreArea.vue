<template>
  <div id="app">
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
  name: 'ScoreArea',
  components: {
    
  }
}
</script>

<style>
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
