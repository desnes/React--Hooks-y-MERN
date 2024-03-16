import { getImagen } from "../../src/base-pruebas/11-async-await";


//w
describe('Pruebas con async-await y fetch', () => {
    test('debe retornar el url de la imagen', async () => {
        const url = await getImagen();
        console.log(url);
        expect( typeof url ).toBe('string');
    });
    }
);
