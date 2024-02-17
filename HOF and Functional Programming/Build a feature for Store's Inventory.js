const inventory = {
    "item1": 10,
    "item2": 20,
    "item3": 30
};

const convertedInventory = Object.fromEntries(
    Object.entries(inventory).map(([item, price]) => [item, price * 80])
);

console.log(convertedInventory);
