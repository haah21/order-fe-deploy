<template>
    <div><h1>화면 라우팅 테스트</h1></div>
    <button @click="spaMove1">modeling 페이지로 이동(url)</button><br>
    <button @click="spaMove2">modeling 페이지로 이동(name)</button><br>
    <button @click="hrefMove">modeling 페이지로 이동(href)</button><br>
    <button @click="reloadPage">현재화면 reload</button>
</template>

<script>
export default{
    data(){
        return{
          
        }
    },
    //특정 변수값의 변경사항을 인지하는 hook함수
    watch:{
    //d인지하고자하는 변수값과 일치되는 함수명
        
    },

    //내가 정의한 함수 정의
    methods:{
        spaMove1(){
            this.$router.push("/pratice/modeling");
        },
        spaMove2(){
            this.$router.push({name:"ModelingComponent"});
        },
        hrefMove(){
            window.location.href='/pratice/modeling';
        },
        reloadPage(){
            window.location.reload();
        }
    }
}

</script>