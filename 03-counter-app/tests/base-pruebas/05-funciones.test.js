import { getUsuarioActivo, getUser } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => { 
    
    test('getuser debe de retornar un objeto', () => {
        // 1. Inicialización
        const testuser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        // 2. Estímulo
        const user = getUser();
        // 3. Observar el comportamiento
        expect(user).toStrictEqual(testuser);
    


    });
    test('getUsuarioActivo debe de retornar un objeto', () => {
        // 1. Inicialización
        const nombre = 'Fernando';
        const testuser = {
            uid: 'ABC567',
            username: nombre
        }

        const user = getUsuarioActivo(nombre);
        expect(user).toStrictEqual(testuser);

    });

 });
