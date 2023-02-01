const Modal = {
    open(){
        //Abrir Modal
        //Adicionar a class active ao modal
        document
            .querySelector('.modal-overlay')
            .classList.add('active');
    },
    close(){
        //Fechar Modal
        //Remover a class active ao modal
        document
            .querySelector('.modal-overlay')
            .classList.remove('active');
    }
}

const transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '23/02/2023',
    },
    {
        id: 2,
        description: 'Website',
        amount: 500000,
        date: '23/02/2023',
    },
    {
        id: 3,
        description: 'Internet',
        amount: -20000,
        date: '23/02/2023',
    },
]

const Transaction = {
    incomes(
        //Somar as Entradas
    ){},
    expenses(){
        //Somar as Saídas
    },
    total(){
        //Entradas - Saídas
    }
}

const DOM = {
    transactionsContainer: document.querySelector('#data-table'),

    addTransaction(transaction, index){
        const tr = document.createElement('tr');
        tr.innerHTML = DOM.innerHTMLTransaction(transaction);

        DOM.transactionsContainer.appendChild(tr)
    },

    innerHTMLTransaction(transaction){
        const CSSClass = transaction.amount > 0 ? 'income' : 'expense';

        const html = `        
        <td class="description">${transaction.description}</td>
        <td class="${CSSClass}">${transaction.amount}</td>
        <td class="date">${transaction.date}</td>
        <td>
        <img
            src="./assets/minus.svg"
            alt="Imagem para eliminar Transação"
        />
        </td>       
        `

        return html
    }
}

transactions.forEach(function(transaction) {
    DOM.addTransaction(transaction);
});