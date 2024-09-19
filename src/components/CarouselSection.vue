<script>
export default {
    props: {
        card: Array
    },
    data() {
        return {
            curIndex:0
        }
    },
    methods: {
        next() {
            if(this.curIndex === this.card.length - 1) {
                this.curIndex = 0;
                console.log('cur0');
            } else {
                this.curIndex++;
                console.log('cur++');
            }
        },
        prev() {
            if(this.curIndex === 0) {
                this.curIndex = this.card.length - 1;
                console.log('car');
            } else {
                this.curIndex--;
                console.log('cur--');
            }
        }
    }

}
</script>


<template>
    <section>
        <h6>CUSTOMER TESTIMONIALS</h6>
        <h3>Trusted Feedback</h3>
        <p>We work intensively in search of ideals that can add up in the lives of our customers. is what moves us
            and we are grateful for the recognition.</p>
        <div class="carousel">
            <div class="prev" @click="prev()">
                <i class="fa-solid fa-angles-left"></i>
            </div>
            <div class="card-container">
                <div class="card" v-for="(info, index) in card" :class="{none : index !== curIndex}">
                    <h4>{{ info.title }}</h4>
                    <div>
                        <p>{{ info.feedback }}</p>
                        <i class="fa-solid fa-quote-right position"></i>
                    </div>
                </div>
            </div>
            <div class="next" @click="next()">
                <i class="fa-solid fa-angles-right"></i>
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>
@use '../style/partials/mixins' as *;
@use '../style/partials/variables' as *;

.none {
    display: none;
}

section {
    background-color: black;
    padding: 40px;

    h6 {
        color: $primary-color;
        text-align: center;
        margin-bottom: 20px;
    }

    h3 {
        text-align: center;
        color: white;
        font-weight: bold;
        font-size: 3rem;
        margin-bottom: 20px;
    }

    p {
        color: white;
        margin-bottom: 50px;
        text-align: center
    }

    .carousel {
        min-height: 500px;
        padding: 20px;
        @include flex(row, space-between, center);

        i {
            color: $primary-color;
        }

        .prev {
            cursor: pointer;
            font-size: 2rem;
            width: 10%;
        }

        .card-container {
            width: 80%;
            @include flex(row, center, center);
            gap: 20px;
            overflow-x: auto;

            .card {
                padding: 30px;
                width: calc(100% / 2 - 20px);
                position: relative;
                border-radius: 20px;
                background-color: #232328;

                h4 {
                    color: white;
                    text-align: center;
                    margin-bottom: 40px;
                }

                div {
                    background-color: #232328;
                    padding: 30px;

                    p {
                        margin: 0;
                    }
                }

                .position {
                    position: absolute;
                    right: 50px;
                    bottom: 50px;
                }
            }
        }


        .next {
            cursor: pointer;
            font-size: 2rem;
            width: 10%;
        }

    }
}
</style>