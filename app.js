function addContact() {
    // Pega os valores do formulário
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;

    if (name && phone) {
        // Cria uma nova linha para a tabela
        const table = document.getElementById("contactTable");
        const newRow = table.insertRow();

        // Cria células e adiciona o texto
        const nameCell = newRow.insertCell(0);
        const phoneCell = newRow.insertCell(1);
        nameCell.textContent = name;
        phoneCell.textContent = phone;

        // Limpa os campos de entrada do formulário
        document.getElementById("contactForm").reset();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}
