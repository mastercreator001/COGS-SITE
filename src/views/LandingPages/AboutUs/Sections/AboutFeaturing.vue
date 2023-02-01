<script setup>
// example component
import DefaultCounterCard from "../../../../examples/cards/counterCards/DefaultCounterCard.vue";
</script>
<template>
  <section class="pt-4 pb-6" id="count-stats">
    <div class="container">
      <div class="row mb-7">
        <div class="col-lg-2 col-md-4 col-6 mb-4">
          
        </div>
      </div>
      <div class="row justify-content-center text-center">
        <div class="col-md-3">
          <DefaultCounterCard
            title="Projects to date"
            description="This is the first pioneering project started and aired to the public"
            :count="1"
            :duration="3000"
          />
        </div>
        <div class="col-md-3">
          <DefaultCounterCard
            title="Hours so far"
            description="As many hours as it takes to update and keep the site topped up"
            :count="200"
            suffix="+"
            :duration="3000"
          />
        </div>
        <div class="col-md-3">
          <DefaultCounterCard
            title="Help us inform you"
            description="Were here for you, ex students ex teachers or ex staff"
            :count="10"
            suffix="/7"
            :duration="4000"
          />
        </div>
      </div>
    </div>
  </section>
</template>
