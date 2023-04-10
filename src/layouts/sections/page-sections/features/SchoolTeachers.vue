<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Image popup components
import ImagePopup from "../../../../components/ImagePopup.vue";

// Features page components
import FeatureOne from "./components/FeatureOne.vue";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

//hook
onMounted(() => {
  setNavPills();
});
</script>
<script>
export default {
  data() {
    return {
      ImagePopupTitle: '',
      ImagePopupSrc: '',
      ImagePopupShow: false
    }
  },
  methods: {
    openImage: function(elem) {
      this.ImagePopupShow = false
      this.ImagePopupTitle = elem.srcElement.alt
      this.ImagePopupSrc = elem.srcElement.src
      this.ImagePopupShow = true
    }
  }
}
</script>
<template>
  <ImagePopup :src="ImagePopupSrc" :title="ImagePopupTitle" :show="ImagePopupShow" />
  <BaseLayout
    title="Teachers Feature "
    :breadcrumb="[
      { label: 'Teaching Staff', route: '/sections/page-sections/page-headers' },
      { label: 'School teachers' },
    ]"
    
  >
  <img src="/src/assets/img/school/school staff/teacherFeature/teachersGroupMalham.png" title="Senoir Staff">
    <View title="School teachers at the Malham third year week away outing">
      
    </View>
    <View title="English Teachers Miss Dennis"  id="Early Pictures">
     
    </View>
    <View title="English Teachers"  id="Early Pictures">
     
    </View>

    <img src="/src/assets/img/school/school staff/teacherFeature/missForer.png"  alt="Miss Forer with student" @click="openImage">
    <img src="/src/assets/img/school/school staff/teacherFeature/mrWalker.png" alt="" @click="openImage">
    <View title="Miss Forer and Mr Walker"  id="input-success">
      
    </View>
    <View title="Welcome back and yes you guessed it our staff member today will be Miss Forer. Always the friend and forever the matriah of C of E Middle School having started) at the beginning of the school. 
    Miss Forer has been a powerhouse at the school and her restless passion for the students and the success of them has left many a happy memory amoung students and staff.
    She has always been the willing agent amoung the staff to have fun and minor misdemours amoung charity events and fun within the school. 
    She in herself is and I'm sure she won't mind is in her eighties and still a very active and positive person amoung the community as well as voluntary  work undertaken.
    Forever in our hearts and minds Miss  Forer is forever a most valued friend teacher and part of the school.
    My personal thanks goes to Miss Forer for her kindness in donating many items that make this collection possible and much more interesting.">
            
    </View>

    <img src="/src/assets/img/school/school staff/teacherFeature/mrsHayles.png" alt="Mrs Hayles maths">
    <View title="Mrs Hayles, Mrs Besley" >
      
    </View>
    <View title="My memory of Mrs Hayles is spotty despite the fact that she was my tutor group teacher in 3h yes you guessed it.
    She was also an integral part of the school and the teaching staff, can you add to her career path progression specialist subjects or some fond memories of her and her contribution to your education. 
    I remember we had a limited time special offer and it was a rare one. We had the opportunity to buy a scientific calculator and as my year group teacher Mrs Hayles was in charge of letting us know about it, I remember hassling my parents to get one as I was a super offer. And yes it was the calculator you could type SHELL OIL or HELLO backwards on your calcultors do remember those? 
    If we could have some awesome memories of this special lady it would be great maybe where she us now what she has done since if you know. ">
     </View>

    <img src="/src/assets/img/school/school staff/teacherFeature/mrsPassmore.png" alt="Mrs Passmore art">
    <View title="Art Mrs Passmore, Mr Patterson Mr O'Donohue"  id="input-disabled"></View>
    <View title="Let's take a trip into the art department and today we are visiting Mrs Passmore. What happened to her I remember her being my art teacher during my 87 through 90 time at the school but she seems to have been there for only a while. It seems she joined as a temporary teacher in 1984 as a replacment for the previous teacher Mr O Donaghue who never returned, thanks Sarah.
    Do you know her or where she went or perhaps your related to her. Or maybe you can add a part of the puzzle were missing here.
    Does anyone know the previous teacher or teachers who worked in the department with her.  I must admit I had a childhood affection on Mrs Passmore as she was so caring and lovely when we did assignments in the art group.
    I was never too good at school but we did ok and art was a subject Mrs Passmore was good at as we did working with papermache and making statues, wax prints, pastel work and light defined pencil work with all the different pressures and grades of pencils.
    Art was definitely her thing as well good job I hear you say yep but does anyone remember using those small cutters and making print pads. I do remember being told to work away from myself as the blades were sharp.
    I also remember her driving her yellow Mercedes Benz and as I recall a very expensive car in the day so maybe she was a teacher for the live of the job. I'm keen to hear of your thoughts for this memorable teacher and would love to find out if she inspired you to do something artsy with your life." >
    </View>

    <img src="/src/assets/img/school/school staff/teacherFeature/mrTansley2.png" alt="Science staff Mr Tansley">
    <img src="/src/assets/img/school/school staff/teacherFeature/mrMoorse.png" alt="Science staff Mr Moorse">
    <View title="Science Teachers Mr Tansley, Mr Moorse, Mr Monk">
     </View>
     <View title="We are visiting the science department today and a true icon of that department. I remember him as I'm sure many of you will as a cleaver man who was not only good at his job but a fun man to be around as well.
    I remember watching a science film in the science block and the tape getting stuck in the vhs player. I suggested using sellotape to remove the casette and to my and I think more his suprise it a really worked. He congratulated me and I felt ever so proud being thanked by a smart man. 
    He as with other teachers was part of the core staff staying for years even decades but has now sadly passed away. Does anyone have more information on when he started and left the school as he was there for decades.
    Mr Tansley  as I remember had at least one son at the school maybe you played with him or can add some memories of his time interacting with his dad. 
    I can tell you he lived literally around the corner from the at the top of and round the corner of Mountbatten Drive as im sure I played with his son.  
    If we could have any names some memories or funny events it would be most appreciated. I think we can also say Mr Tansley was always a well dressed man sporting the tank tops of the time, surely they were in fashion at some point ?">
     </View>
     <View title=" Mr Moorse We are moving back into the science department of the 80's and taking a look at Mr Moorse. I know he's about but can't contact him currently so if you can please do ask if he would like to join the group.
    Mr Moorse was a lab technician in the science department helping Mr Tansley with the amazing experiments we were all in awe about and intrducing us to the world of Scientific discovery. Science was fun as it was interesting curious and mysterious all at the same time.Mr Moorse joined the school in the mid to late eighties and had been a relatively young chap at the time. Ambitious and keen so when he joined us in out Malham trip in 1989 you expected fun and he didn't disappoint. Playing football with the boys and being one of the lads he had an unfortunate accident and damaged his leg. Resulting in him being taken to the hospital by a teacher and coming back with his leg either heavily or bandaged or in plaster. Opps being the operative word perhaps some one with a longer memory can help me with this. Mr Moorse left C Of E Middle School to become a deputy head at Osbourne Middle school and eventually transferred Cowes Enterprise College and started teaching Maths, a man of many talents Science Maths and a born leader. He has been very productive over the years as I have read in previous posts leaving C of E to move onto bigger better and greater posts. So if we can build a picture of him joining leaving and a full set of fun memories of this memorable teacher please do.">
     </View>
    
    <img src="/src/assets/img/school/school staff/teacherFeature/mrsBall.png" alt="Mrs Ball Compilation">
    
     <View title="Physicial Education Teachers Mrs Ball, Mr Christensen(Aka Mr C), Mr Hind, MsvSue Rayner, Mr Baggot Mrs Honor "> 
      </View>
    <View title="Today we have Mrs Ball or at least as far as memory serves we do. I believe she was a physical education teacher so we're hoping to get some great memories of this well deserved teacher. I'm sure she was at the school in the mid to end of the eighties and certainly into the later years at the school working into the formation of Christ The King College and now forms part of the school history.
    Mrs Ball was popular amoung the students and was famed for her netball and hockey classes also having been married to (ironically I hear you say) Mr Ball who was also a P.E teacher at Carisbrooke High having teaching differing age grops I'm sure they had some intersting conversations.
    Perhaps you know more than I do or did she teach more than just P.E I'm not sure myself but maybe you can add to her time at C of E please as we were entering into teachers and staff outside my area of knowledge so if you can add then please do."> 
      </View>

  
      
     
  

    <View title="Geography Teachers Mrs Caligari" id="input-error">
      </View>


    <img src="/src/assets/img/school/school staff/teacherFeature/mrsReynolds.png" alt="Mrs Reynolds">
    <img src="/src/assets/img/school/school staff/teacherFeature/missForer1.png" alt="Miss Forer">
    <View title="Mrs Reynolds+ Miss Forer">
      </View>
    
      <View title="Sad but true it with sadness I say Mrs Reynolds is no longer with us but I'm sure she is fondly remembered by you guys and girls. 
      I'm afraid exclusively the fact she was an ace teacher who totally rocked with religious education she was also a form tutor .
      She has been a friend a teacher a confidant and much much more. My dealings with Mrs Reynolds are limited as I never had her as a tutor or as far as my limited memory goes a teacher that said I feel sure we will discover new things we all forgot and can celebrate a fantastic part of the C of E community at trinity. Mrs Reynolds has been famed as a brilliant french teacher and was highly accomplished at her chosen subject, praised by staff and students alike. Thank you Mrs Reynolds for teaching the unteachable. ">
      </View>
      
   
    <img src="/src/assets/img/school/school staff/teacherFeature/mrFelton.png" alt="Mr Felton school photo">
    <View title="Mr Felton Design and Technology previously deputy Mr Luckett Mr Darby"  id="Early Pictures">
     
    </View>
    <View title="We all know him as Mr Felton and he had been at the school serving for decades, and another dedicated teacher in the C of E middle community.
    He was not only a deputy head he ran various classes as well as helping to run the school including CDT next to the art room helping many students find a love of creating something cool from nothing.
    He had a temper and I fell foul of this once but only once I made sure I stayed in line but have heard from you guys many now creative classes when temper may came to the surface. 
    He worked with both Mr Knight the 1st head teacher Mr Harrison the second head teacher and the 3rd Mr Bloomfield. I don't have figures for his leaving the school but may be you could add to the comments and we will build a jigsaw picture of his career and subjects covered as well as our memories of him. Apparently he retired between 1994 and 1995">
     </View>

    
     <img src="/src/assets/img/school/school staff/teacherFeature/mrsMurdoch.png" alt="Mrs Murdoch Domestic Science">
    <View title="Mrs Murcoch"  id="Mrs Murdoch, AKA super gran">
      
    </View>
    <View title="I have for you today Mrs Murdoch, a member of staff who has undoubtedly touched many hearts as teachers generally seemed to. However that said there aren't many teachers who have also added to our waist lines as well.Mrs Murdoch originally came for interview at the school with Mr Knight and had no particular job in mind but when asked about domestic science and the opportunity to take classes it was seized upon for a one year trial.And yes you guessed it 21 years later upon Mrs  Murdoch's retirement domestic science was still being taught in the school.The smells made throughout the school fave the atmosphere of home and a want to always be innthat class off only to actually discover the recipe that was being cooked and satisfy curiosity.
    I hope many memories will be shared of this great lady whom I feel sure is still cooking and has been a wonderful tutor over the years my self included.
    Sometimes called super gran after the television series her broad Scottish accent and her outward commitment to doing her very best has left everyone who dealt with her nothing but good memories and probably satisfactory waist lines. 
    I'm keen to hear if Mrs Murdoch has inspired or just added to people's love of cooking or perhaps careers in the end. 
    She was a fantastic form group tutor as I was in 2m but also a great teacher brought along to totland youth hostel having added to the happy experience.
    Mrs Murdoch is the pinnacle of teaching for me and I'm definatly a big fan so hardly impartial.">
      </View>
    
    <img src="/src/assets/img/school/school staff/teacherFeature/mrsBrock.png" alt="Mrs Brock, Miss Goodship, Music teacher">
    <View title="Music Teachers"  id="input-error">
      </View>
    
    <View title="Music Teachers"  id="input-error">
     </View>

  
    <View title="Religious Educataion Mrs Challoner and Mrs Reynolds, Miss Howe  "  id="Mrs Challoner and Mrs Reynolds">
     
    </View>

    <View title="History Miss Watkins, Miss Dennis Mr Besley "  id="History ">
     
    </View>
  </BaseLayout>
</template>
