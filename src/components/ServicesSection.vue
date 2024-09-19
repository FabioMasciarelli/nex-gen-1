<script>
export default {
    props: {
        store: Array
    }
}

</script>


<template>


    <section class="services">
        <div class="ms-container">
            <h6>ROAD TRANSPORT</h6>
            <h3>Main Services</h3>
            <div class="more">
                <p>With all of this expertise and capability comes an unrivalled commitment to customer service. We will
                    work hard to understand your needs in order to develop a productive, long-term partnership.</p>
                <button class="btn-secondary-color"><a href="#home">SEE ALL</a></button>
            </div>
            <div class="container-card">
                <div v-for="info in store" class="services-card">
                    <div>
                        <span>
                            <i :class="info.icon"></i>
                        </span>
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                    <h4>{{ info.title }}</h4>
                    <p>{{ info.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>
@use '../style/partials/mixins' as *;
@use '../style/partials/variables' as *;


h6 {
    color: $primary-color;
}

hr {
    border: 0;
    margin: 0;
}

section {
    width: 100%;
}

.ms-container {
    width: 80%;
    margin: auto;
}


.services {
    background-color: black;
    padding: 50px 0;

    h3 {
        font-weight: bold;
        font-size: 3rem;
        color: white;
    }

    .more {
        @include flex(row, space-between, center);
        gap: 30px;
        margin-bottom: 50px;

        p {
            color: white;
            width: 70%;
        }

        button {
            width: 10%;

            &:hover {
                background-color: $primary-color;
            }

            a {
                color: white;
                text-decoration: none;
            }
        }
    }

    .container-card {
        display: flex;
        justify-content: center;
        gap: 20px;
        .services-card {
            border-radius: 20px;
            width: calc(100% / 3 - 40px);
            height: 200px;
            color: white;
            background-color: #242429;
            padding: 20px;

            &:hover {
                position: relative;
                bottom: 10px;
            }
    
            div {
                @include flex(row, space-between, center);
                margin-bottom: 10px;

                span {
                    background-color: #1e2f35;
                    padding: 10px;
                    border-radius: 50%;
                    aspect-ratio: 1;
                }

                i {
                    color: $primary-color;
                }
            }
        }
    }

}
</style>