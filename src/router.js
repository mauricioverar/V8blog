import Vue from "vue";
import Router from "vue-router";
import Inicio from "./components/Inicio";
import SobreMi from "./components/SobreMi";
import Contacto from "./components/Contacto";
import Post from "./components/Post";
import Articulo from "./components/Articulo";
import Administrador from "./components/Administrador";
import NotFound from "./components/NotFound";
const lazyLoading = () => import("./components/Inicio");

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "inicio",
      component: Inicio,
      children: [
        {
          path: "",
          component: 
          {            
            lazyloading: Inicio,
          },
        },
      ],
    },
    {
      path: "/home",
      redirect: "/",
    },
    {
      path: "/inicio",
      redirect: "/",
    },
    {
      path: "/portada",
      redirect: "/",
    },
    {
      path: "/sobremi",
      name: "sobremi",
      component: SobreMi,
      alias: "/acerca",
      children: [
        {
          path: "/sobremi",
          component: SobreMi,
        },
      ],

    },
    {
      path: "/contacto",
      name: "contacto",
      component: Contacto,
      alias: "/contactame",
    },
    {
      path: "/post",
      name: "post",
      component: Post,
      children: [
        {
          path: ":articulo",
          component: Articulo,
        },
      ],
    },
    
    {
      path: "/administrador/:administrador",
      component: Administrador,
      //props: true,//indica si el componente referenciado recibirá el parámetro como un props(acá booleano)
      /*props: {//uso de objetos como parámetros. Esta utilidad está especialmente destinada a entregar datos estáticos como props
          cliente: "Clínica Santiago",
        },*/
      props: (route) => ({
        //Props como funciones de parámetros de ruta
        administrador: `${route.params.administrador}`, //se le agregó el texto s.a. para demostrar cómo los parámetros pueden ser manipulados dentro de la función
      }),
    },
    {
      path: "*",
      component: NotFound,
    },
  ],
});
