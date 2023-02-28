function printToConsole( constructor: Function) {
    console.log(constructor);
}

const printToConsoleConditional = (print: boolean = false ): Function => {
    if ( print ) {
        return printToConsole
    } else {
        return () => {}
    }
}

const blockPrototype = function(constructor: Function) {
    Object.seal( constructor )
    Object.seal( constructor.prototype )
}

function checkValidPokemonId() {
    return function( target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = (id: number) => {
            if (id < 1 || id > 800) {
                return console.log('Id is not valid, need 1 to 800'); 
            } else {
                return originalMethod(id)
            }
        }
        
    }
}

function readOnly(isWritable: boolean = true): Function {
    return function(target: any, propertyKey: string) {
        const descriptor: PropertyDescriptor = {
            get() {
                return 'Prisciliano'
            },

            set(this, val) {
                Object.defineProperty( this, propertyKey, {
                    value: val,
                    writable: !isWritable,
                    enumerable: false
                })
            }
        }

        return descriptor
    }
}

@blockPrototype
@printToConsoleConditional( true )

export class Pokemon {

    @readOnly()
    public publicApi: string = 'https://pokeapi.co';

    constructor(
        public name: string
    ) {}

    @checkValidPokemonId()
    savePokemonDB( id: number) {
        console.log(`Pokemon save id DB ${id}`);
        
    }
}