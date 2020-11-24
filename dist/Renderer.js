class Renderer{
    _render(data){
        const source = $('#recipeID').html()
        const template = Handlebars.compile(source)
        const newHTML = template(data)
        $('.container').empty().append(newHTML)
    }
    render(data){
        this._render(data)
    }
}