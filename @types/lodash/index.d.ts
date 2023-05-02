//Se declaran los tipos con los que hay conflicto. El nombre del modulo debe llamarse igual a como se importa
declare module "lodash" {
  export function random(lower: number, upper: number): number;
}
