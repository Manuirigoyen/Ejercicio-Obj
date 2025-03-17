export class Autos{
    
    año:number;
    tracTracera:boolean;
    marca:string;
    modelo:string;
    estaPrendido:boolean;
    cajAut:boolean;
    gama:string;
    precio:number;
    
    
    constructor(pAño:number,pTracTracera:boolean,pMarca:string,pModelo:string,pCajAut:boolean,pGama:string){
        this.año = pAño;
        this.tracTracera = pTracTracera;
        this.marca = pMarca;
        this.modelo = pModelo;
        this.estaPrendido = false;
        this.cajAut = pCajAut;
        this.gama = pGama;
        this.precio = 0;
    }


    girar(giro:string):void{
        if(this.estaPrendido==true){
            console.log("Se giro hacia la " + giro);
        }
        else{
            console.log("No se puede girar, el auto no esta encendido");
            
        }
        
    }
    acelerar():void{
        if(this.estaPrendido==true){
            console.log("Se acelero");
        }
        else{
            console.log("No se puede acelerar, el auto no esta encendido");
            
        }
    }
    frenar():void{
        if(this.estaPrendido==true){
            console.log("Se freno");
        }
        else{
            console.log("No se puede frenar, el auto no esta encendido");
            
        }
    }
    
    prenderApagar():void{
        if(this.estaPrendido == true){
            this.estaPrendido = false;
        }else{
            this.estaPrendido = true;
        }        
    }
}