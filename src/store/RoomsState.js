import Room from '../payload/Room'

class RoomsState {
    rooms = [];
    loadingRooms = false;
    creatingRoom = false;
    creatingItem = false;
    selectedRoom = new Room(null, null, []);
    constructor() {
        this.rooms = [];
        this.loadingRooms = false;
        this.creatingRoom = false;
        this.creatingItem = false;
        this.selectedRoom = new Room(null, null, []);
    }
}
export default RoomsState
