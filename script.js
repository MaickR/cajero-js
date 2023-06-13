// Definición de cuentas
const accounts = [
    { name: "Persona 1", balance: 200, password: "123" },
    { name: "Persona 2", balance: 290, password: "123" },
    { name: "Persona 3", balance: 67, password: "123" }
];

let selectedAccount = null;

// Función para seleccionar una cuenta
function selectAccount(accountIndex) {
    selectedAccount = accounts[accountIndex];
    document.getElementById("login").style.display = "none";
    document.getElementById("options").style.display = "block";
}

// Función para comprobar el password ingresado
function checkPassword() {
    const passwordInput = document.getElementById("passwordInput").value;
    if (passwordInput === selectedAccount.password) {
        document.getElementById("errorMessage").textContent = "";
        document.getElementById("options").style.display = "none";
        document.getElementById("actions").style.display = "block";
    } else {
        document.getElementById("errorMessage").textContent = "Contraseña incorrecta. Intenta nuevamente.";
    }
}

// Función para mostrar el saldo actual
function showBalance() {
    document.getElementById("balance").style.display = "block";
    document.getElementById("currentBalance").textContent = "$" + selectedAccount.balance;
}

// Función para realizar un depósito
function deposit() {
    document.getElementById("deposit").style.display = "block";
}

// Función para confirmar el depósito
function confirmDeposit() {
    const depositAmount = parseInt(document.getElementById("depositAmount").value);
    if (isNaN(depositAmount) || depositAmount <= 0) {
        document.getElementById("depositMessage").textContent = "Ingresa un monto válido.";
    } else {
        const newBalance = selectedAccount.balance + depositAmount;
        if (newBalance > 990) {
            document.getElementById("depositMessage").textContent = "El monto ingresado excede el límite máximo.";
        } else {
            selectedAccount.balance = newBalance;
            document.getElementById("depositMessage").textContent = "Se ha realizado el depósito de $" + depositAmount + ". Nuevo saldo: $" + selectedAccount.balance;
            document.getElementById("currentBalance").textContent = "$" + selectedAccount.balance;
        }
    }
}

// Función para realizar un retiro
function withdraw() {
    document.getElementById("withdraw").style.display = "block";
}

// Función para confirmar el retiro
function confirmWithdraw() {
    const withdrawAmount = parseInt(document.getElementById("withdrawAmount").value);
    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
        document.getElementById("withdrawMessage").textContent = "Ingresa un monto válido.";
    } else {
        const newBalance = selectedAccount.balance - withdrawAmount;
        if (newBalance < 10) {
            document.getElementById("withdrawMessage").textContent = "El monto ingresado excede el límite mínimo.";
        } else {
            selectedAccount.balance = newBalance;
            document.getElementById("withdrawMessage").textContent = "Se ha realizado el retiro de $" + withdrawAmount + ". Nuevo saldo: $" + selectedAccount.balance;
            document.getElementById("currentBalance").textContent = "$" + selectedAccount.balance;
        }
    }
}

// Función para cerrar sesión
function logout() {
    selectedAccount = null;
    document.getElementById("actions").style.display = "none";
    document.getElementById("login").style.display = "block";
}
