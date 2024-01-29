// Tipos Básicos
let age: number = 5;
const firstName: string = "Mateus"
const isValid: boolean = true;
let idk: any = 5;

idk = "21";
idk = true;

const ids: number[] = [1, 2, 3, 4, 5];
const booleans: boolean[] = [true, false, true, false];
const names: string[] = ["Mateus", "MaryJane"];

// Tupla
const person: [number, string] = [1, "MaryJane"];

// Lista de Tuplas
const people: [number, string][] = [
    [1, "MarryJane"],
    [2, "Mat"],
];

// Intersections
const productId: string | number | boolean = false

// Enum
enum Direction {
    Up = 1,
    Down = 2,
    Left = "Esquerda",
}

const direction = Direction.Left;

// Type Aseertions
const productName: any = "Boné";

// Let itemId = productName as string;
let itemId = <string>productName;

console.log(direction);
