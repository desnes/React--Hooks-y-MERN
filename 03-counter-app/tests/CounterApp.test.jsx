import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('CounterApp', () => {

    const initialValue = 100;
    test('debe hacer match con el snapshot', () => {
        const {container} = render( <CounterApp value={ initialValue } /> );
        expect( container ).toMatchSnapshot();
       
    });

    test('debe mostrar el valor inicial de 100', () => {
        
        render( <CounterApp value={ initialValue } /> );
        expect( screen.getByText(initialValue) ).toBeTruthy();

        expect( screen.getByRole('heading', {level: 2}).innerHTML ).toContain(initialValue.toString());
    });

    

    test('debe incrementar con el boton +1', () => {
        render( <CounterApp value={ initialValue } /> );
        fireEvent.click(screen.getByText('+1'));
        expect( screen.getByText(initialValue + 1) ).toBeTruthy();
    });

    test('debe funcionar el boton de reset ', () => {
        render( <CounterApp value={ initialValue } /> );
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        //fireEvent.click(screen.getByText('Reset'));
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset'}));    
        expect( screen.getByText(initialValue) ).toBeTruthy();
    });
/*
    test('debe decrementar con el boton -1', () => {
        const wrapper = shallow( <CounterApp value={ 100 } /> );
        wrapper.find('button').at(2).simulate('click');
        const valueText = wrapper.find('h2').text().trim();
        expect( valueText ).toBe('99');
    });

    test('debe resetear el valor por defecto con el boton reset', () => {
        const wrapper = shallow( <CounterApp value={ 100 } /> );
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const valueText = wrapper.find('h2').text().trim();
        expect( valueText ).toBe('100');
    });*/
});
