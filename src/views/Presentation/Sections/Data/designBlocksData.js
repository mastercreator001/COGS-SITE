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
import imgMaths from "@/assets/img/subjectImages/maths.png";
import imgScience from "@/assets/img/subjectImages/science.png";
import imgEnglish from "@/assets/img/subjectImages/english.png";
import imgpE from "@/assets/img/subjectImages/pE.png";
import imgdinnerLady1 from "@/assets/img/school/school staff/dinnerLady1.jpg";
import imgdinnerLady2 from "@/assets/img/school/school staff/dinnerLady2.jpg";
import imglibraryStaff from "@/assets/img/school/school staff/libraryStaff.jpg";
import imgfrenchTeacher from "@/assets/img/school/school staff/frenchTeacher.jpg";
import imgMusic from "@/assets/img/subjectImages/Music.png";
import imgDt from "@/assets/img/subjectImages/Dt.png";
import imgdomesticScience from "@/assets/img/subjectImages/domesticScience.png";
import imgartAnddesign from "@/assets/img/subjectImages/artClass.png";
import imgbbcComputer1 from "@/assets/img/subjectImages/bbcComputer1.jpg";
import imgbbcComputer2 from "@/assets/img/subjectImages/bbcComputer2.png";
import imgbbcComputer3 from "@/assets/img/subjectImages/bbcComputer3.png";
import imgfloopyDisc from "@/assets/img/subjectImages/floopyDisc.png";
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
        route: "teachers",
        },
      {
        image: imgknight,
        title: "Deputy Head Teachers",
        subtitle: "Deputy Heads",
        route: "teachers",
        },
      {
        image: imgfelton,
        title: "Senoir Staff",
        subtitle: "Year Heads",
        route: "presentation",
        },
      {
        image: imgteachingStaff,
        title: "Teaching Staff",
        subtitle: "A talented bunch",
        route: "presentation",
        },
      {
        image: imgcareTakers,
        title: "Caretakers",
        subtitle: "Caretakes/Maintenance staff",
        route: "presentation",
      },
      {
        image: imgmrsSmith,
        title: "Dinner ladies",
        subtitle: "As present as I rememeber in my time at school we're Mrs smith and Mrs Tout.",
        route: "presentation",
        },
        {
          image: imgdinnerLady1,
          title: "Kitchen staff",
          subtitle: "Dinner Ladies",
          route: "presentation",
          },
          {
            image: imgdinnerLady2,
            title: "Kitchen staff",
            subtitle: "Dinner Ladies",
            route: "presentation",
            },
        {
          image: imglibraryStaff,
          title: "Library staff",
          subtitle: "Mrs Colenutt as I remember, correct me if I'm wrong",
          route: "presentation",
          },
          {
            image: imgfrenchTeacher,
            title: "French teacher Misss Forer",
            subtitle: "Miss Forer had mutiple talents English French D.S",
            },
   ]
  },
  {
    heading: "Subjects",
    description: "Eight primary Subjects we're studied at Welly Road",
    items: [
     {
        image: imgScience,
        title: "Science",
        subtitle: "Science Lab/Teachers",
        route: "presentation",
      },
      {
        image: imgMaths,
        title: "Maths",
        subtitle: "Maths Teacher's",
        route: "presentation",
      },
      {
        image: imgEnglish,
        title: "English",
        subtitle: "English Teachers",
        route: "presentation",
      },
      {
        image: imgpE,
        title: "P.E",
        subtitle: "Physical Education teachers",
        route: "presentation",
      },
      {
        image: imgMusic,
        title: "Music Studies",
        subtitle: "Music Class/Tuition",
        route: "presentation",
      },
      {
        image: imgDt,
        title: "Design and Technology",
        subtitle: "D.T Class",
        route: "presentation",
      },
      {
        image: imgdomesticScience,
        title: "Domestic Science ",
        subtitle: "Cooking Class",
        route: "presentation",
      },
      {
        image: imgartAnddesign,
        title: "Art and Design",
        subtitle: "Art",
        route: "presentation",
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
        },
      {
        image: imgbookMap,
        title: "Nav Tabs",
        subtitle: "2 Nav Tabs",
        route: "navigation-navtabs",
        },
      {
        image: imgadvancedMap,
        title: "More detailed map",
        subtitle: "A more detailed map with lanscaping andoptions included",
        route: "navigation-pagination",
        }
    ]
  },
  {
    heading: "Computer Programing",
    description:
      "A short trip into the new school innovation, BBC Computers ??",
    items: [
      {
        image: imgbbcComputer1,
        title: "Does anyone rememeber these computers with the floppy disc drive?  ",
        subtitle: "Classics but very innovative for the 80's. Always a que at lunch for a computer",
        route: "presentation",
      },
      {
        image: imgbbcComputer2,
        title: "Such power we had never used",
        subtitle: "The BBC was an extraordinary piece of kit and the school as a leader in the field",
        route: "presentation",
      },
      {
        image: imgbbcComputer3,
        title: "A considerable upgrade in the end as BBC develpoment and potiental proved popular ",
        subtitle: "The upgraded model with casette access on the keyboard",
        route: "inputareas-forms",
        },
      {
        image: imgfloopyDisc,
        title: "The discs we're massive as you might remember, or our hands were small",
        subtitle: "Floopy Discs we're quite the innovation in their day, do you remember sharing games at lunch time ",
        route: "inputareas-inputs",
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
        },
      {
        image: `${imagesPrefix}/toasts.jpg`,
        title: "Notifications",
        subtitle: "3 Examples",
        route: "presentation",
      },
      {
        image: imgPopover,
        title: "Tooltips & Popovers",
        subtitle: "2 Examples",
        route: "ac-tooltips-popovers",
        },
      {
        image: imgModal,
        title: "Modals",
        subtitle: "5 Examples",
        route: "ac-modals",
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
        },
      {
        image: `${imagesPrefix}/avatars.jpg`,
        title: "Avatars",
        subtitle: "2 Examples",
        route: "el-avatars",
        },
      {
        image: imgDropdowns,
        title: "Dropdowns",
        subtitle: "2 Examples",
        route: "el-dropdowns",
        },
      {
        image: `${imagesPrefix}/switch.jpg`,
        title: "Toggles",
        subtitle: "2 Examples",
        route: "el-toggles",
        },
      {
        image: `${imagesPrefix}/social-buttons.jpg`,
        title: "Social Buttons",
        subtitle: "2 Examples",
        route: "presentation",
      },
      {
        image: `${imagesPrefix}/breadcrumbs.jpg`,
        title: "Breadcrumbs",
        subtitle: "1 Example",
        route: "el-breadcrumbs",
        },
      {
        image: `${imagesPrefix}/badges.jpg`,
        title: "Badges",
        subtitle: "3 Examples",
        route: "el-badges",
        },
      {
        image: `${imagesPrefix}/progress.jpg`,
        title: "Progress Bars",
        subtitle: "4 Examples",
        route: "el-progress-bars",
        },
      {
        image: `${imagesPrefix}/tables.jpg`,
        title: "Tables",
        subtitle: "3 Examples",
        route: "presentation",
      },
      {
        image: `${imagesPrefix}/typography.jpg`,
        title: "Typography",
        subtitle: "2 Examples",
        route: "el-typography",
        }
    ]
  }
];
