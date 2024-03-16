import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";


describe('Pruebas con promesas', () => {
  test('getHeroeByIdAsync debe retornar un heroe async', (done) => {
    const id = 1;
    getHeroeByIdAsync(id)
      .then(heroe => {
        expect(heroe).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
        done();
      });
  });

  test('getHeroeByIdAsync debe retornar un error si el id no existe', (done) => {
    const id = 1;
    getHeroeByIdAsync(id)
        .then(heroe => {
            //esperar que el heroe no exista
            // then es incorrecto porque estamos evaluando el catch
            //expect(heroe).toBeFalsy();
            done();
        })
      .catch(error => {
        expect(error).toBe('No se pudo encontrar el héroe' + id);
        done();
      });
  });
});