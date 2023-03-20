import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";


describe('Pruebas en 08-imp-exp', () => { 

    test( 'getHeroebyId debe de retornar un héroe por ID', () => {

        const id = 1;
        const hero = getHeroeById( id );
        
        expect( hero ).toEqual( { id: 1, name: 'Batman', owner: 'DC' } );

    });

    test( 'getHeroesByOwner debe de retornar undefined si no existe', () => {

        const id = 100;
        const hero = getHeroeById( id );
        
        expect( hero ).toBeFalsy( );

    });

    //Tarea
    //Debe de retornar un arreglo
    //Length === 3
    //toEqual al arreglo filtrado
    test( 'getHeroesByOwner debe de retornar todos los heores de DC', () => {

        const owner = 'DC';
        const heroes = getHeroesByOwner( owner );
        
        expect( heroes.length ).toBe( 3 );
        expect( heroes ).toEqual([
            {  id: 1, name: 'Batman', owner: 'DC' },
            {  id: 3, name: 'Superman', owner: 'DC' },
            {  id: 4, name: 'Flash', owner: 'DC' }
        ]);

        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ) );

    });
    //Debe de retornar un arreglo con los heroes de Marvel
    //length === 2
    test( 'getHeroesByOwner debe de retornar todos los heores de Marvel', () => {

        const owner = 'Marvel';
        const heroes = getHeroesByOwner( owner );
        
        expect( heroes.length ).toBe( 2 );
        expect( heroes ).toEqual([
            {  id: 2, name: 'Spiderman', owner: 'Marvel' },
            {  id: 5, name: 'Wolverine', owner: 'Marvel' }
        ]);
        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ) );

    });

 });