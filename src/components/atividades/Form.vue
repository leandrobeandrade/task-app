<template>
	<div>
		<form class="form" @submit.prevent="submeter">
			<div>
				<el-input type="text" placeholder="Qual sua atividade?" v-model="atividades.atividade">
					<i slot="append" class="el-icon-document"></i>
		  	</el-input>
			</div>
			<div>
				<h3>Descreva sua atividade:</h3>
		  	<el-input type="textarea" rows="3" v-model="atividades.descricao"></el-input>
		  </div>
		  <div>
		  	<br>
		  	<el-input type="text" placeholder="Qual a data?" v-model="atividades.datas">
		  		<i slot="append" class="el-icon-time"></i>
		  	</el-input>
		  </div>
		  <div>
		  <br>
		  <button id="salvar">Salvar</button>
		</div>
		</form>
	</div>

</template>

<script>
	import moment from 'moment'

	export default {
		data() {
			return {
				atividades: {
					atividade: '',
					descricao: '',
					datas: moment().format('DD/MM/YYYY'),
					realizado: false
				}
			}
		},
		methods: {
			submeter() {
				const clonado = JSON.parse(JSON.stringify(this.atividades))
				this.$store.commit('ADD_ATIVIDADES', clonado)
				this.resetar()
			},
			resetar() {
				this.atividades.atividade = ''
				this.atividades.descricao = ''
				this.atividades.datas = moment().format('DD/MM/YYYY')
			}
		}
	};
</script>

<style>
	h3 {
		text-decoration-line: underline;
		color: #5D6D7E;
	}
	#salvar {
		width: 80px;
		height: 40px;
		background-color: #58D68D;
		color: #FFF;
		border: none;
		border-radius: 4px;
		outline: none;
		margin-left: 40%;
	}
	#salvar:hover {
		background-color: #28B463;
		cursor: pointer;
	}
</style>