<script>
import WhoWeAre from "../components/WhoWeAre.vue";
import AppHero from "../components/AppHero.vue";
import CompanySection from "../components/CompanySection.vue";
import ResultsSection from "../components/ResultsSection.vue";
import {store} from "../store.js";


    export default {
        components: {
            WhoWeAre,
            AppHero,
            CompanySection,
            ResultsSection
        },
        data() {
            return {
                store
            }
        }
        

    }   
</script>

<template>
    <AppHero :hero="store.heroSection[0]" class="app-hero-1"/>
    <WhoWeAre />
    <ResultsSection :results="store.results"/>
    <CompanySection />
</template>

<style scoped lang="scss">


.app-hero-1 {
    background-image: url(../assets/img/bg-about.jpg);
}
</style>



