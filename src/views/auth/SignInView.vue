<template>
    <HeaderComponent></HeaderComponent>
    <main class="container">
        <section>
            <h1 class="text-xxl text-extrabold text-dark">Unlock your time potential with smart control</h1>
            <p class="text-lg">Hello again! We hope you've had a great day. Sign up to continue your journey and make the
                most out of your time</p>
        </section>
        <section class="form-signup">
            <section class="form-control">
                <label for="input-email" class="text-bold">Email Address</label>
                <input type="email" v-model="email"  id="input-email" placeholder="Enter your name">
            </section>
            <section class="form-control">
                <label for="input-password" class="text-bold">Password</label>
                <input type="password" v-model="password" id="input-password" placeholder="Enter your name">
            </section>
            <section class="form-control">
                <button class="btn-primary" @click="signIn()">Start</button>
            </section>
        </section>
    </main>
    <FooterComponent></FooterComponent>
</template>
<script lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import AuthService from '@/services/AuthService';
import User from '@/types/User.type';
export default {
    components: {
        HeaderComponent,
        FooterComponent
    },
    data() {
        return {
            name: '',
            username: '',
            email: '',
            password: ''
        }
    },
    methods: {
        signIn() {

            let user = {
                email: this.email,
                password: this.password
            }
            
            console.log({ user });

           AuthService.signIn(user as User)
                .then((res) => {
                    console.log(res.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        },

    },
}

</script>