function register() {
    const username = document.getElementById('username').value;
    if (!username) {
        alert("Введите имя!");
        return;
    }

    localStorage.setItem("username", username);
    document.getElementById('userDisplay').innerText = username;
    document.getElementById('register').classList.add('hidden');
    document.getElementById('main').classList.remove('hidden');
}

function openCreateRoomModal() {
    document.getElementById('modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('modal').classList.add('hidden');
}

function createRoom() {
    const roomCode = Math.random().toString(36).substr(2, 8).toUpperCase();
    alert(`Комната создана! Код: ${roomCode}`);
    closeModal();
}
