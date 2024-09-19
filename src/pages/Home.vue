<script>
import { store } from '../store.js';
import HeroSection from '../components/HeroSection.vue';
import PlaneSection from '../components/PlaneSection.vue';
import ServicesSection from '../components/ServicesSection.vue';
import ResultsSection from '../components/ResultsSection.vue';
import CarouselSection from '../components/CarouselSection.vue';
import BusinessSection from '../components/BusinessSection.vue';
import AppForm from '../components/AppForm.vue';
import AppExample from '../components/AppExample.vue';

export default {
    components: {
        HeroSection,
        PlaneSection,
        ServicesSection,
        ResultsSection,
        CarouselSection,
        BusinessSection,
        AppForm,
        AppExample
    },
    data() {
        return {
            store
        }
    }
}   
</script>

<template>

    <HeroSection />
    <PlaneSection />
    <ServicesSection :store="store.main_services" />
    <ResultsSection :results="store.results" />
    <CarouselSection :card="store.trusted_feedback" />
    <BusinessSection :contacts="store.contacts" />
    <div class="flex">
        <div id="appForm">
            <AppForm />
        </div>

        <div>
            <AppExample :contacts="store.contacts"/>
        </div>

    </div>

</template>

<style scoped lang="scss">

@use '../style/partials/mixins' as *;
@use '../style/partials/variables' as *;

    .flex {
        @include flex(row, space-evenly, center);
        background-image: url("https://nexgen.codings.dev/wp-content/uploads/2021/03/nexgen-background.png");
        background-position: center;
        background-size: contain;
        background-attachment: fixed;

        #appForm {
            width: 50%;
        }
    }
</style>
