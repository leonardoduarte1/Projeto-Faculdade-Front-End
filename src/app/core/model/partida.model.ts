

import { Time } from "./time.model";
import { LocalPartida } from "./localPartida.model";

export class Partida {
	public Id: number;
	public Data: string;
	public DataPartida: string;
	public IdLocalPartida: number;
	public IdTimeA: number;
	public TimeA: Time;
	public TimeB: Time;
	public IdTimeB: number;
	public IdTimeVencedor: number;
	public IdSituacao: number;
	public PlacarTimeA: number;
	public PlacarTimeB: number;
	public LocalPartida: LocalPartida;
}