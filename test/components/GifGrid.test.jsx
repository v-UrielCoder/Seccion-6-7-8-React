import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

//Colocamos la direccion completa relativa para crear un mook
jest.mock("../../src/hooks/useFetchGifs");

describe('pruebas en el componente GifGrid', () => {

  const category = 'One punch';

  test('should de mostrar el loading inicialmente', () => {
    
    //Definimos los valores del mook por defecto
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    })

    render( <GifGrid category={category}/>);
    expect ( screen.getByText('Cargando..'));
    expect ( screen.getByText(category));
    
  });

  test('should de mostart items cuando se cargan las imagenes useFetchGifs', () => {
    const gifs = [
      {
        id:'abc',
        title: 'Saitama',
        url: 'url/prueba'
      },
      
      {
        id:'dfd',
        title: 'Goku',
        url: 'url/prueba'
      }

    ]
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false
    })
    render( <GifGrid category={category}/>);

    expect( screen.getAllByRole('img').length).toBe(2)
  })
})