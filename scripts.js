// Seleção de elementos
const modals = document.querySelectorAll('.modal');
const addClientModal = document.getElementById('add-client-modal');
const addProcessModal = document.getElementById('add-process-modal');

// Função para abrir modal
function openModal(modalId) {
    document.getElementById(modalId).classList.remove('hidden');
    document.getElementById(modalId).classList.add('modal');
}

// Função para fechar modal
function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
    document.getElementById(modalId).classList.remove('modal');
}

// Adicionar eventos de fechamento para todos os modais
modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });
});

// Formulários - feedback simples
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Dados enviados com sucesso!');
        form.closest('.modal').classList.add('hidden');
        form.reset();
    });
});
