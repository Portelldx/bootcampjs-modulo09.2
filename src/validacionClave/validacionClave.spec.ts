import { validarClave } from './validacionClave';
import { commonPasswords } from './commonPasswords';

describe('validarClave', () => {
  it('Debería devolver esValida=true para una clave válida', () => {
    // Arrange
    const nombreUsuario = 'usuario';
    const clave = 'Cl@veSegura1';
    // Act
    const resultado = validarClave(nombreUsuario, clave, commonPasswords);
    // Assert
    expect(resultado.esValida).toBe(true);
  });

  it('Debería devolver esValida=false y un mensaje de error para una clave con longitud insuficiente', () => {
    // Arrange
    const nombreUsuario = 'usuario';
    const clave = 'Corta1!';
    // Act
    const resultado = validarClave(nombreUsuario, clave, commonPasswords);
    // Assert
    expect(resultado.esValida).toBe(false);
    expect(resultado.error).toEqual(
      'La clave debe de tener una longitud mínima de 8 caracteres'
    );
  });

  it('Debería devolver esValida=false y un mensaje de error si la clave contiene el nombre de usuario', () => {
    // Arrange
    const nombreUsuario = 'usuario';
    const clave = 'usuarioClave1!';
    // Act
    const resultado = validarClave(nombreUsuario, clave, commonPasswords);
    // Assert
    expect(resultado.esValida).toBe(false);
    expect(resultado.error).toEqual(
      'La clave no debe tener el nombre del usuario'
    );
  });

  it('Debería devolver esValida=false y un mensaje de error si la clave contiene palabras comunes', () => {
    // Arrange
    const nombreUsuario = 'usuario';
    const clave = 'passwordSegura1!';
    // Act
    const resultado = validarClave(nombreUsuario, clave, commonPasswords);
    // Assert
    expect(resultado.esValida).toBe(false);
    expect(resultado.error).toEqual(
      'La clave no debe de contener palabras comunes'
    );
  });
});
