import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import AboutUs from "../views/AboutUs.vue";
import ContactUs from "../views/ContactUs.vue";
import Events from "../views/Events.vue";
import PatentPublications from "../views/PatentPublications.vue";
import Actors from "../views/Actors.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about-us",
    name: "about-us",
    component: AboutUs,
  },
  {
    path: "/contact-us",
    name: "contact-us",
    component: ContactUs,
  },
  {
    path: "/events",
    name: "events",
    component: Events,
  },
  {
    path: "/patent-publication",
    name: "patent-publication",
    component: PatentPublications,
  },
  {
    path: "/actors",
    name: "actors",
    component: Actors,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
