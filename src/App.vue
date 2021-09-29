<template>
  <div>
    <nav class="navbar navbar-light navbar-expand-lg fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand">V8</a
        ><button
          data-toggle="collapse"
          data-target="#navbarResponsive"
          class="navbar-toggler"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fa fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="nav navbar-nav ml-auto">
            <li class="nav-item" role="presentation">
              <router-link :to="{ name: 'inicio' }">portada</router-link>
            </li>
            <li class="nav-item" role="presentation">
              <router-link :to="{ name: 'sobremi' }">sobre mí</router-link>
            </li>
            <li class="nav-item" role="presentation">
              <router-link :to="{ name: 'contacto' }">contacto</router-link>
            </li>
            <li class="nav-item" role="presentation">
              <router-link to="/post/1">último post</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view name="lazyloading"></router-view>   
    <transition name="mi-transicion">
        <router-view></router-view>
    </transition>
  </div>
</template>


<script>
export default {
  data() {
    return {
      mostrar: false,
    };
  },
  methods: {
    mostrarDemo() {
      this.mostrar = !this.mostrar;
    },
  },
};
</script>
<style scoped>
.mi-transicion-enter-active,
.mi-transicion-leave-active {
  transition: opacity 5.5s, padding 1.1s;
}
.mi-transicion-enter,
.mi-transicion-leave-to {
  opacity: 0;
  padding: 10px;
}
.mi-transicion-enter-to, .mi-transicion-leave {
opacity: .9;
padding: 0px;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
