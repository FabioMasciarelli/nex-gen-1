<script>
import AppBusiness from "../components/AppBusiness.vue";
import AppExample from "../components/AppExample.vue";
import AppFormVue from "../components/AppForm.vue";
import AppHero from "../components/AppHero.vue";
import AppNewsletter from "../components/AppNewsletter.vue";
import AppSubscribe from "../components/AppSubscribe.vue";
import { store } from '../store.js';
export default {
    components: {
        AppFormVue, AppSubscribe,
        AppBusiness,
        AppHero,
        AppNewsletter,
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
    <!-- contact-us section -->
    <AppHero :hero="store.heroSection[1]" class="app-hero" />
    <!-- /contact-us section -->
    <div class="container">
        <div class="row">
            <div class="col mt-5">
                <!-- newsletter section -->
                <AppNewsletter />
                <!-- /newsletter section -->
            </div>

            <div class="col mt-5">
                <!-- subscribe section -->
                <AppSubscribe />
                <!-- /subscribe section -->
            </div>
        </div>
    </div>


    <!-- business section -->
    <AppBusiness :contacts="store.contacts" />
    <!-- /business section -->
    <div class="container bg">
        <div class="row">
            <div class="col-8">
                <!-- form section -->
                <AppFormVue />
                <!-- /form section -->
            </div>

            <div class="col">
                <AppExample :contacts="store.contacts" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/mixins.scss' as *;
@use '../style/partials/variables.scss' as *;

.app-hero {
    background-image: url(../assets/img/bg-1.jpg);
}

.bg {
    background-image: url("https://nexgen.codings.dev/wp-content/uploads/2021/03/nexgen-background.png");
    background-position: center;
    background-size: contain;
    background-attachment: fixed;
}
</style>