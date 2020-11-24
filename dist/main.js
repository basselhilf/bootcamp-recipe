const renderer = new Renderer

$('#ingredientBtn').on('click' ,function(){
    let text = $('#ingredientInput').val()
    $.get(`/recipes/${text}`, (data) => {
        renderer.render(data)
    })
})

$('.container').on('click', 'img', function(){
    console.log($(this).closest('div').find('li').first().text())
})


