import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('pruebas en useFetchGifs', () => {

  test('debe de regresar el estado incial', () => {

    //De esta manera invocamos cualquier hook para ser evaluado despues de ser importado el wait for
    
    const { result } = renderHook( () => useFetchGifs('One Punch') );
    const { images, isLoading } = result.current;

    expect( images.length ).toBe(0);
    expect( isLoading ).toBeTruthy;

  })

  test('debe de regresar un arreglo de imagenes y isLoading en false ', async() => {

    const { result } = renderHook( () => useFetchGifs('One Punch') );
    
    await waitFor(
      () => expect( result.current.images.length ).toBeGreaterThan(0)
    )
      
    const { images, isLoading } = result.current;
    expect( images.length ).toBeGreaterThan(0);
    expect( isLoading ).toBeFalsy;
    
  })
})