<template>
  <div class="hello">
    <h1>Quizzes with Vue</h1>
    <h3>Ben McLean</h3>
    <p id="date">{{currentDate}}</p>
    <p id="beat">Try beat your top score...</p>
    <address>
      Contact me:<br>
      0405596633<br>
      <a href="mailto:benmc1231@gmail.com" title="Click to send me an email">benmc1231@gmail.com</a><br>
      <a href="https://www.linkedin.com/in/ben-mclean-45806315b/" title="Click to go to my Linkdin">Linkdin</a>        
    </address>  
  </div>
</template>

<script>
export default {
  name: 'TopBar',
  props: {
    msg: String
  },
  computed:{
    currentDate: function(){
      var currentDay = new Date();
      var day = String(currentDay.getDate()).padStart(2, '0');
      var month = String(currentDay.getMonth() + 1).padStart(2, '0');
      var year = currentDay.getFullYear();
    
      currentDay = day + '/' + month + '/' + year;
      return "Todays date: " + currentDay
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
    position: fixed;    
    top: 0%; 
    width: 100%;
}
h3{
    color: grey;
    margin:0;
    position: fixed;    
    top: 11%; 
    width: 100%;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#ProfilePicture{
  width: 20%;
  float: right;
  border-radius: 50%;
}
#date{
    margin:0;
    position: fixed;    
    top: 15%; 
    width: 100%;
}
#beat{
    margin:0;
    position: fixed;    
    top: 27%; 
    width: 100%;
}
address{
    position: fixed;     
    text-align: center;    
    bottom: 2%; 
    width: 100%;
}
</style>
