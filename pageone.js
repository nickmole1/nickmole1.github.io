var mymap = L.map('mapid').setView([38.9072, -77.0369], 12);
L.tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
maxZoom: 20,
attribution: '© OpenStreetMap contributors & CycloSM contributors'
}).addTo(mymap);

function calculateTotal() {
    var hundred = parseInt(document.getElementById('hundred').value, 10) * 100;
    var twenty = parseInt(document.getElementById('twenty').value, 10) * 20;
    var ten = parseInt(document.getElementById('ten').value, 10) * 10;
    var five = parseInt(document.getElementById('five').value, 10) * 5;
    var one = parseInt(document.getElementById('one').value, 10);
    var roll = parseInt(document.getElementById('roll').value, 10);
    var quarter = parseInt(document.getElementById('quarter').value, 10) * 0.25;
    var dime = parseInt(document.getElementById('dime').value, 10) * 0.10;
    var nickel = parseInt(document.getElementById('nickel').value, 10) * 0.05;
    var penny = parseInt(document.getElementById('penny').value, 10) * 0.01;
    
    var drawerAmount = parseFloat(document.getElementById('drawerAmount').value);
    
    var total = hundred + twenty + ten + five + one + quarter + dime + nickel + penny;
    var totalAfterDrawer = total - drawerAmount;
    
    document.getElementById('totalAmount').innerHTML = 'Total After Drawer Amount: $' + totalAfterDrawer.toFixed(2);
}

function clearInputs() {
    document.getElementById('hundred').value = '0';
    document.getElementById('twenty').value = '0';
    document.getElementById('ten').value = '0';
    document.getElementById('five').value = '0';
    document.getElementById('one').value = '0';
    document.getElementById('quarter').value = '0';
    document.getElementById('dime').value = '0';
    document.getElementById('nickel').value = '0';
    document.getElementById('penny').value = '0';
    document.getElementById('drawerAmount').value = '0';
    document.getElementById('totalAmount').innerHTML = 'Total: $0.00';
}
