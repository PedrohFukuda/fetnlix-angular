import { Conta } from '../base-data-types/conta';
import { MASTERA } from './mock-masterPerfilA'

export const MOCKCONTA: Conta[] = [
	{ 
		estaAutenticado: false,
		id: 0, 
		masterPerfil: MASTERA[0], 
		perfis: [
			{ 
				id: 0,
				nome: 'Armando',
				lsFilmesAssistir: [0, 1, 2]
			},
			{ 
				id: 1,
				nome: 'Ariel',
				lsFilmesAssistir: [0, 3]
			},
			{ 
				id: 2,
				nome: 'Arthur',
				lsFilmesAssistir: [2]
			}
		]
	},
	{ 
		estaAutenticado: false,
		id: 1, 
		masterPerfil: MASTERA[1],
		perfis: [
			{ 
				id: 0,
				nome: 'Bruno',
				lsFilmesAssistir: [0, 1, 2, 3]
			},
			{ 
				id: 1,
				nome: 'Bianca',
				lsFilmesAssistir: []
			}
		]
	}
];

