const dropdown = document.getElementById("roomList")
const roomName = document.getElementById("new-room")

function populateRoomList(rooms) {
    dropdown.innerHTML = "";

    rooms.forEach((room) => {
        const option = document.createElement("option");
        option.text = room.room_name;
        dropdown.add(option);
    })
}

function getRooms() {
    fetch("https://faectarn-chat-backend.herokuapp.com/rooms")
        .then(response => response.json())
        .then(data => populateRoomList(data));
}

async function addRoom(name) {
    console.log(name)
    await fetch(`https://faectarn-chat-backend.herokuapp.com/rooms/${name}`, {
        method: "POST"
    })
    console.log(`Room ${name} created`)
    getRooms();
}

async function deleteRoom(name) {
    await fetch(`https://faectarn-chat-backend.herokuapp.com/rooms/${name}`, {
        method: "DELETE"
    })
    getRooms();
}

function initButtons() {
    const createButton = document.getElementById("create-btn")
    createButton.addEventListener("click", () => addRoom(roomName.value))

    const deleteButton = document.getElementById("delete-btn")
    deleteButton.addEventListener("click", () => deleteRoom(dropdown.value))
}

getRooms();
initButtons();