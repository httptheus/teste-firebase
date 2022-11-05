let linkFormCadastro = document.getElementById('linkFormCadastro').addEventListener('click', function(){
    document.getElementById('formCadastro').style.display = 'flex'
    document.getElementById('formLogin').style.display = 'none'
})

let linkFormLogin = document.getElementById('linkFormLogin').addEventListener('click', function(){
    document.getElementById('formCadastro').style.display = 'none'
    document.getElementById('formLogin').style.display = 'flex'
})