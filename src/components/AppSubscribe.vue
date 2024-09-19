<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            errorMessage: '',
        }
    },
    methods: {
        subscribe() {
            if (this.name === '') {
                this.errorMessage = 'One or more fields have an error. Please check and try again.';
            } else if(this.email === '') {
                this.errorMessage = 'One or more fields have an error. Please check and try again.';
            }   
            return this.errorMessage;
        }
    }
}
</script>

<template>
    <section class="">
        <div>
            <label for="name" class="form-label"></label>
            <input type="email" class="form-control" id="name" placeholder="Name" v-model="name">
            <label for="email" class="form-label"></label>
            <input type="email" class="form-control" id="email" placeholder="Email" v-model="email">
            <div v-if="errorMessage" class="ms_error">{{ errorMessage }}</div>
            <button class="btn-prymary-color mt-3" @click="subscribe">SUBSCRIBE</button>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../style/partials/mixins.scss' as *;
@use '../style/partials/variables.scss' as *;

input {
    border-radius: 3px;
    padding: 13px;
    background-color: $bg-form;
    color: $form-text;
}

.ms_error {
    color: red;
    border: 1px solid red;
    padding: 5px;
    margin-bottom: 10px;
    margin-top: 10px;
}
</style>