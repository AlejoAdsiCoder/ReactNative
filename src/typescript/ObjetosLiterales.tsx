//Las interfaces son las que mandan sobre la definicion de los objetos

interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion
}

interface Direccion {
   pais: string;
   casaNo: number; 
}

// Las interfaces solo sirven para ponerle reglas de validacion a los objetos

export const objetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'Fernando',
        edad: 35,
        direccion: {
            pais: 'Canada',
            casaNo: 234
        }
    }

    // persona.nombreCompleto = "asdflkajsdf" esto no es permitido en typescript
    return (
        <>
            <h3>Objetos Literales</h3>
            { JSON.stringify( persona )}
        </>
    )
}