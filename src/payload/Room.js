class Room {
    id = null;
    name = null;
    items = [];
    selectingItems = false;
    selectedItems = [];
    selected = false;
    constructor(id, name, items) {
        this.id = id;
        this.name = name;
        this.items = items;
    }
}
export default Room
