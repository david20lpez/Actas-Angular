import { ParticipanteActa } from './participanteActa';
import { Compromiso } from './compromiso';

export class Acta {
  public id : number;
  public fecha : Date;
  public ubicacion : string;
  public contenido : string;
  public idProyecto : number;
  public nombreProyecto: string;
  public participantes : Array<ParticipanteActa>;
  public compromisos : Array<Compromiso>;
}
