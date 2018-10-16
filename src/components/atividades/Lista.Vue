<template>
	<div>
		<div class="atividades" v-for="atividades in lista" :class="{feitos: atividades.realizado}" @click="feito(atividades)">
			<h3>{{ atividades.atividade }}</h3>
			<p>{{ atividades.descricao }}</p>
			<p>
				<em>{{ atividades.datas }}</em>
				<button id="btn-remover" @click.prevent="excluir = true">Remover</button>
			</p>
		</div>
		<el-dialog class="dialog"
		 	title="Excluir Tarefa"
		  :visible.sync="excluir"
		  width="25%">
		  <span>Tem certeza que deseja excluir esta tarefa?</span>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="excluir = false">Cancelar</el-button>
		    <el-button type="primary" @click="exclusao">Excluir</el-button>
		  </span>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				excluir: false
			}
		},
		computed: {
			lista() {
				return this.$store.state.Atividades.lista
			}
		},
		methods: {
			removerTarefa(atividades) {
				this.$store.commit('REMOVER_ATIVIDADES', atividades)
			},
			exclusao(atividades) {
				this.excluir = false;
				this.removerTarefa(atividades);
			},
			feito(atividades) {
				atividades.realizado = !atividades.realizado
			}
		} 
	};
</script>

<style>
	.atividades {
		border-bottom: solid #999 1px;
		padding-top: 10px;
		cursor: no-drop;
	}
	em {
		color: red;
	}
	#btn-remover {
		background-color: #6163da;
		color: #FFF;
		margin-left: 60%;
		height: 25px;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}
	.feitos {
		background-color: #F2F3F4;
		text-decoration: line-through;
	}
	.dialog {
		margin-left: -200px;
	}
</style>