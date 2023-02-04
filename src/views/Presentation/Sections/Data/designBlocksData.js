/*
=========================================================
* Vue Material Kit 2 - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vue-material-kit-pro
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

const imagesPrefix =
  "https://raw.githubusercontent.com/creativetimoffic/public-assets/master/material-design-system/presentation/sections";

import imgfelton from "@/assets/img/Headteachers/feltonimg.jpg";
import imgBlogPosts from "@/assets/img/blog-posts.png";
import imgTestimonials from "@/assets/img/testimonials.png";
import imgTeam from "@/assets/img/team.png";
import imgStat from "@/assets/img/stat.png";
import imgContent from "@/assets/img/content.png";
import imgadvancedMap from "@/assets/img/school maps/advancedMap.jpg";
import imgAlert from "@/assets/img/alerts.jpg";
import imgPopover from "@/assets/img/popovers.jpg";
import imgModal from "@/assets/img/modals.jpg";
import imgDropdowns from "@/assets/img/dropdowns.jpg";
import imgheadteachers from "@/assets/img/school/20200412_170100.jpg";
import imgknight from "@/assets/img/headteachers/20200502_221414.jpg";
import imgschoolMap from "@/assets/img/school maps/SCHOOLPLANFINAL.png";
import imgbookMap from "@/assets/img/school maps/bookMap.jpg";
import imgteachingStaff from "@/assets/img/school/school staff/teachingStaff.jpg";
import imgcareTakers from "@/assets/img/school/school staff/careTaker.jpg";
import imgmrsSmith from "@/assets/img/school/mrsSmith.jpg";
export default [
  {
    heading: "Staff Heads/teachers & support staff",
    description:
      "A Page of all known staff that worked for the school",
    items: [
      {
        image: imgheadteachers,
        title: "Head Teachers",
        subtitle: "4 Known head teachers",
        route: "page-headers",
        pro: false
      },
      {
        image: imgknight,
        title: "Deputy Head Teachers",
        subtitle: "Deputy Heads",
        route: "page-features",
        pro: false
      },
      {
        image: imgfelton,
        title: "Senoir Staff",
        subtitle: "Year Heads",
        route: "presentation",
        pro: false
      },
      {
        image: imgteachingStaff,
        title: "Teaching Staff",
        subtitle: "A talented bunch",
        route: "presentation",
        pro: false
      },
      {
        image: imgcareTakers,
        title: "Caretakers",
        subtitle: "Caretakes/Maintenance staff",
        route: "presentation",
        pro:false
      },
      {
        image: imgmrsSmith,
        title: "Dinner ladies",
        subtitle: "As present as I rememeber in my time at school we're Mrs smith and Mrs Tout. Did you have any others in your timeif so let me know and I'l get them added to the wall. ",
        route: "presentation",
        pro: false
      },
   ]
  },
  {
    heading: "Subjects",
    description: "Eight primary Subjects we're studied at Welly Road",
    items: [
     {
        image: imgTeam,
        title: "Science",
        subtitle: "Science Lab/Teachers",
        route: "presentation",
        pro:false
      },
      {
        image: imgBlogPosts,
        title: "Maths",
        subtitle: "Maths Teacher's",
        route: "presentation",
        pro:false
      },
      {
        image: imgTestimonials,
        title: "English",
        subtitle: "English Teachers",
        route: "presentation",
        pro:false
      },
      {
        image: imgStat,
        title: "P.E",
        subtitle: "Physical Education teachers",
        route: "presentation",
        pro:false
      },
      {
        image: `${imagesPrefix}/call-to-action.jpg`,
        title: "Kitchen staff",
        subtitle: "Dinner Ladies",
        route: "presentation",
        pro:false
      },
      
      {
        image: `${imagesPrefix}/footers.jpg`,
        title: "French Teachers",
        subtitle: "French",
        route: "presentation",
        pro:false
      },
      {
        image: `${imagesPrefix}/general-cards.jpg`,
        title: "Library Staff/Nurses",
        subtitle: "Library staff",
        route: "presentation",
        pro:false
      },
      {
        image: imgContent,
        title: "Music Studies",
        subtitle: "Music Class/Tuition",
        route: "presentation",
        pro:false
      },
      {
        image: imgContent,
        title: "Design and Technology",
        subtitle: "D.T Class",
        route: "presentation",
        pro:false
      },
      {
        image: imgContent,
        title: "Domestic Science ",
        subtitle: "Cooking Class",
        route: "presentation",
        pro:false
      },
      {
        image: imgContent,
        title: "Art and Design",
        subtitle: "Art",
        route: "presentation",
        pro:false
      },
    ]
  },
  {
    heading: "School Maps",
    description: "A Group of maps of the school",
    items: [
      {
        image: imgschoolMap,
        title: "A reworked Image of the school in it's design phase",
        subtitle: "Png hand drawn image in inkscape",
        route: "navigation-navbars",
        pro: false
      },
      {
        image: imgbookMap,
        title: "Nav Tabs",
        subtitle: "2 Nav Tabs",
        route: "navigation-navtabs",
        pro: false
      },
      {
        image: imgadvancedMap,
        title: "More detailed map",
        subtitle: "A more detailed map with lanscaping andoptions included",
        route: "navigation-pagination",
        pro: false
      }
    ]
  },
  {
    heading: "Input Areas",
    description:
      "50+ elements that you need for text manipulation and insertion",
    items: [
      {
        image: `${imagesPrefix}/newsletters.jpg`,
        title: "Newsletters",
        subtitle: "6 Examples",
        route: "presentation",
        pro:false
      },
      {
        image: `${imagesPrefix}/contact-sections.jpg`,
        title: "Contact Sections",
        subtitle: "8 Examples",
        route: "presentation",
        pro:false
      },
      {
        image: `${imagesPrefix}/forms.jpg`,
        title: "Forms",
        subtitle: "3 Examples",
        route: "inputareas-forms",
        pro: false
      },
      {
        image: `${imagesPrefix}/inputs.jpg`,
        title: "Inputs",
        subtitle: "6 Examples",
        route: "inputareas-inputs",
        pro: false
      }
    ]
  },
  {
    heading: "Attention Catchers",
    description:
      "20+ Fully coded components that popup from different places of the screen",
    items: [
      {
        image: imgAlert,
        title: "Alerts",
        subtitle: "4 Examples",
        route: "ac-alerts",
        pro: false
      },
      {
        image: `${imagesPrefix}/toasts.jpg`,
        title: "Notifications",
        subtitle: "3 Examples",
        route: "presentation",
        pro:false
      },
      {
        image: imgPopover,
        title: "Tooltips & Popovers",
        subtitle: "2 Examples",
        route: "ac-tooltips-popovers",
        pro: false
      },
      {
        image: imgModal,
        title: "Modals",
        subtitle: "5 Examples",
        route: "ac-modals",
        pro: false
      }
    ]
  },
  {
    heading: "Elements",
    description:
      "80+ carefully crafted small elements that come with multiple colors and shapes",
    items: [
      {
        image: `${imagesPrefix}/buttons.jpg`,
        title: "Buttons",
        subtitle: "6 Examples",
        route: "el-buttons",
        pro: false
      },
      {
        image: `${imagesPrefix}/avatars.jpg`,
        title: "Avatars",
        subtitle: "2 Examples",
        route: "el-avatars",
        pro: false
      },
      {
        image: imgDropdowns,
        title: "Dropdowns",
        subtitle: "2 Examples",
        route: "el-dropdowns",
        pro: false
      },
      {
        image: `${imagesPrefix}/switch.jpg`,
        title: "Toggles",
        subtitle: "2 Examples",
        route: "el-toggles",
        pro: false
      },
      {
        image: `${imagesPrefix}/social-buttons.jpg`,
        title: "Social Buttons",
        subtitle: "2 Examples",
        route: "presentation",
        pro:false
      },
      {
        image: `${imagesPrefix}/breadcrumbs.jpg`,
        title: "Breadcrumbs",
        subtitle: "1 Example",
        route: "el-breadcrumbs",
        pro: false
      },
      {
        image: `${imagesPrefix}/badges.jpg`,
        title: "Badges",
        subtitle: "3 Examples",
        route: "el-badges",
        pro: false
      },
      {
        image: `${imagesPrefix}/progress.jpg`,
        title: "Progress Bars",
        subtitle: "4 Examples",
        route: "el-progress-bars",
        pro: false
      },
      {
        image: `${imagesPrefix}/tables.jpg`,
        title: "Tables",
        subtitle: "3 Examples",
        route: "presentation",
        pro:false
      },
      {
        image: `${imagesPrefix}/typography.jpg`,
        title: "Typography",
        subtitle: "2 Examples",
        route: "el-typography",
        pro: false
      }
    ]
  }
];
