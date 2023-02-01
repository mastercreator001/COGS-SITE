<script setup>
// example components
import DefaultInfoCard from "../../../../examples/cards/infoCards/DefaultInfoCard.vue";
import CenteredBlogCard from "../../../../examples/cards/blogCards/CenteredBlogCard.vue";
</script>
<template>
  <section class="py-7">
    <div class="container">
      <div class="row align-items-left">
        <div class="col-lg-6">
          <div class="row justify-content-start">
            <DefaultInfoCard
              color="info"
              icon=""
              title="Have a look at the school galleries"
              description="We get lots of pictures and submissions into the group and we'd love yours to be amoug them. If you feel as though you have a story, pictures, articles, or any information relating to the school please get in touch in the contact us option. We look forward to hearing from you soon."  
            />
            <DefaultInfoCard
              color="info"
              icon=""
              title="Any tapes VHS slides please"
              description=" We would love to hear from you if you have any slides VHS tapes or any visual media we could copy or digitse for you. Photos are welcome and we can convert slides to digital mediums,please do get in touch even if you think it isn't any good we'd love to try."
            />
          </div>
          
        </div>
        <div class="col-lg-4 ms-auto mt-lg-0 mt-6">
          <CenteredBlogCard
            image="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            title="Get a fresh look inside the school"
            description="Website visitors to the group can express themselves freely and we can have and enjoy a group unhindered from limitations."
          />
        </div>
      </div>
    </div>
  </section>
</template>
