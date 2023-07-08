<template>
  <HeaderComponent></HeaderComponent>
  <main class="container">
    <section class="left">
      <h1 class="text-xxl text-extrabold text-dark">Empower your time management and boost <span
          class="text-secundary text-xxl text-extrabold">efficiency</span></h1>
      <p class="text-lg">Stay organized, focused, and accomplish more with our innovative and user-friendly app designed
        to help you take charge of your time.</p>
      <RouterLink to="/signup">
        <button class="btn-primary">Get started</button>
      </RouterLink>
    </section>
    <section class="right">
      <svg xmlns="http://www.w3.org/2000/svg" width="383" height="383" viewBox="0 0 383 383" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M361.822 191.5C369.153 191.5 376.253 190.516 383 188.672C377.636 187.541 372.075 186.946 366.376 186.946H271.652C256.007 186.946 241.407 182.463 229.07 174.712C231.767 158.925 239.208 143.791 251.395 131.604L311.936 71.0645C317.12 65.8806 321.444 60.1634 324.912 54.0896C320.318 57.0821 315.965 60.5937 311.936 64.6242L244.955 131.604C233.892 142.667 220.399 149.82 206.196 153.063C196.939 139.993 191.5 124.029 191.5 106.795V21.1786C191.5 13.8475 190.516 6.74635 188.672 0C187.541 5.36336 186.946 10.9244 186.946 16.6245V111.349C186.946 126.994 182.463 141.593 174.712 153.93C158.925 151.233 143.791 143.791 131.604 131.604L71.0645 71.0645C65.8806 65.8806 60.1634 61.5552 54.0896 58.0885C57.0821 62.6808 60.5937 67.034 64.6242 71.0645L131.604 138.045C142.667 149.108 149.82 162.6 153.063 176.805C139.993 186.061 124.029 191.5 106.795 191.5H21.1786C13.8475 191.5 6.74633 192.484 0 194.328C5.3634 195.458 10.9245 196.054 16.6245 196.054H111.349C126.994 196.054 141.593 200.537 153.93 208.289C151.233 224.074 143.791 239.208 131.604 251.395L71.0645 311.936C65.8808 317.12 61.5554 322.836 58.0887 328.911C62.681 325.918 67.034 322.406 71.0645 318.376L138.045 251.395C149.108 240.332 162.6 233.18 176.805 229.936C186.061 243.008 191.5 258.971 191.5 276.206V361.822C191.5 369.153 192.484 376.253 194.328 383C195.458 377.636 196.054 372.075 196.054 366.376V271.65C196.054 256.005 200.537 241.407 208.289 229.07C224.074 231.767 239.208 239.208 251.395 251.395L311.936 311.936C317.12 317.12 322.836 321.444 328.911 324.912C325.918 320.318 322.406 315.965 318.376 311.936L251.395 244.955C240.332 233.892 233.18 220.399 229.938 206.196C243.008 196.939 258.971 191.5 276.206 191.5H361.822Z"
          fill="#302CF2" />
      </svg>
    </section>
  </main>
  <FooterComponent></FooterComponent>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

@Options({
  components: {
    HeaderComponent,
    FooterComponent
  },
})
export default class HomeView extends Vue { }
</script>
<style lang="scss" scoped>
.left{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: right;
}
</style>
