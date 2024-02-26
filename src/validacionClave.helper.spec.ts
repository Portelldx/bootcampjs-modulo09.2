import {
  tieneMayusculasYMinusculas,
  tieneNumeros,
  tieneCaracteresEspeciales,
  tieneLongitudMinima,
  tieneNombreUsuario,
  tienePalabrasComunes,
} from './validacionClave.helper';
import { commonPasswords } from './commonPasswords';

describe('tieneMayusculasYMinusculas', () => {
  it('Debería de devolver esValida=true si la clave tiene mayúsculas y minúsculas', () => {
    // Arrange
    const clave: string = 'Aaa!';
    // Act
    const result = tieneMayusculasYMinusculas(clave);
    // Assert
    expect(result.esValida).toBe(true);
  });

  it('Debería de devolver esValida=false y un mensaje de error si la clave no tiene mayúscula y minúscula', () => {
    // Arrange
    const clave: string = 'aaa1';
    // Act
    const result = tieneMayusculasYMinusculas(clave);
    // Assert
    expect(result.esValida).toBe(false);
    expect(result.error).toEqual(
      'La clave debe de tener mayúsculas y minúsculas'
    );
  });
});

describe('tieneNumeros', () => {
  it('Debería de devolver esValida=true si la clave tiene números', () => {
    // Arrange
    const clave: string = 'aaa1!';
    // Act
    const result = tieneNumeros(clave);
    // Assert
    expect(result.esValida).toBe(true);
  });

  it('Debería de devolver esValida=false si la clave no tiene números', () => {
    // Arrange
    const clave: string = 'aaa';
    // Act
    const result = tieneNumeros(clave);
    // Assert
    expect(result.esValida).toBe(false);
    expect(result.error).toEqual('La clave debe de tener números');
  });
});

describe('tieneCaracteresEspeciales', () => {
  it('Debería devolver esValida=true si la clave tiene caracteres especiales', () => {
    // Arrange
    const clave: string = 'Aaa@';
    // Act
    const result = tieneCaracteresEspeciales(clave);
    // Assert
    expect(result.esValida).toBe(true);
  });

  it('Debería devolver esValida=false y un mensaje de error si la clave no tiene caracteres especiales', () => {
    // Arrange
    const clave: string = 'Aaa1';
    // Act
    const result = tieneCaracteresEspeciales(clave);
    // Assert
    expect(result.esValida).toBe(false);
    expect(result.error).toEqual(
      'La clave debe de tener caracteres especiales'
    );
  });
});

describe('tieneLongitudMinima', () => {
  it('Debería de devolver esValida=true si cumple la longitud mínima de 8 dígitos', () => {
    // Arrange
    const clave: string = 'aaa1a2a2!';
    // Act
    const result = tieneLongitudMinima(clave);
    // Assert
    expect(result.esValida).toBe(true);
  });

  it('Debería de devolver esValida=false si no cumple la longitud mínima de 8 dígitos', () => {
    // Arrange
    const clave: string = 'aaa';
    // Act
    const result = tieneLongitudMinima(clave);
    // Assert
    expect(result.esValida).toBe(false);
    expect(result.error).toEqual(
      'La clave debe de tener una longitud mínima de 8 caracteres'
    );
  });
});

describe('tieneNombreUsuario', () => {
  it('Debería de devolver esValida=true si la contraseña no contienen el nombre de usuario', () => {
    // Arrange
    const clave: string = 'aaa1a2a2adm1n!';
    const usuario: string = 'admin';
    // Act
    const result = tieneNombreUsuario(usuario, clave);
    // Assert
    expect(result.esValida).toBe(true);
  });

  it('Debería de devolver esValida=false si la contraseña contienen el nombre de usuario', () => {
    // Arrange
    const clave: string = 'aaadmin';
    const usuario: string = 'admin';
    // Act
    const result = tieneNombreUsuario(usuario, clave);
    // Assert
    expect(result.esValida).toBe(false);
    expect(result.error).toEqual(
      'La clave no debe tener el nombre del usuario'
    );
  });
});

describe('tienePalabrasComunes', () => {
  it('Debería de devolver esValida=true si la contraseña no contienen palabras comunes', () => {
    // Arrange
    const clave: string = 'aaa1a2a2adm1n!';
    // Act
    const result = tienePalabrasComunes(clave, commonPasswords);
    // Assert
    expect(result.esValida).toBe(true);
  });

  it('Debería de devolver esValida=false y un mensaje de error si la contraseña contienen palabras comunes', () => {
    // Arrange
    const clave: string = 'aaadmin'; // Asegúrate de que "admin" esté en el array commonPasswords
    // Act
    const result = tienePalabrasComunes(clave, commonPasswords);
    // Assert
    expect(result.esValida).toBe(false);
    expect(result.error).toEqual(
      'La clave no debe de contener palabras comunes'
    );
  });
});
