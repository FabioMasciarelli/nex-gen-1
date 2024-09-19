<script>
export default {
    props: {
        results: Array
    },
    data() {
        return {
            hover: false,
            i: 0
        }
    },
    methods: {
        count(num) {
            if (this.i < num) {
                return setInterval(() => {
                    this.i++;
                }, 200);
            } else {
                return num;
            }
        }
    }
}
</script>


<template>

    <section @mouseover="this.hover = true">
        <div>
            <h6>WHAT ARE WE DOING</h6>
            <h3>Results in Numbers</h3>
            <p>Our goal is to exceed expectations by delivering the best job possible.</p>
        </div>
        <ul>
            <li v-for="item in results">
                <span class="primary-color">{{ this.hover === true ? count(item.value) : '0' }}</span>
                <span>{{ item.name }}</span>
            </li>

        </ul>

    </section>

</template>


<style lang="scss" scoped>
@use '../style/partials/mixins' as *;
@use '../style/partials/variables' as *;

section {
    padding: 80px 0;
    width: 100%;
    @include flex(column, space-evenly, center);
    background-image: url(../assets/img/bg-10.jpg);
    background-position: center;
    background-attachment: fixed;
    background-size: contain;

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
    }

    ul {
        @include flex(row, space-evenly, center);
        width: 100%;
        margin-bottom: 50px;

        li {
            width: calc(100% / 4);
            @include flex(column, space-evenly, center);
            color: white;

            .primary-color {
                color: $primary-color;
                font-size: 3rem;
                font-weight: bold;
            }
        }
    }
}
</style>