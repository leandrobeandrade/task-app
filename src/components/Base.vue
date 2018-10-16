<template>

  <div>
    <el-row :gutter="20">
      <el-col :span="12" :offset="6">
        <el-card class="box-1">          
          <h2>{{ titulo }}</h2>      
        </el-card>
        <el-card class="box-2">   
          <div class="text item">
            <input-form></input-form>
            <hr v-show="lista.length > 0">
            <lista-form></lista-form>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>

</template>

<script>
import InputForm from './atividades/Form.vue'
import ListaForm from './atividades/Lista.vue'

export default {
  data() {
    return {
      titulo: 'Lista de Atividades'
    }
  },
  computed: {
    lista () {
      return this.$store.state.Atividades.lista
    }
  },
  components: {
    InputForm, ListaForm
  }
};
</script>

<style scoped>
  .box-1 {
    background-color: #6163DA;
    color: #FFF;
    text-align: center;
    width: 420px;
  }
  h2 {
    margin: -15px 0;
  }
  .box-2 {
    width: 420px;
  }
</style>