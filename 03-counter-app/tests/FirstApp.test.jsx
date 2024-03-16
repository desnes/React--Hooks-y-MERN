import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('FirstApp', () => {
    /*test('debe hacer match con el snapshot', () => {
        const title = 'Hola, Soy Vegeta';
        const {container } = render( <FirstApp title={ title } /> );
        expect( container ).toMatchSnapshot();


    test('should show <FirstApp /> correctly', () => {
        const title = 'Hola, Soy Vegeta';
        const wrapper = shallow( <FirstApp title={ title } /> );
    
        expect( wrapper ).toMatchSnapshot();
    });
    */

    
    
    test('debe mostrar el titulo en un h1', () => {
        const title = 'Hola, Soy Vegeta';
        const { container, getByText, getByTestId } = render( <FirstApp title={ title } /> );
        // toBeTruthy que exista 
        expect( getByText(title) ).toBeTruthy();

        // --------- esto no es comun, ya que queremos pruebas flexibles
        //const h1 = container.querySelector('h1');
        //expect( h1.innerHTML ).toBe( title ); // va a evaluar el texto exacto con espacios 
        //expect( h1.innerHTML ).toContain( title );

        // --------- esto es mas comun
        //expect( getAllByTestId('test-title').innerHTML ).toBe(title);
        expect( getByTestId('test-title').innerHTML ).toContain(title);
    });

    test('debe mostrar el subtitulo enviado por props', () => {

        const title = 'Hola, Soy Vegeta';
        const subTitle = 'Soy un subtitulo';
        const { getAllByText } = render( 
            <FirstApp 
            title={ title } 
            subTitle={ subTitle } 
            /> 
            );
            // getByText solo permite que llegue uno, getAllByText permite que llegue mas de uno
            //expect( getByText(subTitle) ).toBeTruthy();
            expect( getAllByText(subTitle).length ).toBe(2);
    }
    );
    });