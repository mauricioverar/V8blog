<template>
    <div>
        <header class="masthead" style="background-image: url('/assets/img/chevrolet-blazer.jpg');">
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-md-10 col-lg-8 mx-auto">
                        <div class="post-heading">
                            <h1><strong><h1 v-text="titulo"></h1></strong></h1>                            
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
export default {
  props: ["administrador"], //De manera alternativa, podemos hacer uso de props para manipular los datos que son entregados a las rutas
  computed: {      
    titulo() {
        console.log(this.administrador)
      return this.administrador == 'simple' ? `Bienvenido a la página de Administración` : "Esta página de_ administración está en construcción. Intente como administrador simple";
    },
  },
}; //nos limitamos a que el componente sólo reciba el parámetro cliente
</script>