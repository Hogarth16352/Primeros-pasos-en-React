import { usContext } from "../../src/base-pruebas/06-deses-obj";


describe('Pruebas en 06-deses-obj', () => {

    test('usContext debe de retornar un objeto', () => {

        const nombre = 'Alan';
        const edad = 37;
        const clave = 'Ironman';
        const rango = "Jefe";

        const user = usContext({ clave, nombre, edad, rango });
    
        expect( user ).toStrictEqual( {
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        } );

    });

  
});