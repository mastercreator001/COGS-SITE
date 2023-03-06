<script setup>
// example component
import HorizontalTeamCard from "@/examples/cards/teamCards/HorizontalTeamCard.vue";

// images
import emma from "@/assets/img/team-5.jpg";
import ivana from "@/assets/img/ivana-squares.jpg";
import marquez from "@/assets/img/ivana-square.jpg";
</script>

<template>
  <section class="pb-5 position-relative bg-gradient-dark mx-n3">
    <div class="container">
      <div class="row">
        <div class="col-md-8 text-start mb-5 mt-5">
          <h3 class="text-white z-index-1 position-relative">
            The Team for C Of E Middle School
          </h3>
          <p class="text-white opacity-8 mb-0">
            There’s nothing I really wanted to do in life that I was unable to
            get good at. That’s my skill loading websites with meaning "Welly Road".
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-4"
            
            :profile="{ name: 'Richard McMaster', link: 'javascript:;' }"
            :position="{ label: 'Front End Design', color: 'success' }"
            description="Passion is something applied to a person of commitment, C Of E is my passion so I hope you enjoy the site ."
          />
        </div>
      </div>
    </div>
  </section>
</template>
