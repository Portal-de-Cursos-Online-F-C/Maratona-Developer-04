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