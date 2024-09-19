<script>
export default {

}
</script>

<template>
    <div class="container py-5">
        <div class="row">
            <div class="col-6">
                <h6>A SUCCESS STORY</h6>
                <h2>Who We Are</h2>

                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <strong>Architecto explicabo voluptate similique voluptatibus hic perspiciatis eaque aliquid ipsum nostrum minima!</strong> Adipisci enim inventore, id neque eos soluta placeat quod laboriosam.</p>

                <p>Ratione laborum voluptate facilis culpa, quam porro id ullam reprehenderit nesciunt, vero accusamus eaque quae hic explicabo beatae distinctio obcaecati, reiciendis omnis.</p>

                <p>Pariatur placeat maxime, officiis quod veritatis aliquid reprehenderit soluta laboriosam, nisi ratione iste at, temporibus quis nihil atque sunt debitis. Doloribus, neque.</p>

            </div>
            <div class="col-4">
                <h3>Our Values</h3>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam tenetur doloremque hic consequuntur nisi. </p>

                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi accusamus aperiam alias ex molestiae distinctio.</p>
                <div class="d-flex justify-content-between">
                    <div class="name">
                        <a href="#">T. Johnson</a>
                    </div>
                    <div class="mic">
                        <i class="fa-solid fa-microphone"></i>

                    </div>
                </div>

            </div>

        </div>
    </div>

</template>

<style scoped lang="scss">
.col-6 {
    margin-right: 3.5rem;
    h6 {
        color: #18A6A6;
    }

    h2 {
        font-weight: 700;
        font-size: 50px;
        margin-top: 30px;
        color: #21333E;
    }

    p {
        margin: 25px 0;
        font-weight: 500;
        color: #606D75;
    }

}

.col-4 {
    margin-top: 2.5rem;
    padding: 20px;
    background-color: #058283;
    border-radius: 6px;

    h3 {
        font-weight: 700;
        color: #fff;
    }

    p {
        color: #C8DDDD;
    }
    .name{
        margin-top: 3.5rem;
        a {
            font-size: 18px;
            font-weight: 500;
            color: #C8DDDD;
        }
        

    }

    .mic {
        margin-top: 3.5rem;
        margin-right: 1.5rem;
        i {
            font-size: 30px;
            color: #035B5B;
        }
    }

}

</style>