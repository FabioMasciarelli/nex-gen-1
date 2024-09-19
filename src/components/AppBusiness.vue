<script>
export default {
    props: {
        contacts: Object,
        bg: String,
        color: String,
        bgi: String
    }
}
</script>

<template>
    <section class="business-section mb-5">
        <div class="container">
            <div class="row pt-5 pb-5">
                <div class="col">
                    <p class="talk-expert fw-bold">TALK TO AN EXPERT</p>
                    <h2 class="fw-bold fs-1 text-light">Our <br>Business <br> Units</h2>
                    <p class="lorem">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
                <div class="col">
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
                            <span>{{ contacts.mainAdress }}</span>
                        </li>
                    </ul>
                    <button class="btn-prymary-color">VIEW MAP</button>
                </div>
                <div class="col">
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
                            <span>{{ contacts.mainAdress }}</span>
                        </li>
                    </ul>
                    <button class="btn-prymary-color">VIEW MAP</button>
                </div>
            </div>
        </div>

    </section>
</template>

<style scoped lang="scss">
@use '../style/partials/mixins' as *;
@use '../style/partials/variables' as *;

section {
    width: 100%;
}



.business-section {
    background-color: black;
    .talk-expert {
        color: $primary-color;
    }

    .lorem {
        color: $form-text;
        font-size: 1.3rem;
    }
    ul {
        list-style-type: none;

        li {
            padding: 10px;

            i {
                color: $primary-color;
                padding: 10px;
                border: 1px solid #19262D;
                border-radius: 50%;
                background-color: #19262D;
                margin-right: 10px;

                &:hover {
                    background-color: $primary-color;
                    color: white;
                }
            }

            span {
                color: white;
            }
        }
    }

    .btn-prymary-color {
        margin-left: 40px;
        background-color: #19262D;
        color: $primary-color;

        &:hover {
            background-color: $primary-color;
            color: white;
        }
    }
}
</style>