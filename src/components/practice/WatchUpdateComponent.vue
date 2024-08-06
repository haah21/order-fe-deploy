<template>
    <div><h1>watch update 예제</h1></div>
    <div>>count : {{ count }}</div>
    <button @click="incrementCount">increment count</button>
    <div><h1>div update 예제</h1></div>
    <div>message : {{message}}</div>
    <button @click="updateMessage">update message</button>
</template>

<script>
export default{
    data(){
        return{
          count : 0,
          message: "hello java"
        }
    },
    //특정 변수값의 변경사항을 인지하는 hook함수
    watch:{
    //d인지하고자하는 변수값과 일치되는 함수명
        count(){
            alert("count 값 변경")
        }
    },
    //dom 객체(화면)의 변경사항을 인지하는 hook함수
    updated(){
        alert("dom 요소변경")
    },
    //내가 정의한 함수 정의
    methods:{
        incrementCount(){
            this.count++;
        },
        updateMessage(){
            this.message = "hello python"
        }
    }
}

</script>