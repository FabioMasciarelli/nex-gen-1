<script>
export default {
    props: {
        contacts: Object,
        footerCard: Array
    },

}
</script>

<template>
    <section class="footer-section">
        <div class="row">
            <div class="col d-flex gap-5 me-5">
                <div class="card nexgen">
                    <router-link :to="{ name: 'home' }"><img
                            src="https://nexgen.codings.dev/wp-content/uploads/2021/03/logo.svg" alt=""></router-link>
                    <p>Built to the smallest detail with a focus on feature availability.</p>
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
                    <router-link :to="{ name: 'home' }" class="ms_home text-light"><button class="btn-secondary-color">BUY NEXGEN</button></router-link>
                </div>
                <div class="card list" v-for="cards in footerCard">
                    <div class="card-body">
                        <h2>{{ cards.title }}</h2>
                        <ul v-for="list in cards.list">
                            <li>{{ list }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../style/partials/mixins.scss' as *;
@use '../style/partials/variables.scss' as *;

.footer-section {
    background-color: #111117;
    padding-top: 100px;
    padding-bottom: 100px;
    color: $form-text;
    line-height: 30px;

    .col {
        p {
            margin-left: 35px;
            margin-top: 20px;
        }



        ul {
            list-style-type: none;
        }



        .list {
            background-color: #17171C;
            padding: 5px;
            border-radius: 10px;
            width: 30%;

            &:hover {
                position: relative;
                bottom: 10px;
            }
    

            h2 {
                color: white;
                font-size: 1.5rem;
                margin-left: 30px;
                margin-bottom: 20px;
            }

            ul {
                padding: 0;
            }

            li {
                color: $form-text;
                font-size: 1rem;
                margin-left: 30px;

                &:hover {
                    color: $primary-color;
                }
            }
        }
        .nexgen {
            background-color: #111117;
            color: $form-text;
            
            img {
                width: 50%;
                padding-left: 25px;
            }

            button {
                margin-left: 25px;
                margin-right: 90px;

                &:hover {
                    border: 1px solid white;
                }

                .ms_home {
                    text-decoration: none;
                }
            }
        }


    }
}
</style>