<script>

</script>

<template>
    <section class="hero" id="home">
        <div class="ms-container contacts">
            <h6>LOGISTIC SERVICES</h6>
            <h2>CARGO
                <hr> TRANSPORT
            </h2>
            <p>Fractional or exclusive road cargo transportation to all regions,
                <hr> with small, medium and large vehicles.
            </p>
            <div class="container-btn">
                <button class="btn-prymary-color">GET IN TOUCH</button>
                <button class="btn-secondary-color">READ MORE</button>
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


.hero {
    background-image: url(../assets/img/bg-9.jpg);
    background-position: center;

    .contacts {
        @include flex(column, center, flex-start);
        height: calc(100vh - 134px);

        h2 {
            opacity: 0.9;
            color: white;
            font-weight: bold;
            font-size: 4rem;
        }

        p {
            color: white;
            font-size: 1.2rem;
        }

        .container-btn {
            @include flex(row, flex-start, center);

            button {
                margin-right: 15px;
            }
        }
    }
}
</style>