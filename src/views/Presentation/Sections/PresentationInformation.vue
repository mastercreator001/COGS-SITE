<script setup>
import RotatingCard from "../../../examples/cards/rotatingCards/RotatingCard.vue";
import RotatingCardFront from "../../../examples/cards/rotatingCards/RotatingCardFront.vue";
import RotatingCardBack from "../../../examples/cards/rotatingCards/RotatingCardBack.vue";
import DefaultInfoCard from "../../../examples/cards/infoCards/DefaultInfoCard.vue";
</script>
<template>
  <section class="my-5 py-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4 ms-auto me-auto p-lg-4 mt-lg-0 mt-4">
          <RotatingCard>
            <RotatingCardFront
              image="https://images.unsplash.com/photo-1569683795645-b62e50fbf103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              icon="touch_app"
              title="Hello Welly Road,<br /> It's been a while "
              description=" What's your 1st lesson you learn't to love ? And the one you hated the most?  Let us know in the Message section. "
            />

            <RotatingCardBack
              image="https://images.unsplash.com/photo-1498889444388-e67ea62c464b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1365&q=80"
              title="Breathe <br /> and feel the air across your face <br /> <br />Ready for the Bell?"
              description=" Your back at middle school again with all your old friends, What's your 1st thought ?"
              />
          </RotatingCard>
        </div>
        <div class="col-lg-6 ms-auto">
          <div class="row justify-content-start">
            <DefaultInfoCard
              icon="grouped"
              title="School Staff"
              description=" A school is only ever as goood as the teachers you have teaching,find the staff and add suggestions for staff not included in the current list."
            />
            <DefaultInfoCard
              icon="home"
              title="The School's History"
              description=" The definitive guide to the school and the history formed during the 38 years the school was open for, perhaps you can add to what we have."
            />
          </div>
          <div class="row justify-content-start mt-5">
            <DefaultInfoCard
              class="mt-3"
              icon="panorama"
              title="Galleries"
              description=" Lots of photos from the school giving you an insight into the running and the daily life of the school."
            />
            <DefaultInfoCard
              class="mt-3"
              icon="domain"
              title="The demolition of the school"
              description="Regardless of how you felt about the school the eventual demolition is a sad moment here we take a look into the destruction process."
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
