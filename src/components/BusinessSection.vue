<script>
export default {
    props: {
        contacts: Object
    }
}
</script>

<template>
    <section class="business-section mb-5">
        <div class="container">
            <div class="row pt-5 pb-5">
                <div class="col">
                    <p class="talk-expert fw-bold">TALK TO AN EXPERT</p>
                    <h2 class="fw-bold fs-1">Our <br>Business <br> Units</h2>
                    <p class="lorem">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
                <div class="col" v-for="list in 2">
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
                    <button>VIEW MAP</button>
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
    background-color: #ededed;

    .talk-expert {
        color: $primary-color;
    }

    h2 {
        color: #21343e;
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
                border-radius: 50%;
                background-color: $bg-button;
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

    button {
        margin-left: 40px;
        cursor: pointer;
        color: $primary-color;
        border: 0;
        padding: 10px 16px;
        border-radius: 20px;
        background-color: $bg-button;

        &:hover {
            background-color: $primary-color;
            color: white;
        }
    }
}
</style>