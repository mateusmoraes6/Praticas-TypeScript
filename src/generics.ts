const returnValue = <f>(value: f): f => value;

const message = returnValue<string>("Hello World");

const count = returnValue<number>(5);

function getFirstValueFromArray<type>(array: type[]) {
    return array[0];
}

const firstValueFromStringArray = getFirstValueFromArray<string>(["1", "2"]);
const firstValueFromNumberArray = getFirstValueFromArray<number>([10, 20]);

// Promises
const returnPromise = async(): Promise<string> => {
    return "5"
};

// Classes
class GenericNumber<t> {
    zeroValue: t;
    sum: (x: t, y: t) => t;

    constructor(zeroValue: t, sum: (x: t, y: t) => t) {
        this.zeroValue = zeroValue;
        this.sum = sum;
    }
}

const myGenericNumber =new GenericNumber<number>(0, (x: number, y: number) => {
    return x + y;
});
