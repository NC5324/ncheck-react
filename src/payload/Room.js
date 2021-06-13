class Room {
    id = null;
    name = null;
    items = [];
    selectedItems = [];
    selected = false;
    selectionOngoing = false;
    constructor(id, name, items) {
        this.id = id;
        this.name = name;
        this.items = items;
    }
}
export default Room
