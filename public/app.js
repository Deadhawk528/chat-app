const socket = io()

$('#chat-box').hide()


$('#send-btn').on('click', ()=>{
    const msgText = $('#inp').val()
    socket.emit('send-msg', {msg:msgText})
    $('#inp').val("")
})

socket.on('recieve-msg', (data)=>{
    // console.log(data, "data reci")
          
    $('#chat').append(`<li class="border p-3 rounded-pill ms-0 mb-0"><span class="fw-bold"> ${data.username}:&nbsp;</span><span></span>${data.msg}</li>`)
})

$('#login-btn').on('click', ()=>{
    const username = $('#username').val()
    socket.emit('login', {username:username})
    $('#login-btn').hide()
    $('#chat-box').show()
    $('#username').val("")
})