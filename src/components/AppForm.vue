<script>

export default {
    data() {
        return {
            name: '',
            email: '',
            phone: '',
            errorMessage: '',
        }
    },
    methods: {
        sendMessage() {
            if (this.name === '') {
                this.errorMessage = 'One or more fields have an error. Please check and try again.';
            } else if(this.email === '') {
                this.errorMessage = 'One or more fields have an error. Please check and try again.';
            } else if(this.phone === '') {
                this.errorMessage = 'One or more fields have an error. Please check and try again.';
            }
            return this.errorMessage;
        }
    }

}
</script>

<template>
    <div class="container mb-5">
        <p class="ms_send fw-bold">SEND A MESSAGE</p>
        <h2 class="fw-bold fs-1">Get in Touch</h2>
        <p class="ms_respond">We will respond to your message as soon as possible</p>
        <div class="d-flex justify-content-between gap-4">
            <div class="flex-grow-1">
                <label for="name" class="form-label"></label>
                <input type="email" class="form-control" id="name" placeholder="Name" v-model="name">
                <label for="phone" class="form-label"></label>
                <input type="email" class="form-control" id="phone" placeholder="Phone" v-model="phone">

            </div>
            <div class="flex-grow-1">
                <label for="email" class="form-label"></label>
                <input type="email" class="form-control" id="email" placeholder="Email" v-model="email">
                <select class="form-control" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">Sales and Purchasing</option>
                    <option value="2">Finalcial and Accounts</option>
                    <option value="3">Human Resources</option>
                    <option value="3">Another Subjects</option>
                </select>
            </div>
        </div>
        <div class="mb-3 flex-grow-1">
            <label for="message" class="form-label"></label>
            <textarea class="form-control" id="message" rows="3" placeholder="Message"></textarea>
        </div>
        <div v-if="errorMessage" class="ms_error">{{ errorMessage }}</div>
        <button class="btn-prymary-color" @click="sendMessage">SEND</button>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/mixins.scss' as *;
@use '../style/partials/variables.scss' as *;

input,
textarea {
    background-color: $bg-form;
    color: $form-text;
    padding: 13px;
    border-radius: 3px;
}
select {
    background-color: $bg-form;
    color: $form-text;
    padding: 13px;
    border-radius: 3px;
    margin-top: 25px;
}

.ms_send {
    color: $primary-color;
}

.ms_respond {
    color: $form-text;
}

.ms_error {
    color: red;
    border: 1px solid red;
    padding: 5px;
    margin-bottom: 10px;
}
</style>