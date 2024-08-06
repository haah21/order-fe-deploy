<template>
<v-container>
    <v-row justify="center">
        <!-- 화면 크기가 small 이상일때 : sm -->
         <!-- 화면크기가 medium 이상일때 : md -->
        <v-col cols="12" sm="4" md="6">
            <v-card-title class="text-h5 text-center">
                회원가입
            </v-card-title>
            <v-card-text>
                <v-form @submit.prevent="memberCreate">
                    <v-text-field
                    label="이름"
                    v-model="name"
                    prepend-icon="mdi-account"
                    required></v-text-field>

                    <v-text-field
                    label="email"
                    v-model="email"
                    prepend-icon="mdi-email"
                    required></v-text-field>

                    <v-text-field
                    label="password"
                    v-model="password"
                    prepend-icon="mdi-lock"
                    required></v-text-field>

                    <v-text-field
                    label="phone"
                    v-model="phone"
                    prepend-icon="mdi-phone"
                    required></v-text-field>

                    <v-text-field
                    label="age"
                    v-model="age"
                    prepend-icon="mdi-calendar"
                    required></v-text-field>
                
                    <v-text-field
                    label="도시"
                    v-model="city"
                    prepend-icon="mdi-city"></v-text-field>

                    <v-text-field
                    label="상세주소"
                    v-model="street"
                    prepend-icon="mdi-home"></v-text-field>

                    <v-text-field
                    label="우편번호"
                    v-model="zipcode"
                    prepend-icon="mdi-mailbox"></v-text-field>        
                
                    <!-- block은 부모 컨테이너 너비만큼을 꽉 채우는것 -->
                    <v-btn type="submit" color="primary" block>등록</v-btn>
                    
                </v-form>
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
            name: "",
            email: "",
            password: "",
            phone: "",
            age: "",
            city: "",
            street: "",
            zipcode: "",
        }
    },
    methods:{
        async memberCreate(){
            try{
                const registerData = {
                name: this.name,
                email: this.email,
                password: this.password,
                phone: this.phone,
                age: this.age,
                address:{
                    city: this.city,
                    street: this.street,
                    zipcode: this.zipcode}
                };
                //await 키워드 필요(정상 완료 확인을 위해)
                //axios : 비동기 동작 -> post(성공) -> 다른 화면으로 튕겨주기 -> login 화면으로
                await axios.post(`${process.env.VUE_APP_API_BASE_URL}/member/create`, registerData);
                this.$router.push("/");
            }catch(e){
                //이메일 중복, 비밀번호
                const status_message = e.response.data.status_message;
                console.log(status_message);
                alert(status_message);
            }
            
        }
    }
}
</script>