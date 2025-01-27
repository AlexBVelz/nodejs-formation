$(function(){
    let socket = io();
    $('#chat-container').hide();
    $('form#form').hide();

    $('#pseudoModal').show();

    $('form#pseudoForm').submit(function(e){
        e.preventDefault();
        socket.emit('set pseudo', $('#pseudo').val());
        $('#pseudoModal').hide();
        $('#chat-container').show();
        $('#form#form').show();
        return false;
    });

    $('form#form').submit(function(e){
        e.preventDefault();
        socket.emit('chat message', $('#m').val());
        $('#m').val('');
        return false;
    });
    socket.on('chat message', function(data){
        $('#message').append($('<li>').text(`${data.pseudo} : ${data.message}`));
    });
});