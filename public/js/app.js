$(function() {
    $('.remover').click(function(e) {
        e.preventDefault();

        let id = $(this).data('id');
        let descricao = $(this).data('descricao');

        alert('ID: ' + id + 'Produto: ' + descricao);
    });
});