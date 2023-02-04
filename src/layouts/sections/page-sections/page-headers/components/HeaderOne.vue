<script setup>
//Vue Material Kit 2 components
import MaterialButton from "@/components/MaterialButton.vue";

// image
const bgImage =
  "https://images.unsplash.com/photo-1520769945061-0a448c463865?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80";
</script>
<template>
  <header>
    <nav
      class="navbar navbar-expand-lg navbar-dark navbar-absolute bg-transparent shadow-none"
    >
      <div class="container">
        <a class="navbar-brand text-white" href="javascript:;"
          >C Of E Middle School</a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-header-2"
          aria-controls="navbar-header-2"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar-header-2">
          <ul class="navbar-nav mx-auto">
            </ul>
            <li class="nav-item">
              <a
                class="nav-link text-white mx-2"
                href="https://www.facebook.com/richard.mcmaster.942/"
              >
                <i class="fab fa-facebook"></i>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link text-white"
                href="https://www.instagram.com"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </li>
          
        </div>
      </div>
    </nav>
    <div
      class="page-header min-vh-100"
      :style="{Image: '@/src/assets/img/school/20200412_170100.jpg',
      }"
    
      loading="lazy"
    >
      <span class="mask bg-gradient-dark opacity-5"></span>
      <div class="container">
        <div class="row">
          <div
            class="col-lg-6 col-md-7 d-flex justify-content-center flex-column"
          >
            <h1 class="text-white mb-4">Mr Knight</h1>
            <p class="text-white opacity-8 lead pe-5 me-5">
              The above image of Mr Knight the first headteacher of the school.
            </p>
            </div>
          </div>
        </div>
      </div>
  </header>
</template>
