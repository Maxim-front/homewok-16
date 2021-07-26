const dataTypes = [
    true,
    's',
    0,
    null,
    undefined,
    {},
    [],
    '0n',
    //Symbol(),
    () => {},
]

function Infrormation(elem) {
    this.value = elem;
    this.type = typeof elem;

    if (Number.isNaN(elem)) {
        this.number = '--';
    }

    if (Number.isNaN(elem) == false) {
        this.number = Number(elem)

    }

    this.string = String(elem);
    this.boolean = Boolean(elem);
}

let map = new Map()

for (item of dataTypes) {
    let infrormation = new Infrormation(item)
    map.set(item, infrormation)
}

console.log(map)