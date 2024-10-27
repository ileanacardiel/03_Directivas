const app = {
  data(){
    return{
    cantidad: '¿Cuántos tacos te comes?',
    ultima: '¿Con quién comiste tacos por última vez?',
    favorito:'¿Cuál es tu sabor de taco favorito?',
    responde:'',
    cantidadTacos: '',
    UltimaVez:'',
    saborsito:[],
    nuevoSabor: '',
    sabores: [],
    tipos:'',

  }
},
  methods: {
    agregarSabor() {
      if (this.nuevoSabor !== '') {
        this.sabores.push(this.nuevoSabor);
        this.nuevoSabor = '';
      }
    }
  }
}
Vue.createApp(app).mount('#app');
