class Room {
    id;
    name;
    items = [];
    selectedItems = [];
    selected = false;
    selectionOngoing = false;
    constructor(id, name, items, ) {
        this.id = id;
        this.name = name;
        this.items = items;
    }
}
export default Room
