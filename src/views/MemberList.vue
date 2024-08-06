<template>
    <v-container>
        <v-row justify="center">
            <v-col>
                <v-card-title class="text-center text-h5">
                    회원목록
                </v-card-title>
                <v-card-text>
                    <v-data-table
                    :headers="tableHeaders"
                    :items="memberList"
                    >

                    </v-data-table>
                </v-card-text>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import axios from 'axios';
export default{
    data(){
        return{
            tableHeaders:[{title:'ID', key:'id', align:'start'},{title:'이름', key:'name', align:'start'},{title:'EMAIL', key:'email',align:'start'}],
            memberList:[]
        }
    },
    async created(){
        //token header 가져오기
        // const token = localStorage.getItem('token');
        // const headers = {Authorization : `Bearer ${token}`};
        //{"headers" : {"Authorization": 'Bearer 토큰값'}} : 고정된 형식!
        // const response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/member/list`,{headers});//{"headers":headers}와 같음
        try{
        const response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/member/list`);
        this.memberList = response.data.result.content;
        }catch(e){
            console.log(e);
        }
    }
}
</script>

<style>
.text-center{
    text-align:center;
}
</style>