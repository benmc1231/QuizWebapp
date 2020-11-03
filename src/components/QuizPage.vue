<template>
    <div>
        <h1>Welcome to the quiz page</h1>
        <ul id="quizList">
            <p>{{msg}} Quiz</p>
            <button>History</button><br>
            <button>History</button><br>
            <button>History</button><br>
            <button>History</button><br>
            <router-link to="/"><button id="homeB">Click for Home</button></router-link>
         </ul>
    </div>

</template>

<script>
    export default {
        name: 'QuizPage',

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
        font-size:190%;
        width: 100%;
    }
    p{
        font-size:150%;
        margin: 6px;
        color: black;
    }
    #homeB{
        color: red;
    }

</style>