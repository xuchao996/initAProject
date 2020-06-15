import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Foo from "@/components/Foo.vue";
import Bar from "@/components/Bar.vue";

const routes = [
  {path: "/foo", component: Foo},
  {path: "/bar", component: Bar}
]
export default new Router({
  routes,
});
