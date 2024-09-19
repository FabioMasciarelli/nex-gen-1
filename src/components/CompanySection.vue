<script>
export default {

}
</script>

<template>
    <div class="container py-5">
        <div class="row">
            <div class="col-6">
                <h6>ABOUT THE NETWORK</h6>
                <h2>The Company</h2>

                <p class="first-p">For 12 years we have been providing audit and warranty, financial advice, risk advice, taxes and related services to select clients.</p>
                <div class="row">
                    <div class="col-6 cardt">
                        <a href="#">
                            <i class="fa-solid fa-hourglass-end"></i>
                            <label for="#">Tradition</label>
                            
                        </a>
                        <p class="second-p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                    </div>
                    <div class="col-6 cardt">
                        <a href="#">
                            <i class="fa-solid fa-lock"></i>
                            <label for="#">Security</label>
                        </a>
                        <p class="second-p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                    </div>
                    <div class="col-6 cardt">
                        <a href="#">
                            <i class="fa-solid fa-apple-whole"></i>
                            <label for="#">Certificate</label>
                        </a>
                        <p class="second-p">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </div>
                    <div class="col-6 cardt">
                        <a href="#">
                            <i class="fa-solid fa-user-tie"></i>
                            <label for="#">Expertise</label>
                        </a>
                        <p class="second-p">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </div>
                        

                </div>

            </div>
            <div class="col-5 img mx-4">
                <img src="../assets/img/about-3.jpg" alt="">
            </div>
        </div>

    </div>

</template>

<style scoped lang="scss">
.col-6 {
    h6 {
        color: #18A6A6;
    }

    h2 {
        font-weight: 700;
        font-size: 50px;
        margin-top: 30px;
        color: #21333E;
    }

    .first-p {
        margin: 25px 0;
        font-weight: 400;
        color: #606D75;
    }

    
    i {
        font-size: 30px;
        color: #058283;
    }

    label {
        margin:0 0.8rem;
        font-size: 25px;
        font-weight: 700;
        color: #21333E;
        
    }

    .second-p {
        margin-top: 10px;
        color: #606D75;
    }
    
}

.img {
    img {
        width: 115%;
        border-radius: 20px;
        
    }
}

</style>