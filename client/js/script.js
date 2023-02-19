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
        description: 'Luz',
        amount: -50000,
        date: '23/02/2023',
    },
    {
        description: 'Website',
        amount: 500000,
        date: '23/02/2023',
    },
    {
        description: 'Internet',
        amount: -20000,
        date: '23/02/2023',
    },
]

const Transaction = {
    all:transactions,

    add(transaction){
        Transaction.all.push(transaction);

        App.reload();
    },

    remove(index) {
        Transaction.all.splice(index, 1)

        App.reload()
    },

    incomes(){
        let income = 0;
        transactions.forEach((transaction) => {
            if(transaction.amount > 0) {
                income += transaction.amount;
            }
        })
        return income;
    },

    expenses(){
        let expense = 0;
        transactions.forEach((transaction) => {
            if(transaction.amount < 0) {
                expense += transaction.amount;
            }
        })
        return expense;
    },

    total(){
        return Transaction.incomes() + Transaction.expenses()
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

        const amount = Utils.formatCurrency(transaction.amount);

        const html = `        
        <td class="description">${transaction.description}</td>
        <td class="${CSSClass}">${amount}</td>
        <td class="date">${transaction.date}</td>
        <td>
        <img
            src="./assets/minus.svg"
            alt="Imagem para eliminar Transação"
        />
        </td>       
        `

        return html
    },

    updateBalance() {
        document
        .getElementById('incomeDisplay')
        .innerHTML = Utils.formatCurrency(Transaction.incomes());
        document
        .getElementById('expenseDisplay')
        .innerHTML = Utils.formatCurrency(Transaction.expenses());
        document
        .getElementById('totalDisplay')
        .innerHTML = Utils.formatCurrency(Transaction.total());

    },

    clearTransactions() {
        DOM.transactionsContainer.innerHTML = ''
    }
}

const Utils = {
    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : "+";
        value = String(value).replace(/\D/g, '');
        value = Number(value) / 100
        value = value.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'AKZ'
        })
        return signal + ' ' + value;
    }
}

const Form = {

    description: document.querySelector('input#description'),
    amount: document.querySelector('input#amount'),
    date: document.querySelector('input#date'),


    getValues() {
        return {
            description: Form.description.value,
            amount: Form.amount.value,
            date: Form.date.value
        }
    },

    formatData() {
        //Format datas
    },


    validateFields() {
        //Validate Fields
        const {description, amount, date} = Form.getValues();
        
        if(
            description.trim() === '' || 
            amount.trim() === '' || 
            date.trim() === '') {
                throw new Error('Por favor, preencha todos os campos')
        }

    submit(event) 
        event.preventDefault();

        try {
            //Verify if every fields are filled
            Form.validateFields();

            //Formatar os dados para salvar
            Form.formatData();

            //Salvar os dados

            //Apagar os dados do formulário

            //Fechar o Modal

            //Actualizar a aplicação
        } catch (error) {
            alert(error.message);
        }        
    }
}

const App = {
    init(){
        Transaction.all.forEach((transaction) => {
            DOM.addTransaction(transaction);
        });
        
        DOM.updateBalance();
    },
    reload(){
        DOM.clearTransactions();

        App.init();
    }
}

App.init();
