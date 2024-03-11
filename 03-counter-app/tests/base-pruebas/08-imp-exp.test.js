import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";


describe('Pruebas en 08-imp-exp.js', () => {
    test('getHeroeById debe retornar un heroe por ID', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        expect(heroe).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });

    });

    test('getHeroeById debe retornar undefined si no existe' , () => {
        const id = 100;
        const heroe = getHeroeById(id);
        expect(heroe).toBe(undefined);
    });

    //Tarea
    // getHeroesByOwner
    // debe retornar un arreglo con los heroes de DC
    // length = 3
    // toEqual al arreglo filtrado
    test('getHeroesByOwner debe retornar un arreglo con los heroes de DC', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toBe(3);
    });

    test('getHeroesByOwner debe retornar un arreglo con los heroes de DC', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        /*expect(heroes).toEqual([
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            }
        ]);*/
        expect(heroes).toEqual(heroes.filter(heroe => heroe.owner === owner));
    });

    test('getHeroesByOwner debe retornar un arreglo con los heroes de Marvel', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toBe(2);
        expect(heroes).toEqual([
            {
                id: 2,
                name: 'Spiderman',
                owner: 'Marvel'
            },
            {
                id: 5,
                name: 'Wolverine',
                owner: 'Marvel'
            }
        ]);
        
        
    });
    
});