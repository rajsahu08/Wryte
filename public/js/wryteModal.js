document.getElementById('openWryteModal').onclick = () => {
        document.getElementById('wryteModal').style.display = 'flex';
}

document.getElementById('closeWryteModal').onclick = () => {
    document.getElementById('wryteModal').style.display = 'none';
};

window.onclick = function (event) {
    if (event.target == document.getElementById('wryteModal')) {
        document.getElementById('wryteModal').style.display = 'none';
    }
};