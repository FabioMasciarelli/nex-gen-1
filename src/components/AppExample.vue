<script>
export default {
    props: {
        contacts: Object,
    }
}
</script>

<template>
    <h4 class="fw-bold ms-5">Example Inc.</h4>
    <p class="ms-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <ul>
        <li>
            <i class="fa-solid fa-phone"></i>
            <span>{{ contacts.telephoneNumber }}</span>
        </li>

        <li>
            <i class="fa-solid fa-envelope"></i>
            <span>{{ contacts.secondaryMailAdress }}</span>
        </li>

        <li>
            <i class="fa-solid fa-location-dot"></i>
            <span>{{ contacts.secondaryAdress }}</span>
        </li>

        <li>
            <i class="fa-solid fa-location-dot"></i>
            <span>{{ contacts.mainAdress }}</span>
        </li>
    </ul>
    <!-- offcanvas -->
    <button class="btn btn-primary btn-map ms-5" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight">VIEW MAP</button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasRightLabel"></h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <h3>Maurizio</h3>
            <img class="ms_rende" src="../assets/img/rende.png" alt="">
        </div>
    </div>
    <!-- /offcanvas -->
</template>

<style scoped lang="scss">
@use '../style/partials/mixins' as *;
@use '../style/partials/variables' as *;

p {
    color: $form-text;
}

ul {
    list-style-type: none;

    li {
        padding: 10px;

        i {
            color: $primary-color;
            padding: 10px;
            border: 1px solid #E4F1F2;
            border-radius: 50%;
            background-color: #E4F1F2;
            margin-right: 10px;

            &:hover {
                background-color: $primary-color;
                color: white;
            }

        }

        span {
            color: $primary-color;
        }
    }
}

.btn-map {
    background-color: #E4F1F2;
    border: 1px solid #E4F1F2;
    border-radius: 20px;
    color: $primary-color;

    &:hover {
        background-color: $primary-color;
        color: white
    }
}

.ms_rende {
    height: vh;
    max-width: 100%;
    margin-top: 20px;
}
</style>