<template>
    <div>
        <h1>Welcome to the quiz page</h1>
        <!--Need to make this quizName take Correct score and put it in SelectionArea.vue-->
        <router-link to="/"><button id="homeB">Click for Home</button></router-link>
        <ul id="quizList">
            <p id="quizName">{{$route.params.id}}</p>
            <p>{{results[0]["question"]}}</p>
            <button class="button1" @click="getResult('button1', 'True')">True</button><button class="button1" @click="getResult('button1', 'False')">False</button>
            <p>{{results[1]["question"]}}</p>  
            <button class="button2" @click="getResult('button2', 'True')">True</button><button class="button2" @click="getResult('button2', 'False')">False</button>    
            <p>{{results[2]["question"]}}</p>  
            <button class="button3" @click="getResult('button3', 'True')">True</button><button class="button3" @click="getResult('button3', 'False')">False</button>    
            <p>{{results[3]["question"]}}</p> 
            <button class="button4" @click="getResult('button4', 'True')">True</button><button class="button4" @click="getResult('button4', 'False')">False</button>    
            <p>{{results[4]["question"]}}</p>  
            <button class="button5" @click="getResult('button5', 'True')">True</button><button class="button5" @click="getResult('button5', 'False')">False</button>    
            <p>{{results[5]["question"]}}</p>  
            <button class="button6" @click="getResult('button6', 'True')">True</button><button class="button6" @click="getResult('button6', 'False')">False</button>    
            <p>{{results[6]["question"]}}</p>  
            <button class="button7" @click="getResult('button7', 'True')">True</button><button class="button7" @click="getResult('button7', 'False')">False</button>    
            <p>{{results[7]["question"]}}</p>  
            <button class="button8" @click="getResult('button8', 'True')">True</button><button class="button8" @click="getResult('button8', 'False')">False</button>    
            <p>{{results[8]["question"]}}</p>  
            <button class="button9" @click="getResult('button9', 'True')">True</button><button class="button9" @click="getResult('button9', 'False')">False</button>    
            <p>{{results[9]["question"]}}</p>  
            <button class="button10" @click="getResult('button10', 'True')">True</button><button class="button10" @click="getResult('button10', 'False')">False</button>    
         </ul>
        <h1 id="score">Your score = {{Correct}}</h1>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'QuizPage',    
    data: function(){
        return{
            results: [''],
            url: '',
            Correct: 0,
        }
    },
    methods: {
        getResult(id, boolResult){
            var elems = document.getElementsByClassName(id);
            for(var i = 0; i < elems.length; i++) {
                elems[i].disabled = true;
            }
            //check which button and if correct, if correct, increase the score by 1
            switch(id){
                case "button1":
                    if(boolResult == this.results[0]["correct_answer"]){
                        console.log("Your answer was correct!");
                        this.Correct += 1;
                        if(boolResult == "True"){
                            elems[0].style.backgroundColor = "green";
                        }
                        else{
                            elems[1].style.backgroundColor = "green";
                        }
                    }
                    else{
                        console.log("Your answer was wrong");
                        if(boolResult == "True"){
                            elems[0].style.backgroundColor = "red";
                        }
                        else{
                            elems[1].style.backgroundColor = "red";
                        }
                    }                    
                    break;
                case "button2":
                    if(boolResult == this.results[1]["correct_answer"]){
                        console.log("Your answer was correct!");
                        this.Correct += 1;
                        if(boolResult == "True"){
                            elems[0].style.backgroundColor = "green";
                        }
                        else{
                            elems[1].style.backgroundColor = "green";
                        }
                    }
                    else{
                        console.log("Your answer was wrong");
                        if(boolResult == "True"){
                            elems[0].style.backgroundColor = "red";
                        }
                        else{
                            elems[1].style.backgroundColor = "red";
                        }
                    } 
                    break;
                case "button3":
                    if(boolResult == this.results[2]["correct_answer"]){
                        console.log("Your answer was correct!");
                        this.Correct += 1;
                        if(boolResult == "True"){
                            elems[0].style.backgroundColor = "green";
                        }
                        else{
                            elems[1].style.backgroundColor = "green";
                        }
                    }
                    else{
                        console.log("Your answer was wrong");
                        if(boolResult == "True"){
                            elems[0].style.backgroundColor = "red";
                        }
                        else{
                            elems[1].style.backgroundColor = "red";
                        }
                    } 
                    break;                
                case "button4":
                    if(boolResult == this.results[3]["correct_answer"]){
                        console.log("Your answer was correct!");
                        this.Correct += 1;
                        if(boolResult == "True"){
                            elems[0].style.backgroundColor = "green";
                        }
                        else{
                            elems[1].style.backgroundColor = "green";
                        }
                    }
                    else{
                        console.log("Your answer was wrong");
                        if(boolResult == "True"){
                            elems[0].style.backgroundColor = "red";
                        }
                        else{
                            elems[1].style.backgroundColor = "red";
                        }
                    } 
                    break;
                case "button5":
                    if(boolResult == this.results[4]["correct_answer"]){
                        console.log("Your answer was correct!");
                        this.Correct += 1;
                        if(boolResult == "True"){
                            elems[0].style.backgroundColor = "green";
                        }
                        else{
                            elems[1].style.backgroundColor = "green";
                        }
                    }
                    else{
                        console.log("Your answer was wrong");
                        if(boolResult == "True"){
                            elems[0].style.backgroundColor = "red";
                        }
                        else{
                            elems[1].style.backgroundColor = "red";
                        }
                    } 
                    break;
                case "button6":
                    if(boolResult == this.results[5]["correct_answer"]){
                        console.log("Your answer was correct!");
                        this.Correct += 1;
                        if(boolResult == "True"){
                            elems[0].style.backgroundColor = "green";
                        }
                        else{
                            elems[1].style.backgroundColor = "green";
                        }
                    }
                    else{
                        console.log("Your answer was wrong");
                        if(boolResult == "True"){
                            elems[0].style.backgroundColor = "red";
                        }
                        else{
                            elems[1].style.backgroundColor = "red";
                        }
                    } 
                    break;
                case "button7":
                    if(boolResult == this.results[6]["correct_answer"]){
                        console.log("Your answer was correct!");
                        this.Correct += 1;
                        if(boolResult == "True"){
                            elems[0].style.backgroundColor = "green";
                        }
                        else{
                            elems[1].style.backgroundColor = "green";
                        }
                    }
                    else{
                        console.log("Your answer was wrong");
                        if(boolResult == "True"){
                            elems[0].style.backgroundColor = "red";
                        }
                        else{
                            elems[1].style.backgroundColor = "red";
                        }
                    } 
                    break;
                case "button8":
                    if(boolResult == this.results[7]["correct_answer"]){
                        console.log("Your answer was correct!");
                        this.Correct += 1;
                        if(boolResult == "True"){
                            elems[0].style.backgroundColor = "green";
                        }
                        else{
                            elems[1].style.backgroundColor = "green";
                        }
                    }
                    else{
                        console.log("Your answer was wrong");
                        if(boolResult == "True"){
                            elems[0].style.backgroundColor = "red";
                        }
                        else{
                            elems[1].style.backgroundColor = "red";
                        }
                    } 
                    break;              
                case "button9":
                    if(boolResult == this.results[8]["correct_answer"]){
                        console.log("Your answer was correct!");
                        this.Correct += 1;
                        if(boolResult == "True"){
                            elems[0].style.backgroundColor = "green";
                        }
                        else{
                            elems[1].style.backgroundColor = "green";
                        }
                    }
                    else{
                        console.log("Your answer was wrong");
                        if(boolResult == "True"){
                            elems[0].style.backgroundColor = "red";
                        }
                        else{
                            elems[1].style.backgroundColor = "red";
                        }
                    } 
                    break;
                case "button10":
                    if(boolResult == this.results[9]["correct_answer"]){
                        console.log("Your answer was correct!");
                        this.Correct += 1;
                        if(boolResult == "True"){
                            elems[0].style.backgroundColor = "green";
                        }
                        else{
                            elems[1].style.backgroundColor = "green";
                        }
                    }
                    else{
                        console.log("Your answer was wrong");
                        if(boolResult == "True"){
                            elems[0].style.backgroundColor = "red";
                        }
                        else{
                            elems[1].style.backgroundColor = "red";
                        }
                    } 
                    break;
            }
        }
    },
    //Quiz subject directs axios to open an api link for that subject
    mounted: function(){
        if (this.$route.params.id == "General"){
            this.url = "https://opentdb.com/api.php?amount=10&category=9&type=boolean"
        }
        if (this.$route.params.id == "History"){
            this.url = "https://opentdb.com/api.php?amount=10&category=23&type=boolean"
        }
        if (this.$route.params.id == "Politics"){
            this.url = "https://opentdb.com/api.php?amount=10&category=24&type=boolean"
        }
        if (this.$route.params.id.trim() == "Vehicles"){
            this.url = "https://opentdb.com/api.php?amount=10&category=28&type=boolean"
        }
        if (this.$route.params.id == "Music"){
            this.url = "https://opentdb.com/api.php?amount=10&category=12&type=boolean"
        }
        if (this.$route.params.id == "Science"){
            this.url = "https://opentdb.com/api.php?amount=10&category=17&type=boolean"
        }
        axios.get(this.url).then(response=>response.data).then(data=>{
            this.results=data.results; 
            console.log(this.results);
            })
        .catch(this.posts = [{title: "No questions found"}])
        .finally(() => {console.log('Data loading complete'); console.log(this.results[0]); console.log(this.results[1]); console.log(typeof(this.results))});
    }
  }
</script>

<style scoped>
    h1{
        position: fixed;     
        text-align: center;    
        bottom: 70%; 
        width: 100%;
    }
    #quizList{
        border-collapse: collapse;
        table-layout: fixed;
        background-color: grey;
        width: 40%;
        height: 42%;
        left: 30%;
        top: 29%;
        padding: 0;
        position: fixed;     
        float: center;
        overflow: auto;
    }
    button{
        font-size:140%;
        width: 50%;
    }
    #quizName{
        font-size:190%;
        margin: 3px;
        color: black;
        background-color: blue;
    }
    #homeB{
        color: red;
        left: 45%;
        bottom: 20%;
        width: 10%;
        position: fixed;     
        font-size:100%;

    }
    p{
       font-size: 18px; 
    }
    #score{
        left: 70%;
        bottom: 20%;
        width: 20%;
        position: fixed; 
        color: white;    
    }

</style>