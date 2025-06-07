// Validação de Telefone
function validarTelefone(telefone) {
    const regex = /^[0-9]{8,15}$/; // Aceita de 8 a 15 dígitos
    if (!telefone.trim()) {
        alert("Por favor, insira seu telefone.");
        return false;
    }
    if (!regex.test(telefone)) {
        alert("Insira um número de telefone válido (somente números).");
        return false;
    }
    return true;
}