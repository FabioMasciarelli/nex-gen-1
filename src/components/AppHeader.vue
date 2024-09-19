<script>
import { store }  from '../store.js'; 
export default {
    data () {
        return {
            store,
            menu: [
                {
                    title: "Home",
                    routeName: "home",
                },
                {
                    title: "About",
                    routeName: "about",
                }
            ]
        }

    }
}

</script>

<template>
    
    <header class="has-navbar-top has-navbar-bottom">
        <nav class="navbar navbar-expand top">
            <div class="container top-part header">

                <ul class="navbar-nav left">
                    <li class="nav-item">
                        <a href="#" class="nav-link m-0">
                            <i class="fas fa-clock text-after"></i>
                            Open Hours: Mon - Sat - 9:00 - 18:00
                        </a>
                    </li>
                </ul>
                <div class="ml-auto"></div>
                <ul class="navbar-nav right">
                    <li class="nav-item">
                        <a href="#" class="nav-link m-0">
                            <i class="fas fa-phone-alt text-after"></i>
                            +1 (305) 1234-5678
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link m-0">
                            <i class="fas fa-envelope text-after"></i>
                            hello@example.com
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link m-0">
                            <i class="fab fa-facebook-f m-0"></i>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link m-0">
                            <i class="fab fa-twitter m-0"></i>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link m-0">
                            <i class="fab fa-linkedin-in m-0"></i>
                        </a>
                    </li>
                    
                    
                </ul>
            </div>

        </nav>
        <nav class="navbar navbar-expand-lg navbar-relative visible navbar-sticky bg-body-tertiary">
            <div class="container-fluid px-5">
                <a class="navbar-brand" href="#"><router-link :to="{name: 'home'}"><img src="https://nexgen.codings.dev/wp-content/uploads/2021/03/logo.svg" alt=""></router-link></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#"><router-link :to="{name: 'home'}">Home</router-link></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><router-link :to="{name: 'about'}">About</router-link></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><router-link :to="{name: 'contacts'}">Contact Us</router-link></a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Links
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item nav-link" href="#"><router-link :to="{name: 'home'}">Home</router-link></a></li>
                                <li><a class="dropdown-item nav-link" href="#"><router-link :to="{name: 'about'}">About</router-link></a></li>
                                <li><a class="dropdown-item nav-link" href="#"><router-link :to="{name: 'contacts'}">Contact Us</router-link></a></li>
                            </ul>
                        </li>
                        
                        <li class="nav-item">
                            <a href="#" class="nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSearch" aria-controls="offcanvasSearch">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart" aria-controls="offcanvasCart">
                                <i class="fa-solid fa-bag-shopping"></i>
                            </a>
                        </li>
                        <span class="cart-counter">0</span>
                        <li class="nav-item">
                            <a href="#" target="_blank" class="btn btn-outline-secondary">BUY NEXGEN</a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    </header>

    <!-- OffCanvas for Search -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasSearch" aria-labelledby="offcanvasSearchLabel">
        <div class="offcanvas-header">
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            
        </div>
        <div class="offcanvas-body d-flex justify-content-center">
            <h2>What are you looking for?</h2>
            <input type="text" placeholder="Enter Keywords">
            <button>Search</button>
            
        </div>
    </div>

    <!-- Offcanvas for Cart  -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasCart" aria-labelledby="offcanvasCartLabel">
        <div class="offcanvas-header">
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            
        </div>
        <div class="body-cart d-flex align-items-end justify-content-center">
            <p>No products in the cart.</p>
            
        </div>
    </div>
</template>


<style scoped lang="scss">
.navbar {
    .top-part{
        width: 100%;
        a {
            color: #606d75;
            font-weight: 400;
        }
    }
    
    background-color: transparent;
    background-image: linear-gradient(-45deg, #1b4965 0%, #0d1b2a 100%);
    a {
        color: #bec1ce;
        text-decoration: none;
        font-weight: 750;
        img {
            width: 50%;
        
        }
        &:hover {
            color: #058283;
        }
        .btn {
            color: #fff;
        }
    }

}

.offcanvas-body{
    flex-direction: column;
    h2{
        font-size: 55px;
        color: #21333E;
        font-weight: 700;
    }
    input {
        margin-top: 20px;
        padding: 10px 10px;
        border: none;
        background-color: #ECECEC;
        border-radius: 10px;
        
        
    }
    button {
        width: 35%;
        margin-top: 25px;
        padding: 10px 15px;
        border: none;
        border-radius: 25px;
        background-color: #058283;
        color: #FFF;
        font-size: 24px;

    }
}

.body-cart {
    margin-top: 8.5rem;
    height: 50vh;
    background-image: url(https://nexgen.codings.dev/wp-content/uploads/2021/03/empty-cart.png);
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;

    p{
        font-size: 24px;
        font-weight: 600;
        color: #817F7A;
    }
}

.cart-counter {
    width: 18px;
    height: 18px;
    line-height: 18px;
    text-align: center;
    font-size: 12px;
    border-radius: 100%;
    background-color: #d90a2c;
    color: #fff;
    transform: translate(-7.5px);
}
</style>