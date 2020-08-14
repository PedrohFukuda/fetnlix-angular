import { Filme } from '../filme'

export interface RespostaTmdb {
	page: number;
	results: Filme[];
	total_pages: number;
	total_results: number;
}