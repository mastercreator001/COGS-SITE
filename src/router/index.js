import { createRouter, createWebHistory } from "vue-router";
import PresentationView from "../views/Presentation/PresentationView.vue";
import PresentationStaff from "../views/Presentation/Sections/PresentationStaff.vue";
import PresentationSubject from "../views/Presentation/Sections/PresentationSubject.vue";
import PresentationMap from "../views/Presentation/Sections/PresentationMap.vue";
import PresentationattentionC from "../views/Presentation/Sections/PresentationattentionC.vue";
import PresentationschoolTrips from "../views/Presentation/Sections/PresentationschoolTrips.vue";
import PresentationComputer from "../views/Presentation/Sections/PresentationComputer.vue";
import AboutView from "../views/LandingPages/AboutUs/AboutView.vue";
import AuthorView from "../views/LandingPages/Author/AuthorView.vue";
import DocumentsView from "../views/LandingPages/Documents/DocsSchoolDocuments.vue";
import ContactView from "../views/LandingPages/ContactUs/ContactView.vue";
import SignInBasicView from "../views/LandingPages/SignIn/BasicView.vue";
import PageHeaders from "../layouts/sections/page-sections/page-headers/HeadTeacherSection.vue";
import PageFeatures from "../layouts/sections/page-sections/features/SchoolTeachers.vue";
import NavigationNavbars from "../layouts/sections/navigation/navbars/OpeningOfTheSchool.vue";
import NavigationNavTabs from "../layouts/sections/navigation/nav-tabs/Schoolday.vue";
import NavigationPagination from "../layouts/sections/navigation/pagination/HistorySchoolClosing.vue";
import InputAreasInputs from "../layouts/sections/input-areas/inputs/SchoolMapsOpeningMaps.vue";
import InputAreasForms from "../layouts/sections/input-areas/forms/ConstructionMap.vue";
import ACAlerts from "../layouts/sections/attention-catchers/alerts/SeventiesGallery.vue";
import ACModals from "../layouts/sections/attention-catchers/modals/EighitiesGallery.vue";
import ACTooltipsPopovers from "../layouts/sections/attention-catchers/tooltips-popovers/SchoolTrips.vue";
import ElAvatars from "../layouts/sections/elements/avatars/DemolitionPhotoGallery.vue";
import ElBadges from "../layouts/sections/elements/badges/DemolitionCurrentSiteSatus.vue";
import ElBreadcrumbs from "../layouts/sections/elements/breadcrumbs/BreadcrumbsView.vue";
import ElButtons from "../layouts/sections/elements/buttons/ButtonsView.vue";
import ElButtonGroups from "../layouts/sections/elements/button-groups/ButtonGroupsView.vue";
import ElDropdowns from "../layouts/sections/elements/dropdowns/DropdownsView.vue";
import ElProgressBars from "../layouts/sections/elements/progress-bars/ProgressBarsView.vue";
import ElToggles from "../layouts/sections/elements/toggles/TogglesView.vue";
import ElTypography from "../layouts/sections/elements/typography/TypographyView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "presentation",
      component: PresentationView,
    },
    {
      path: "/pages/landing-pages/about-us",
      name: "about",
      component: AboutView,
    },
    {
      path: "/pages/landing-pages/author",
      name: "author",
      component: AuthorView,
    },
    {
      path: "/pages/landing-pages/contactus",
      name: "contactus",
      component: ContactView,
    },
    {
      path: "/staff/:id",
      name: "staff",
      component: PresentationStaff,
      props: true,
    },
    {
      path: "/subject/:id",
      name: "subject",
      component: PresentationSubject,
      props: true,
    },
    {
      path: "/map/:id",
      name: "map",
      component: PresentationMap,
      props: true,
    },
    {
      path: "/computer/:id",
      name: "computer",
      component: PresentationComputer,
      props: true,
    },
    {
      path: "/attentionC/:id",
      name: "attentionC",
      component: PresentationattentionC,
      props: true,
    },
    {
      path: "/schoolTrips/:id",
      name: "schoolTrips",
      component: PresentationschoolTrips,
      props:true,
    },
    {
      path: "/sections/navigation/nav-tabs",
      name: "navigation-navtabs",
      component: NavigationNavTabs,
    },
    {
      path: "/pages/landing-pages/documents",
      name: "docs",
      component: DocumentsView,
    },
    {
      path: "/pages/landing-pages/basic",
      name: "signin-basic",
      component: SignInBasicView,
    },
    {
      path: "/sections/page-sections/page-headers",
      name: "page-headers",
      component: PageHeaders,
    },
    {
      path: "/sections/page-sections/features",
      name: "page-features",
      component: PageFeatures,
    },
    {
      path: "/sections/navigation/navbars",
      name: "navigation-navbars",
      component: NavigationNavbars,
    },
    {
      path: "/sections/navigation/pagination",
      name: "navigation-pagination",
      component: NavigationPagination,
    },
    {
      path: "/sections/input-areas/inputs",
      name: "inputareas-inputs",
      component: InputAreasInputs,
    },
    {
      path: "/sections/input-areas/forms",
      name: "inputareas-forms",
      component: InputAreasForms,
    },
    {
      path: "/sections/attention-catchers/alerts",
      name: "ac-alerts",
      component: ACAlerts,
    },
    {
      path: "/sections/attention-catchers/modals",
      name: "ac-modals",
      component: ACModals,
    },
    {
      path: "/sections/attention-catchers/tooltips-popovers",
      name: "ac-tooltips-popovers",
      component: ACTooltipsPopovers,
    },
    {
      path: "/sections/elements/avatars",
      name: "el-avatars",
      component: ElAvatars,
    },
    {
      path: "/sections/elements/badges",
      name: "el-badges",
      component: ElBadges,
    },
    {
      path: "/sections/elements/breadcrumbs",
      name: "el-breadcrumbs",
      component: ElBreadcrumbs,
    },
    {
      path: "/sections/elements/buttons",
      name: "el-buttons",
      component: ElButtons,
    },
    {
      path: "/sections/elements/button-groups",
      name: "el-button-groups",
      component: ElButtonGroups,
    },
    {
      path: "/sections/elements/dropdowns",
      name: "el-dropdowns",
      component: ElDropdowns,
    },
    {
      path: "/sections/elements/progress-bars",
      name: "el-progress-bars",
      component: ElProgressBars,
    },
    {
      path: "/sections/elements/toggles",
      name: "el-toggles",
      component: ElToggles,
    },
    {
      path: "/sections/elements/typography",
      name: "el-typography",
      component: ElTypography,
    },
  ],
});
export default router;