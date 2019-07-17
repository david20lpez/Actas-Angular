import { Acta } from './acta';

export class Proyecto {
    public id : number;
    public nombre : string;
    public descripcion : string;
    public actas: Array<Acta>;
}
