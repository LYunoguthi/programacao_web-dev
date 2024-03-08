class carro{
    ano: number;
    marca: string;
    modelo: string;
    cor: string;

    constructor(ano:number, marca:string, modelo:string, cor:string){
        this.ano=ano;
        this.marca=marca;
        this.modelo=modelo;
        this.cor=cor;
    }

    get ano():number{
        return this.number;
        
    }

    get marca():string{
        return this.marca;
        
    }

    get modelo():string{
        return this.modelo;
        
    }

    get cor():string{
        return this.cor;
        
    }
}