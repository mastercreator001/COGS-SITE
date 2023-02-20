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
import imgharrison from "@/assets/img/Headteachers/harrison.jpg";
import imgteachersgroupbw from "@/assets/img/headteachers/teachersgroupbw.jpg";
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
import imgschoolopening from "@/assets/img/Attentioncatchers/schoolopening.jpg";
import imgtrinitymiddlefire22 from "@/assets/img/Attentioncatchers/trinitymiddlefire22.jpg";
import imgoctogonWindow from "@/assets/img/Attentioncatchers/octogonWindow.jpg";
import imgweald from "@/assets/img/schoolTrips/weald.jpg";
import imgtotlandYouthhostel from "@/assets/img/schoolTrips/totlandYouthhostel.png";
import imgnewfieldHall from "@/assets/img/schoolTrips/newfieldHall.png";
import imgpooleFlag from "@/assets/img/schoolTrips/pooleFlag.png";
import imgcarisbrookeCastle from "@/assets/img/schoolTrips/carisbrookeCastle.png";
import imgromanVillanewport from "@/assets/img/schoolTrips/romanVillanewport.png";
import imgtripsOut from "@/assets/img/schoolTrips/tripsOut.jpg";
import imgosbourneHouse from "@/assets/img/schoolTrips/osbourneHouse.png";
import imgapolloTheatre from "@/assets/img/schoolTrips/apolloTheatre.png";
import imgfinalschoolMap from "@/assets/img/school maps/finalMapCTK.png";
export default [
  {
    heading: "Staff Heads/teachers & support staff",
    description:
      "A Page of all known staff that worked for the school",
    items: [
      {
        id: 1,
        image: imgharrison,
        title: "Head Teachers",
        subtitle: "4 Known head teachers",
        route: "staff",
        text: "This is the text block...."
        },
      {
        id: 2,
        image: imgfelton,
        title: "Deputy Head Teachers",
        subtitle: "Deputy Heads",
        route: "staff",
        text: "This is the <b>text</b> block...."
        },
      {
        id: 3,
        image: imgteachersgroupbw,
        title: "Senoir Staff",
        subtitle: "Year Heads",
        route: "staff",
        text: "This is the <i>text</i> block...."
        },
      {
        id: 4,
        image: imgteachingStaff,
        title: "Teaching Staff",
        subtitle: "A talented bunch",
        route: "staff",
        text: "This is the text block...."
        },
      {
        id: 5,
        image: imgcareTakers,
        title: "Caretakers",
        subtitle: "Caretakes/Maintenance staff",
        route: "staff",
        text: "This is the text block...."
      },
      {
        id: 6,
        image: imgmrsSmith,
        title: "Dinner ladies",
        subtitle: "As present as I rememeber in my time at school we're Mrs smith and Mrs Tout.",
        route: "staff",
        text: "This is the text block...."
      },
      {
        id: 7,
        image: imgdinnerLady1,
        title: "Kitchen staff",
        subtitle: "Dinner Ladies",
        route: "staff",
        text: "This is the text block...."
      },
      {
        id: 8,
        image: imgdinnerLady2,
        title: "Kitchen staff",
        subtitle: "Dinner Ladies",
        route: "staff",
        text: "This is the text block...."
      },
      {
        id: 9,
        image: imglibraryStaff,
        title: "Library staff",
        subtitle: "Mrs Colenutt as I remember, correct me if I'm wrong",
        route: "staff",
        text: "This is the text block...."
      },
      {
        id: 10,
        image: imgfrenchTeacher,
        title: "French teacher Misss Forer",
        subtitle: "Miss Forer had mutiple talents English French D.S",
        route: "staff",
        text: "This is the text block...."
      },
   ]
  },
  {
    heading: "Subjects",
    description: "Eight primary Subjects we're studied at Welly Road",
    items: [
     {
        id: 1,
        image: imgScience,
        title: "Science",
        subtitle: "Science Lab/Teachers",
        route: "subject",
      },
      {
        id: 2,
        image: imgMaths,
        title: "Maths",
        subtitle: "Maths Teacher's",
        route: "subject",
      },
      {
        id: 3,
        image: imgEnglish,
        title: "English",
        subtitle: "English Teachers",
        route: "subject",
      },
      {
        id: 4,
        image: imgpE,
        title: "P.E",
        subtitle: "Physical Education teachers",
        route: "subject",
      },
      {
        id: 5,
        image: imgMusic,
        title: "Music Studies",
        subtitle: "Music Class/Tuition",
        route: "subject",
      },
      {
        id: 6,
        image: imgDt,
        title: "Design and Technology",
        subtitle: "D.T Class",
        route: "subject",
      },
      {
        id: 7,
        image: imgdomesticScience,
        title: "Domestic Science ",
        subtitle: "Cooking Class",
        route: "subject",
      },
      {
        id: 8,
        image: imgartAnddesign,
        title: "Art and Design",
        subtitle: "Art",
        route: "subject",
      },
    ]
  },
  {
    heading: "School Maps",
    description: "A Group of maps of the school",
    items: [
      {
        id: 1,
        image: imgschoolMap,
        title: "A reworked Image of the school in it's design phase",
        subtitle: "Png hand drawn image in inkscape",
        route: "map",
      },
      {
        id: 2,
        image: imgbookMap,
        title: "Nav Tabs",
        subtitle: "2 Nav Tabs",
        route: "map",
      },
      {
        id: 3,
        image: imgadvancedMap,
        title: "More detailed map",
        subtitle: "A more detailed map with lanscaping andoptions included",
        route: "map",
      },
      {
        id: 4,
        image: imgfinalschoolMap,
        title: "A map of the school after it was transferred from C Of E to Christ The King Lower Campus",
        subtitle: "Lower campus< final Map of layout before demolition",
        route: "map",
      },
    ]
  },
  {
    heading: "Computer Programming",
    description:
      "A short trip into the innovations at the school, BBC Computers ??",
    items: [
      {
        id: 1,
        image: imgbbcComputer1,
        title: "Does anyone rememeber these computers with the floppy disc drive?  ",
        subtitle: "Classics but very innovative for the 80's. Always a que at lunch for a computer",
        route: "computer",
      },
      {
        id: 2,
        image: imgbbcComputer2,
        title: "Such power we had never used",
        subtitle: "The BBC was an extraordinary piece of kit and the school as a leader in the field",
        route: "computer",
      },
      {
        id: 3,
        image: imgbbcComputer3,
        title: "A considerable upgrade in the end as BBC develpoment and potiental proved popular ",
        subtitle: "The upgraded model with casette access on the keyboard",
        route: "computer",
        },
      {
        id: 4,
        image: imgfloopyDisc,
        title: "The discs we're massive as you might remember, or our hands were small",
        subtitle: "Floopy Discs we're quite the innovation in their day, do you remember sharing games at lunch time ",
        route: "computer",
        }
    ]
  },
  {
    heading: "Attention Catching Articles",
    description:
      "A brief catch up on the hottest articles to hit the website about the Welly Road School, opening, closing ",
    items: [
      {
        id: 1,
        image: imgschoolopening,
        title: "School Opening A brief history",
        subtitle: "The 4th of february 1971 the school was opened by Reverand R.V Scrunby ",
        route: "attentionC",
      },
      {
        id: 2,
        image: imgtrinitymiddlefire22,
        title: "School Closing A brief summary",
        subtitle: "The school closed 31st August 2008 (site remained open under Christ The King)",
        route: "attentionC",
      },
     {
        id: 3,
        image: imgoctogonWindow,
        title: "School Building Images",
        subtitle: "Some site images of the building and grounds",
        route: "attentionC",
      }
    ]
  },
  {
    heading: "School Trips years 1-4",
    description:
      "School trips from the C Of E Middle School 1971-1990 ",
    items: [
      {
        id: 1,
        image: imgweald,
        title: "1st years Singleton",
        subtitle: "1st years trips away to the Weald and Downland open air historical museum.",
        route: "schoolTrips",
        },
      {
        id: 2,
        image: imgtotlandYouthhostel,
        title: "Totland YMCA Youth Hostel",
        subtitle: "2nd Year school visit to Totland",
        route: "schoolTrips",
        },
      {
        id: 3,
        image: imgnewfieldHall,
        title: "Malham Yorkshire, Malham Cove, Imax, Jorvik",
        subtitle: "3rd Year trip away to Newfield Hall Yorkshire",
        route: "schoolTrips",
        },
      {
        id: 4,
        image: imgpooleFlag,
        title: "Poole in Dorset Adventure Center",
        subtitle: "4th Year Visit to Poole In Dorset Adventure Center",
        route: "schoolTrips",
        },
      {
        id: 5,
        image: imgcarisbrookeCastle,
        title: "Carisbrooke Castle",
        subtitle: "Carisbrooke Castle various visits",
        route: "schoolTrips",
      },
      {
        id: 6,
        image: imgromanVillanewport,
        title: "Roman Villa Newport",
        subtitle: "A staple of education was Newport Roman Villa hidden in a small town street",
        route: "schoolTrips",
        },
      {
        id: 7,
        image: imgtripsOut,
        title: "Various Trips out across the Island",
        subtitle: "As some students didn't attend Malham or Poole other options were available to students ",
        route: "schoolTrips",
        },
      {
        id: 8,
        image: imgosbourneHouse,
        title: "Osbourne House",
        subtitle: "How many times have you visited Osbourne House, a school staple",
        route: "schoolTrips",
        },
      {
        id: 9,
        image: imgapolloTheatre,
        title: "Apollo Theatre Trip",
        subtitle: " Apollo School Trip, what did you go and see ?",
        route: "schoolTrips",
      },
      ]
  }
];
