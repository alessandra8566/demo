import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

let routes = [
  {
    path: "/",
    name: "HomePage",
    layout: "dashboard",
    component: () => import("@/views/HomePage.vue"),
  },
  {
   path: "/login",
   name: "HomePage",
   layout: "default",
   component: () => import("@/views/Login.vue")
  },
  {
    path: "/fullpage",
    name: "MyFullPage",
    layout: "dashboard",
    component: () => import("@/views/MyFullPage.vue")
  },
  {
    path: "/homedesign",
    name: "HomeDesign",
    layout: "dashboard",
    component: () => import("@/views/HomeDesign.vue")
  },
  {
    path: "/pages",
    name: "Loading",
    layout: "default",
    component: () => import("@/components/common/loading.vue")
  }
];


// Adding layout property from each route to the meta
// object so it can be accessed later.
function addLayoutToRoute( route, parentLayout = "default" )
{
	route.meta = route.meta || {} ;
	route.meta.layout = route.layout || parentLayout ;
	
	if( route.children )
	{
		route.children = route.children.map( ( childRoute ) => addLayoutToRoute( childRoute, route.meta.layout ) ) ;
	}
	return route ;
}

routes = routes.map( ( route ) => addLayoutToRoute( route ) ) ;

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
		if ( to.hash ) {
			return {
				selector: to.hash,
				behavior: 'smooth',
			}
		}
		return {
			x: 0,
			y: 0,
			behavior: 'smooth',
		}
	}

});

export default router;
