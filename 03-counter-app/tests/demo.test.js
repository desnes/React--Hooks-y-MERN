describe('Pruebas en <Demo Component/>', () => { 

    test('Esta prueba no debe fallar', () => { 
    // 1. Inicialización
    const mensaje1 = 'Hola Mundo';
    // 2. Estímulo
    const mensaje2 = mensaje1.trim();
    // 3. Observar el comportamiento
    expect(mensaje1).toBe(mensaje2);
 });
 });


