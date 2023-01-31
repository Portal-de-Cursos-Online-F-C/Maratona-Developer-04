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