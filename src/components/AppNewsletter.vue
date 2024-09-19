<script>
export default {

}
</script>

<template>
    <section class="ms_newsletter container d-flex mb-3 mt-3">
        <div class="p-5 ps-0">
            <p class="ms_send fw-bold">NEWSLETTER</p>
            <h3 class="fs-1 fw-bold">Know First</h3>
            <p class="ms_respond">Follow closely and receive content about our company <br>and the news of the current
                market</p>
        </div>
        <div class="flex-grow-1 p-5 pe-0">
            <AppSubscribe />
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../style/partials/mixins.scss' as *;
@use '../style/partials/variables.scss' as *;

.ms_send {
    color: $primary-color;
}

.ms_respond {
    color: $form-text;
}
</style>