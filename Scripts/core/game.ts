module objects {
	export class Person {
	//PRIVATE INSTANCE VARIABLES ----------------
	private _name:string;
	private _age:number;
	
	//CONSTRUCTORS ----------------
	constructor(name:string, age:number) {
		
		this._name = name;
		this._age = age;
	}
	
	//PUBLIC METHODS -----------------
	public Speaks() {
		console.log(this._name + " says Hello!");
	}
}
}

function init():void {
    console.log("Game started!");
}

window.addEventListener("load",init);
