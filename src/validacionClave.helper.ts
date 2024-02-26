import { ValidacionClave } from './modelo';

export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
  const tieneMayusculas = /[A-Z]/.test(clave);
  const tieneMinusculas = /[a-z]/.test(clave);
  return tieneMayusculas && tieneMinusculas
    ? { esValida: true }
    : {
        esValida: false,
        error: 'La clave debe de tener mayúsculas y minúsculas',
      };
};

export const tieneNumeros = (clave: string): ValidacionClave => {
  return /[0-9]/.test(clave)
    ? { esValida: true }
    : { esValida: false, error: 'La clave debe de tener números' };
};

export const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
  return /[!@#$%^&*(),.?":{}|<>]/.test(clave)
    ? { esValida: true }
    : {
        esValida: false,
        error: 'La clave debe de tener caracteres especiales',
      };
};

export const tieneLongitudMinima = (clave: string): ValidacionClave => {
  return clave.length >= 8
    ? { esValida: true }
    : {
        esValida: false,
        error: 'La clave debe de tener una longitud mínima de 8 caracteres',
      };
};

export const tieneNombreUsuario = (
  nombreUsuario: string,
  clave: string
): ValidacionClave => {
  return !clave.includes(nombreUsuario)
    ? { esValida: true }
    : {
        esValida: false,
        error: 'La clave no debe tener el nombre del usuario',
      };
};

export const tienePalabrasComunes = (
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  const esInvalida = commonPasswords.some((commonPassword) =>
    clave.includes(commonPassword)
  );
  return esInvalida
    ? {
        esValida: false,
        error: 'La clave no debe de contener palabras comunes',
      }
    : { esValida: true };
};
