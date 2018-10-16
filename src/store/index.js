import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		Atividades: {
			lista: []
		}
	},
	mutations: {
		ADD_ATIVIDADES(state, obj) {
			state.Atividades.lista.unshift(obj)
		},
		REMOVER_ATIVIDADES(state, obj) {
		//	const indice = state.Atividades.lista.indexOf(obj)						exclui o primeiro a partir de cima
			state.Atividades.lista.splice(obj, 1);												// exclui o primeiro a partir de baixo
		}
	}
}) 