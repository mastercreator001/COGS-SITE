<script setup>
// example components
import TransparentBlogCard from "../../../../examples/cards/blogCards/TransparentBlogCard.vue";
import BackgroundBlogCard from "../../../../examples/cards/blogCards/BackgroundBlogCard.vue";

//Vue Material Kit 2 components
import post1 from "@/assets/img/examples/20200420_173610.jpg";
import post2 from "@/assets/img/examples/20200416_192238.jpg";
import post3 from "@/assets/img/examples/20200218_193909.jpg";
</script>
<template>
  <section class="py-3">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h3 class="mb-5">Check my latest group posts</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-sm-6">
          <TransparentBlogCard
            :image="post1"
            title="We have a following in the group"
            description="How are you finding the group, do you have any suggestions on how we can improve the content?"
          />
        </div>
        <div class="col-lg-3 col-sm-6">
          <TransparentBlogCard
            :image="post2"
            title="Can you guess what this is?"
            description="Can anyone guess the creator or the teacher responsiable for it, what was this used for,Make a guesss and mail me. Good luck"
          />
        </div>
        <div class="col-lg-3 col-sm-6">
          <TransparentBlogCard
            :image="post3"
            title="Does anyone have one of these ?"
            description="If you’ve ever had one you must remember the tradition of signing the school shirts on the last day? Any photos stories or pictures would be amazing to see. Please submit through the links"
          />
        </div>
      </div>
    </div>
  </section>
</template>
