class Lion{
    constructor(name, color, weight){
        this.name = name;
        this.color = color;
        this.weight = weight;
    }
   static cantFly(){
        return false;
    }
}

let Bumi = new Lion('Bumi', 'red', '2kg');
let Koko = new Lion('koko', 'blue', '3.7kg')
console.log(Lion);
console.log(Bumi);
console.log(Koko)
console.log(Lion.cantFly())
