import { Cidade } from "./cidade.model";
import { Bairro } from "./bairro.model";
import { Estado } from "./estado.model";

export class Time {
	public Id: number;
	public Nome: string;
	public Proprietario: string;
	public Email: string;
	public Telefone: string;
	public IdBairro: number;
	public IdCidade: number;
	public IdEstado: number;
	public Emblema: string;
	public Senha: string;
	public DataCriacao: Date;
	public Cidade: Cidade;
	public Estado: Estado;
	public Bairro: Bairro;
	public Geral: number;
}