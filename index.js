// Definir um array com os objetos User
// Contador para o id dos user
var users = []
var userId = 0
var log

// Definir a class User
class User {

    constructor(nome, dataNasc, email, username, password, admin, multa) {
        this._id = User.getLastId() + 1
        this.nome = nome
        this.dataNasc = dataNasc
        this.email = email
        this.username = username
        this.password = password
        this.admin = admin
        this.multa = multa
    }

    // PROPRIEDADE ID
    get id() {
        return this._id
    }

    // PROPRIEDADE NAME
    get nome() {
        return this._nome
    }

    set nome(newNome) {
        this._nome = newNome
    }

    //PROPRIEDADE DATA DE NASCIMENTO
    get dataNasc() {
        return this._dataNasc
    }

    set dataNasc(newDataNasc) {
        this._dataNasc = newDataNasc
    }

    // PROPRIEDADE EMAIL
    get email() {
        return this._email
    }

    set email(newEmail) {
        this._email = newEmail
    }

    // PROPRIEDADE USERNAME
    get username() {
        return this._username
    }

    set username(newUsername) {
        this._username = newUsername
    }

    // PROPRIEDADE PASSWORD
    get password() {
        return this._password
    }

    set password(newPassoword) {
        this._password = newPassoword
    }

    // PROPRIEDADE ADMINISTRADOR
    get admin() {
        return this._admin
    }

    set admin(newAdmin) {
        this._admin = newAdmin
    }

    // PROPRIEDADE MULTA
    get multa() {
        return this._multa
    }
    set multa(newMulta) {
        this._multa = newMulta
    }

    //Vai gerar um id
    //corre o lenght do array
    //metodo estático tal como no java
    //usado para associar propriedades 
    static getLastId() {
        let userId = 0
        if (users.length != 0) {
            userId = users[users.length - 1]._id
        }
        return userId
    }
}

// Definir um array com os objetos Livro
// Contador para o id dos livros
let myLivros = []
let livroId = 0

// Definir a class Livro
class Livro {
    constructor(titulo, autor, editora, anoLanc, genero, capa, estado, disponivel, codBiblio) {
        this._id = Livro.getLastId() + 1
        this.titulo = titulo
        this.autor = autor
        this.editora = editora
        this.anoLanc = anoLanc
        this.genero = genero
        this.capa = capa
        this.estado = estado
        this.disponivel = disponivel
        this.codBiblio = codBiblio
    }
    // PROPRIEDADE ID
    get id() {
        return this._id
    }

    // PROPRIEDADE TITULO
    get titulo() {
        return this._titulo
    }

    set titulo(newTitulo) {
        this._titulo = newTitulo
    }

    //PROPRIEDADE AUTOR
    get autor() {
        return this._autor
    }

    set autor(newAutor) {
        this._autor = newAutor
    }

    // PROPRIEDADE EDITORA
    get editora() {
        return this._editora
    }

    set editora(newEditora) {
        this._editora = newEditora
    }

    // PROPRIEDADE ANO DE LANÇAMENTO
    get anoLanc() {
        return this._anoLanc
    }

    set anoLanc(newAnoLanc) {
        this._anoLanc = newAnoLanc
    }

    // PROPRIEDADE GÉNERO
    get genero() {
        return this._genero
    }

    set genero(newGenero) {
        this._genero = newGenero
    }

    // PROPRIEDADE CAPA
    get capa() {
        return this._capa
    }

    set capa(newCapa) {
        this._capa = newCapa
    }

    // PROPRIEDADE ESTADO
    get estado() {
        return this._estado
    }

    set estado(newEstado) {
        this._estado = newEstado
    }

    // PROPRIEDADE DISPONIVEL
    get disponivel() {
        return this._disponivel
    }

    set disponivel(newDisponivel) {
        this._disponivel = newDisponivel
    }

    // PROPRIEDADE DISPONIVEL
    get codBiblio() {
        return this._codBiblio
    }

    set codBiblio(newCodBiblio) {
        this._codBiblio = newCodBiblio
    }

    //Vai gerar um id
    //corre o lenght do array
    //metodo estático tal como no java
    //usado para associar propriedades 
    static getLastId() {
        let livroId = 0
        if (myLivros.length != 0) {
            livroId = myLivros[myLivros.length - 1]._id
        }
        return livroId
    }
}

// Definir um array com os objetos Biblioteca
// Contador para o id das bibliotecas
let bibliotecas = []
let codBiblio = 0

class Biblioteca {
    constructor(freguesia, morada, capacidade) {
        this._id = Biblioteca.getLastId() + 1
        this.freguesia = freguesia
        this.morada = morada
        this.capacidade = capacidade
    }

    // PROPRIEDADE ID
    get id() {
        return this._id
    }

    // PROPRIEDADE FREGUESIA
    get freguesia() {
        return this._freguesia
    }

    set freguesia(newFreguesia) {
        this._freguesia = newFreguesia
    }

    //PROPRIEDADE MORADA
    get morada() {
        return this._morada
    }

    set morada(newMorada) {
        this._morada = newMorada
    }

    // PROPRIEDADE CAPACIDADE
    get capacidade() {
        return this._capacidade
    }

    set capacidade(newCapacidade) {
        this._capacidade = newCapacidade
    }

    //Vai gerar um id
    //corre o lenght do array
    //metodo estático tal como no java
    //usado para associar propriedades 
    static getLastId() {
        let codBiblio = 0
        if (bibliotecas.length != 0) {
            codBiblio = bibliotecas[bibliotecas.length - 1]._id
        }
        return codBiblio
    }
}

// Definir um array com os objetos Requisição
// Contador para o id dos requisitos
let requisicoes = []
let requisicaoId = 0

class Requisicao {
    constructor(uti, livroId, dataReq, dataEnt, multa1) {
        this._id = Requisicao.getLastId() + 1
        this.uti = uti
        this.livroId = livroId
        this.dataReq = dataReq
        this.dataEnt = dataEnt
        this.multa1 = multa1
    }

    // PROPRIEDADE ID
    get id() {
        return this._id
    }

    // PROPRIEDADE ID DO UTILIZADOR
    get uti() {
        return this._uti
    }

    set uti(newUti) {
        this._uti = newUti
    }

    //PROPRIEDADE ID DO LIVRO
    get livroId() {
        return this._livroId
    }

    set livroId(newLivroId) {
        this._livroId = newLivroId
    }

    // PROPRIEDADE DATA DE REQUISIÇÃO
    get dataReq() {
        return this._dataReq
    }

    set dataReq(newDataReq) {
        this._dataReq = newDataReq
    }

    // PROPRIEDADE DATA DE ENTREGA
    get dataEnt() {
        return this._dataEnt
    }

    set dataEnt(newDataEnt) {
        this._dataEnt = newDataEnt
    }

    // PROPRIEDADE MULTA
    get multa1() {
        return this._multa1
    }

    set multa1(newMulta1) {
        this._multa1 = newMulta1
    }

    //Vai gerar um id
    //corre o lenght do array
    //metodo estático tal como no java
    //usado para associar propriedades 
    static getLastId() {
        let requisicaoId = 0
        if (requisicoes.length != 0) {
            requisicaoId = requisicoes[requisicoes.length - 1]._id
        }
        return requisicaoId
    }
}

// Definir um array para gerir os generos
let generos = []
let generoId = 0

class Genero {
    constructor(genero) {
        this._id = Genero.getLastId() + 1
        this.genero = genero
    }

    // PROPRIEDADE ID
    get id() {
        return this._id
    }

    // PROPRIEDADE GÉNERO
    get genero() {
        return this._genero
    }

    set genero(newGenero) {
        this._genero = newGenero
    }

    //Vai gerar um id
    //corre o lenght do array
    //metodo estático tal como no java
    //usado para associar propriedades 
    static getLastId() {
        let generoId = 0
        if (generos.length != 0) {
            generoId = generos[generos.length - 1]._id
        }
        return generoId
    }

}

window.onload = function () {
    if(localStorage.length == null) { 
       injetar()
    } else {
        users = JSON.parse(localStorage.getItem('utilizadores'))
        myLivros = JSON.parse(localStorage.getItem('livros'))
        bibliotecas = JSON.parse(localStorage.getItem('biblioteca'))
        generos = JSON.parse(localStorage.getItem('generos'))
    }

    // Referências para elementos HTML
    let optLogin = document.getElementById("optLogin")
    let optLogout = document.getElementById("optLogout")
    let optUser = document.getElementById("optUser")
    let optRegisto = document.getElementById("optRegisto")
    let navDoar = document.getElementById("navDoar")
    let navReqEnt = document.getElementById("navReqEnt")
    let navNotif = document.getElementById("navNotif")
    let navConfig = document.getElementById("navConfig")
    let doar = document.getElementById("doar")
    let reqEnt = document.getElementById("reqEnt")
    let notif = document.getElementById("notif")
    let configuracoes = document.getElementById("configuracoes")

    // Boolean dos inputs na dic de gestão de Utlizadores
    let ativo = false
    document.getElementById("gestaoNome").disabled = true
    document.getElementById("gestaoDataNasc").disabled = true
    document.getElementById("gestaoEmail").disabled = true
    document.getElementById("gestaoUsername").disabled = true
    document.getElementById("gestaoPassword").disabled = true
    document.getElementById("gestaoAdmin").disabled = true

    // Funções
    renderTableBiblioteca()
    selectBiblioteca()
    renderTableLivros()
    renderCatalogo()
    renderTableGeneros()
    selectGenero()
    renderTableGestao()
    selectLivro()
    renderTableRequisicoes(userId)
    verificarMulta(userId)

    // Esconder opções na navbar
    optLogout.style.display = 'none'
    optUser.style.display = 'none'
    navDoar.style.display = 'none'
    navReqEnt.style.display = 'none'
    navNotif.style.display = 'none'
    navConfig.style.display = 'none'

    // Esconder as frames
    doar.style.display = 'none'
    reqEnt.style.display = 'none'
    notif.style.display = 'none'
    configuracoes.style.display = 'none'

    // Registo do Utilizador
    let frmRegisto = document.getElementById("frmRegisto")
    frmRegisto.addEventListener("submit", function () {
        users = JSON.parse(localStorage.getItem("utilizadores"))

        // Validar passes iguais
        let inputPassword1 = document.getElementById("inputPassword1")
        let inputPassword2 = document.getElementById("inputPassword2")
        let strError = ""

        if (inputPassword1.value != inputPassword2.value) {
            strError = "As passwords têm de ser iguais"
        }

        // Validar se já existe um user com o mesmo email
        let inputEmail = document.getElementById("inputEmail")
        let inputUser = document.getElementById("inputUser")
        let existeUser = false
        let existeEmail = false
        let existeUserEmail = false
        for (var i = 0; i < users.length; i++) {
            if (users[i].username == inputUser.value && inputusers[i].email == inputEmail.value) {
                existeUserEmail = true
            } else if (users[i].username == inputUser.value && users[i].email != inputEmail.value) {
                existeUser = true
            } else if (users[i].username != inputUser.value && users[i].email == inputEmail.value) {
                existeEmail = true
            }
        }

        if (existeEmail == true) {
            strError += "\nEmail já existente!"
        } else if (existeUser == true) {
            strError += "\nUsername já existente!"
        } else if (existeUserEmail == true) {
            strError += "\nEmail e Username já existentes!"
        }


        // Criar o utilizador
        if (strError == "") {
            let inputNome = document.getElementById("inputNome")
            let inputData = document.getElementById("inputData")
            let newUser = new User(inputNome.value, inputData.value, inputEmail.value, inputUser.value, inputPassword1.value, 2, 0)

            // Adicionar ao array
            users.push(newUser)

            userId = newUser._id

            renderTableGestao()
            renderTableGestao()
            renderTableRequisicoes(userId)
            verificarMulta(userId)

            console.log(users)

            // Alerta de sucesso!
            alert("Registo efetuado com sucesso!!")
            localStorage.setItem("utilizadores", JSON.stringify(users))
            // Fechar a modal
            $('#registoModal').modal('hide')

            // ALterar as permissões
            optLogin.style.display = 'none'
            optRegisto.style.display = 'none'
            optLogout.style.display = 'block'
            navDoar.style.display = 'none'
            navReqEnt.style.display = 'block'
            navNotif.style.display = 'block'
            navConfig.style.display = 'none'
            doar.style.display = 'none'
            reqEnt.style.display = 'block'
            notif.style.display = 'block'
            configuracoes.style.display = 'none'

            //Idêntificar o Utilizador Logado
            optUser.innerHTML = "<a class='nav-link' href='#'> " +
                newUser._nome + "</a>"
            optUser.style.display = 'block'

        } else {
            alert(strError)
            frmRegisto.reset()
            inputNome.focus()
        }
        event.preventDefault()
    })

    // Autênticação de Utilizador
    let frmLogin = document.getElementById("frmLogin")

    frmLogin.addEventListener("submit", function (event) {

        users = JSON.parse(localStorage.getItem('utilizadores'))
        console.log(users)

        // Obter as referências para as caixas de texto
        let inputLoginUsername = document.getElementById("inputLoginUsername")
        let inputLoginPassword = document.getElementById("inputLoginPassword")

        console.log("Username: " + inputLoginUsername.value)
        console.log("Password: " + inputLoginPassword.value)

        // Iterar sobre o array e verificar se o utilizador já existe
        let userExists = false
        let userNome = ""
        let userAdmin = 0
        //let userAtivo = 0
        for (var i = 0; i < users.length; i++) {
            console.log(users[i]._username)
            if (users[i]._username == inputLoginUsername.value && users[i]._password == inputLoginPassword.value) {
                console.log('true')
                console.log(users[i]._nome)
                console.log(users[i]._password)
                userExists = true
                userId = users[i]._id
                userNome = users[i]._nome
                userAdmin = users[i]._admin
            }

        }
        console.log(users)
        // Se sim, autenticar utilizador
        if (userExists == true) {
            console.log(users)

            console.log('im in')
            alert("Autenticação efetuada com sucesso!")
            // Fechar a modal
            $('#loginModal').modal('hide')
            // Alterar navbar

            if (userAdmin == 0) {
                // ALterar as permissões
                optLogin.style.display = 'none'
                optRegisto.style.display = 'none'
                optLogout.style.display = 'block'
                navDoar.style.display = 'none'
                navReqEnt.style.display = 'none'
                navNotif.style.display = 'none'
                navConfig.style.display = 'block'
                doar.style.display = 'none'
                reqEnt.style.display = 'none'
                notif.style.display = 'none'
                configuracoes.style.display = 'block'
                renderTableGestao()
                //Idêntificar o Utilizador Logado
                optUser.innerHTML = "<a class='nav-link' href='#'> " +
                    userNome + "</a>"
                optUser.style.display = 'block'
            } else if (userAdmin == 1) {
                // ALterar as permissões
                optLogin.style.display = 'none'
                optRegisto.style.display = 'none'
                optLogout.style.display = 'block'
                navDoar.style.display = 'block'
                navReqEnt.style.display = 'none'
                navNotif.style.display = 'none'
                navConfig.style.display = 'none'
                doar.style.display = 'block'
                reqEnt.style.display = 'none'
                notif.style.display = 'none'
                configuracoes.style.display = 'none'
                //Idêntificar o Utilizador Logado
                optUser.innerHTML = "<a class='nav-link' href='#'> " +
                    userNome + "</a>"
                optUser.style.display = 'block'
            } else if (userAdmin == 2) {
                // ALterar as permissões
                optLogin.style.display = 'none'
                optRegisto.style.display = 'none'
                optLogout.style.display = 'block'
                navDoar.style.display = 'none'
                navReqEnt.style.display = 'block'
                navNotif.style.display = 'block'
                navConfig.style.display = 'none'
                doar.style.display = 'none'
                reqEnt.style.display = 'block'
                notif.style.display = 'block'
                configuracoes.style.display = 'none'

                renderTableRequisicoes(userId)
                verificarMulta(userId)

                //Idêntificar o Utilizador Logado
                optUser.innerHTML = "<a class='nav-link' href='#'> " +
                    userNome + "</a>"
                optUser.style.display = 'block'
            }
        } else {
            console.log(users)
            // Se não, exibir mensagem a indicar a inexistência do utilizador no array
            alert("Dados de autenticação inválidos!")
        }
        event.preventDefault()
    })

    // LOGOUT
    optLogout.addEventListener("click", function () {
        userId = 0

        // ALterar as permissões
        optLogin.style.display = 'block'
        optRegisto.style.display = 'block'
        optLogout.style.display = 'none'
        optUser.style.display = 'none'
        navDoar.style.display = 'none'
        navReqEnt.style.display = 'none'
        navNotif.style.display = 'none'
        navConfig.style.display = 'none'
        doar.style.display = 'none'
        reqEnt.style.display = 'none'
        notif.style.display = 'none'
        configuracoes.style.display = 'none'
    })

    //Registo de Bibliotecas
    let frmBibliotecas = document.getElementById("frmBibliotecas")
    frmBibliotecas.addEventListener("submit", function () {
        bibliotecas = JSON.parse(localStorage.getItem('biblioteca'))

        let inputFreguesia = document.getElementById("inputFreguesia")
        let inputMorada = document.getElementById("inputMorada")
        let inputCapacidade = document.getElementById("inputCapacidade")
        let frmNotif = document.getElementById("frmNotif")
        let strHtml = ""
        let strError = ""

        for (let i = 0; i < bibliotecas.length; i++) {
            if (bibliotecas[i]._freguesia == inputFreguesia.value && bibliotecas[i]._morada == inputMorada.value) {
                strError = "Já existe uma biblioteca nessa freguesia registada, assim como a morada."
                alert(strError)
            } else if (bibliotecas[i]._freguesia == inputFreguesia.value && bibliotecas[i]._morada != inputMorada.value) {
                strError = "Já existe uma biblioteca nessa freguesia registada."
                alert(strError)
            } else if (bibliotecas[i]._freguesia != inputFreguesia.value && bibliotecas[i]._morada == inputMorada.value) {
                strError = "Já existe uma biblioteca nessa morada registada."
                alert(strError)
            }
        }

        if (strError == "") {
            // Verificar se é para adicionar ou atualizar a informação de uma biblioteca
            if (codBiblio == 0) {
                let newBiblioteca = new Biblioteca(inputFreguesia.value, inputMorada.value, inputCapacidade.value)

                // Adicionar o objeto ao array
                bibliotecas.push(newBiblioteca)
                console.log(bibliotecas)
                localStorage.setItem("biblioteca", JSON.stringify(bibliotecas))

                // Notificar o utilizador da adição uma biblioteca
                strHtml += "<h6>Atualização nas Bibliotecas</h6>" +
                    "<p>A biblioteca na freguesia " + inputFreguesia.value + " associou-se à Páginas de Rua!</p>"
                frmNotif.innerHTML += strHtml
            } else {
                for (let i = 0; i < bibliotecas.length; i++) {
                    if (bibliotecas[i]._id == codBiblio) {
                        bibliotecas[i]._freguesia = inputFreguesia.value
                        bibliotecas[i]._morada = inputMorada.value
                        bibliotecas[i]._capacidade = inputCapacidade.value

                        // Notificar o user das alterações no livro
                        strHtml += "<h6>Alterações numa Biblioteca</h6>" +
                            "<p>A Biblioteca na freguesia " + bibliotecas[i]._freguesia + " sofreu alterações.</p>"
                        frmNotif.innerHTML += strHtml
                    }
                }
                codBiblio = 0
            }
        }

        // Funções
        renderTableBiblioteca()
        selectBiblioteca()

        console.log(bibliotecas)
        event.preventDefault();
    })

    // Funcão para fazer render dos objetos Biblioteca na tabela
    function renderTableBiblioteca() {
        if(bibliotecas.length == null) {
            bibliotecas = JSON.parse(localStorage.getItem('biblioteca'))
        }

        let tblBiblioteca = document.getElementById("tblBiblioteca")

        let strHtml = "<thead class='thead-dark'><tr>" +
            "<th>#</th>" +
            "<th>Freguesia</th>" +
            "<th>Morada</th>" +
            "<th>Capacidade</th>" +
            "<th>Ações</th>"
            "</tr>" +
            "</thead><tbody>"

        for (var i = 0; i < bibliotecas.length; i++) {
            strHtml += "<tr>" +
                "<td>" + bibliotecas[i]._id + "</td>" +
                "<td>" + bibliotecas[i]._freguesia + "</td>" +
                "<td>" + bibliotecas[i]._morada + "</td>" +
                "<td>" + bibliotecas[i]._capacidade + "</td>" +
                "<td>" +
                "<a id='" + bibliotecas[i]._id + "' class='edit'><i class='fas fa-edit'></i></a> " +
                "<a id='" + bibliotecas[i]._id + "' class='remove'><i class='fas fa-trash-alt'></i></a> " +
                "</td>" +
                "</tr>"
        }
        strHtml += "</tbody>"
        tblBiblioteca.innerHTML = strHtml

        // Obter todos os links removes da tabela
        let tdRemove = document.getElementsByClassName("remove")
        // Por cada link, adicionar um listener
        for (let i = 0; i < tdRemove.length; i++) {
            tdRemove[i].addEventListener("click", function () {
                // Ao clicar numa especifica biblioteca, remove-a do array
                let codBiblio = tdRemove[i].getAttribute("id")
                removeBibliotecaById(codBiblio)
                renderTableBiblioteca()
                selectBiblioteca()
            })
        }

        // Obter todos os links edit da tabela
        let tdEdit = document.getElementsByClassName("edit")
        // Por cada link, adicionar um listener
        for (let i = 0; i < tdEdit.length; i++) {
            tdEdit[i].addEventListener("click", function () {
                // Ao clicar numa especifica biblioteca, edite-a no form
                let codBiblio = tdEdit[i].getAttribute("id")
                editBibliotecaById(codBiblio)
            })
        }
    }

    // Remove a biblioteca com base no seu ID
    function removeBibliotecaById(id) {
        if(bibliotecas.length == null) {
            bibliotecas = JSON.parse(localStorage.getItem('biblioteca'))
        }
        let strHtml = ""
        let frmNotif = document.getElementById("frmNotif")
        for (let i = 0; i < bibliotecas.length; i++) {
            if (bibliotecas[i]._id == id) {
                // Notificar o user da remoção de uma biblioteca
                strHtml += "<h6>Atualização nas Bibliotecas</h6>" +
                "<p>A biblioteca na freguesia " + bibliotecas[i]._freguesia + " não se encontra mais associada à Páginas de Rua!</p>"
                frmNotif.innerHTML += strHtml
                bibliotecas.splice(i, 1)
                localStorage.setItem("biblioteca", JSON.stringify(bibliotecas))
            }
        }
    }

    // Editar a biblioteca com base o seu ID
    function editBibliotecaById(id) {
        bibliotecas = JSON.parse(localStorage.getItem('biblioteca'))
        codBiblio = id
        // Preencher o form com os dados da biblioteca selecionada
        for (let i = 0; i < bibliotecas.length; i++) {
            if (bibliotecas[i]._id == id) {
                inputFreguesia.value = bibliotecas[i]._freguesia
                inputMorada.value = bibliotecas[i]._morada
                inputCapacidade.value = bibliotecas[i]._capacidade
            }
        }
    }

    // Função para adicionar um select com as bibliotecas que existem
    function selectBiblioteca() {
        bibliotecas = JSON.parse(localStorage.getItem('biblioteca'))
        let selectBiblioteca = document.getElementById("selectBiblioteca")

        let strHtml = "<label for='inputBiblioteca'>Biblioteca:</label>" +
            "<select id='inputBiblioteca' required>"
        for (var i = 0; i < bibliotecas.length; i++) {
            strHtml += "<option value='" + bibliotecas[i]._id + "' >" + bibliotecas[i]._freguesia + "</option>"
        }
        strHtml += "</select>"
        selectBiblioteca.innerHTML = strHtml
    }

    // Registo de Livros
    doar.addEventListener("submit", function () {
        myLivros = JSON.parse(localStorage.getItem('livros'))
        let inputTitulo = document.getElementById("inputTitulo")
        let inputAutor = document.getElementById("inputAutor")
        let inputEditora = document.getElementById("inputEditora")
        let inputAnoLanc = document.getElementById("inputAnoLanc")
        let inputGenero = document.getElementById("inputGenero")
        let inputCapa = document.getElementById("inputCapa")
        let inputEstado = document.getElementById("inputEstado")
        let inputBiblioteca = document.getElementById("inputBiblioteca")
        let frmNotif = document.getElementById("frmNotif")
        let nLivros = [] // Array que irá verificar se a biblioteca tem capacidade para acrescentar livros
        let strError = ""
        let strHtml = ""


        // Verificar se é para adicionar ou autualizar a informação de um livro
        if (livroId == 0) {
            // Adicionar os livros da biblioteca selecionada ao array
            if (myLivros.length == null) {
                nLivros = []
            } else if (myLivros.length != 0) {
                for (let i = 0; i < myLivros.length; i++) {
                    if (inputBiblioteca.value == myLivros[i]._codBiblio) {
                        nLivros.push(myLivros[i])
                        console.log(nLivros)
                    }
                }
            }

            for (let j = 0; j < bibliotecas.length; j++) {
                // Verficar se existe capacidade na biblioteca para mais livros
                if (inputBiblioteca.value == bibliotecas[j].id) {
                    if (bibliotecas[j]._capacidade <= nLivros.length) {
                        strError = "A Biblioteca encontra-se com a capacidade completa"
                        alert(strError)
                    } else {
                        console.log("Existe capacidade")
                    }
                }
            }

            if (strError == "") {
                // Limpar o array
                nLivros.splice(0, nLivros.length)
                console.log(nLivros)

                // Criar um novo objeto Livro            
                let newLivro = new Livro(inputTitulo.value,
                    inputAutor.value,
                    inputEditora.value,
                    inputAnoLanc.value,
                    inputGenero.value,
                    inputCapa.value,
                    inputEstado.value,
                    "Sim",
                    inputBiblioteca.value)

                // Adicionar o objeto ao array
                myLivros.push(newLivro)
                console.log(myLivros)
                localStorage.setItem("livros", JSON.stringify(myLivros));


                // Notificar o user do registo de um novo livro
                for (let j = 0; j < bibliotecas.length; j++) {
                    if (bibliotecas[j].id = inputBiblioteca.value) {
                        strHtml += "<h6>Novo Livro</h6>" +
                            "<p>Foi adicionado um novo livro na biblioteca " + bibliotecas[j]._freguesia + ", chamado " + inputTitulo.value + ".</p>"
                        frmNotif.innerHTML += strHtml
                    }
                }
            }
        } else {
            for (let i = 0; i < myLivros.length; i++) {
                if (myLivros[i]._id == livroId) {
                    myLivros[i]._titulo = inputTitulo.value
                    myLivros[i]._autor = inputAutor.value
                    myLivros[i]._editora = inputEditora.value
                    myLivros[i]._anoLanc = inputAnoLanc.value
                    myLivros[i]._genero = inputGenero.value
                    myLivros[i]._capa = inputCapa.value
                    myLivros[i]._estado = inputEstado.value
                    myLivros[i]._disponivel = "Sim"
                    myLivros[i]._codBiblio = inputBiblioteca.value

                    // Notificar o user das alterações no livro
                    for (let j = 0; j < bibliotecas.length; j++) {
                        if (bibliotecas[j]._id = inputBiblioteca.value) {
                            strHtml += "<h6>Alterações num Livro</h6>" +
                                "<p>Um livro na biblioteca " + bibliotecas[j]._freguesia + ", chamado " + inputTitulo.value + " sofreu alterações.</p>"
                            frmNotif.innerHTML += strHtml
                        }
                    }
                }
            }
            livroId = 0
            console.log(myLivros)
        }
        // Funções
        renderTableLivros()
        renderCatalogo()
        selectLivro()

        event.preventDefault();
    })

    // Funcão para fazer render dos objetos Livro na tabela
    function renderTableLivros() {
        let tblLivros = document.getElementById("tblLivros")
        myLivros = JSON.parse(localStorage.getItem('livros'))
        
		
        let strHtml = "<thead class='thead-dark'><tr>" +
            "<th class='w-2'>#</th>" +
            "<th class='w-30'>Titulo</th>" +
            "<th class='w-15'>Autor</th>" +
            "<th class='w-15'>Editora</th>" +
            "<th class='w-8'>Lançamento</th>" +
            "<th class='w-15'>Género</th>" +
            "<th class='w-10'>Estado</th>" +
            "<th class='w-5'>Ações</th>" +
            "</tr>" +
            "</thead><tbody>"
		console.log(myLivros)
        for (var i = 0; i < myLivros.length; i++) 
        {
            strHtml += "<tr>" +
                "<td>" + myLivros[i]._id + "</td>" +
                "<td>" + myLivros[i]._titulo + "</td>" +
                "<td>" + myLivros[i]._autor + "</td>" +
                "<td>" + myLivros[i]._editora + "</td>" +
                "<td>" + myLivros[i]._anoLanc + "</td>" +
                "<td>" + myLivros[i]._genero + "</td>" +
                "<td>" + myLivros[i]._estado + "</td>" +
                "<td>" +
                "<a id='" + myLivros[i]._id + "' class='edit'><i class='fas fa-edit'></i></a> " +
                "<a id='" + myLivros[i]._id + "' class='remove'><i class='fas fa-trash-alt'></i></a> " +
                "<a id='" + myLivros[i]._id + "' class='view' data-toggle='modal' data-target='#livroModal'><i class='fas fa-eye'></i></a>" +
                "</td>" +
                "</tr>"
        }
        strHtml += "</tbody>"
        tblLivros.innerHTML = strHtml

        // Obter todos os links removes da tabela
        let tdRemove = document.getElementsByClassName("remove")
        // Por cada link, adicionar um listener
        for (let i = 0; i < tdRemove.length; i++) {
            tdRemove[i].addEventListener("click", function () {
                // Ao clicar num especifico livro, remove-o do array
                let livroId = tdRemove[i].getAttribute("id")
                removeLivroById(livroId)
                renderTableLivros()
                selectLivro()
            })
        }

        // Obter todos os links view da tabela
        let tdView = document.getElementsByClassName("view")
        // Por cada link, adicionar um listener
        for (let i = 0; i < tdView.length; i++) {
            tdView[i].addEventListener("click", function () {
                // Ao clicar num especifico livro, visualiza-o no modal
                let livroId = tdView[i].getAttribute("id")
                viewLivroById(livroId)
            })
        }

        // Obter todos os links edit da tabela
        let tdEdit = document.getElementsByClassName("edit")
        // Por cada link, adicionar um listener
        for (let i = 0; i < tdEdit.length; i++) {
            tdEdit[i].addEventListener("click", function () {
                // Ao clicar num especifico livro, edite-o no form
                let livroId = tdEdit[i].getAttribute("id")
                editLivroById(livroId)
            })
        }
    }

    // Remove o livro com base no seu ID
    function removeLivroById(id) {
        myLivros = JSON.parse(localStorage.getItem('livros'))
        for (let i = 0; i < myLivros.length; i++) {
            if (myLivros[i]._id == id) {
                let strHtml = ""
                let frmNotif = document.getElementById("frmNotif")
                // Notificar o user da remoção de um livro
                for (var j = 0; j < bibliotecas.length; j++) {
                    if (myLivros[i]._codBiblio == bibliotecas[j]._id)
                        strHtml += "<h6>Livro Removido</h6>" +
                            "<p>Um livro na biblioteca " + bibliotecas[j]._freguesia + ", chamado " + myLivros[i]._titulo + " foi removido.</p>"
                }
                frmNotif.innerHTML += strHtml
                myLivros.splice(i, 1)
                myLivros = localStorage.setItem("livros", JSON.stringify(myLivros))
            }
        }
    }

    // Vêr o livro com base do seu ID
    function viewLivroById(id) {
        myLivros = JSON.parse(localStorage.getItem('livros'))
        for (let i = 0; i < myLivros.length; i++) {
            if (myLivros[i].id == id) {
                modalLivroTitulo.innerHTML = myLivros[i]._titulo
                modalLivroAutor.innerHTML = myLivros[i]._autor
                modalLivroEditora.innerHTML = myLivros[i]._editora
                modalLivroAnoLanc.innerHTML = myLivros[i]._anoLanc
                modalLivroGenero.innerHTML = myLivros[i]._genero
                modalLivroCapa.setAttribute("src", myLivros[i]._capa)
                modalLivroEstado.innerHTML = myLivros[i]._estado
                modalLivroDisponivel.innerHTML = myLivros[i]._disponivel
            }
        }
    }

    // Editar o livro com base o seu ID
    function editLivroById(id) {
        myLivros = JSON.parse(localStorage.getItem('livros'))
        livroId = id
        // Preencher o form com os dados do livro selecionado
        for (let i = 0; i < myLivros.length; i++) {
            if (myLivros[i].id == id) {
                inputTitulo.value = myLivros[i]._titulo
                inputAutor.value = myLivros[i]._autor
                inputEditora.value = myLivros[i]._editora
                inputAnoLanc.value = myLivros[i]._anoLanc
                inputGenero.value = myLivros[i]._genero
                inputCapa.value = myLivros[i]._capa
                inputEstado.value = myLivros[i]._estado
                inputBiblioteca.value = myLivros[i]._codBiblio
            }
        }
    }

    let btnProcurar = document.getElementById("btnProcurar")
    btnProcurar.addEventListener("click", function (event) {
        let inputGenero1 = document.getElementById("inputGenero1")

        renderCatalogo(inputGenero1.value)
    })


    // Função que vai criar uma card para cada livro que se encontra no catálogo
    function renderCatalogo(genero = "") {
        let frmCatalogo = document.getElementById("frmCatalogo")
        myLivros = JSON.parse(localStorage.getItem('livros'))
        
        // Para cada livro vai-se definir uma card, a partir dos dados de cada objeto
        let strHtmlCard = ""
        for (var i = 0; i < myLivros.length; i++) {
            if (genero == myLivros[i]._genero || genero == "") {

                // Iniciar a linha
                if (i % 3 == 0) {
                    strHtmlCard += `<div class="row">`
                }

                // Criar a card
                strHtmlCard += `<div class="col-md-4">
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="${myLivros[i]._capa}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${myLivros[i]._titulo}</h5>
                            <p class="card-text"> Autor: ${myLivros[i]._autor}</p>    
                            <a id="${myLivros[i]._id}" data-toggle="modal" data-target="#livroModal" href="#" class="btn btn-primary">Visualizar</a>      
                        </div> 
                    </div>
                </div>`

                // Fechar a linha
                if (i % 3 == 2) {
                    strHtmlCard += `</div>`
                }
            }
        }
        frmCatalogo.innerHTML = strHtmlCard

        // Obter todos os links btn btn-primary das cards
        let aView = document.getElementsByClassName("btn btn-primary")
        myLivros = JSON.parse(localStorage.getItem('livros'))
        // Por cada link, adicionar um listener
        for (let i = 0; i < aView.length; i++) {
            aView[i].addEventListener("click", function () {
                // Ao clicar num especifico livro, visualiza-o no modal
                let livroId = aView[i].getAttribute("id")
                viewLivroById(livroId)
            })
        }
    }

    // Função para adicionar um select com os livros disponiveis
    function selectLivro() {
        let selectLivro = document.getElementById("selectLivro")
    
        myLivros = JSON.parse(localStorage.getItem('livros'))

        let strHtml = "<option value=''></option>"
        for (let i = 0; i < myLivros.length; i++) {
            if (myLivros[i]._disponivel == "Sim") {
                strHtml += `<option value='${myLivros[i]._id}'>${myLivros[i]._titulo}</option>`
            } else {
                console.log("Algo está mal no select dos livros")
            }
        }
        selectLivro.innerHTML = strHtml
    }

    // Adicionar Géneros
    let frmGeneros = document.getElementById("frmGeneros")
    frmGeneros.addEventListener("submit", function () {
        generos = JSON.parse(localStorage.getItem('generos'))

        let inputAdiGenero = document.getElementById("inputAdiGenero")
        let frmNotif = document.getElementById("frmNotif")
        let strHtml = ""
        let strError = ""

        for (let i = 0; i < generos.length; i++) {
            if (generos[i]._genero == inputAdiGenero.value) {

                strError = "Já existe esse Género de livro"
                alert(strError)
            }
        }

        if (strError == "") {
            let newGeneroObj = new Genero(inputAdiGenero.value)

            // Guardar o valor do input num array
            generos.push(newGeneroObj)
            console.log(generos)
            localStorage.setItem("generos", JSON.stringify(generos));

            // Notificar o user da adição de um novo género de livros
            strHtml += "<h6>Novo Género</h6>" +
                "<p>Foi adicionado o género " + inputAdiGenero.value + ".</p>"
            frmNotif.innerHTML += strHtml
        }

        // Funções
        renderTableGeneros()
        selectGenero()
        event.preventDefault()
    })

    // Função para faze render da tabela com os géneros
    function renderTableGeneros() {
        let tblGeneros = document.getElementById("tblGeneros")

        let strHtml = "<thead class='thead-dark'><tr>" +
            "<th>#</th>" +
            "<th>Género</th>" +
            "<th>Remover</th>" +
            "</tr>" +
            "</thead><tbody>"

        for (var i = 0; i < generos.length; i++) {
            strHtml += "<tr>" +
                "<td>" + generos[i]._id + "</td>" +
                "<td>" + generos[i]._genero + "</td>" +
                "<td>" +
                "<a id='" + generos[i]._id + "' class='remove'><i class='fas fa-trash-alt'></i></a> " +
                "</td>" +
                "</tr>"
        }
        strHtml += "</tbody>"
        tblGeneros.innerHTML = strHtml

        // Obter todos os links removes da tabela
        let tdRemove = document.getElementsByClassName("remove")
        // Por cada link, adicionar um listener
        for (let i = 0; i < tdRemove.length; i++) {
            tdRemove[i].addEventListener("click", function () {
                // Ao clicar num especifico género, remove-o do array
                let generoId = tdRemove[i].getAttribute("id")
                removeGeneroById(generoId)
                renderTableGeneros()
                selectGenero()
            })
        }
    }

    // Remove o género com base no seu ID
    function removeGeneroById(id) {
        generos = JSON.parse(localStorage.getItem('generos'))
        
        generos = JSON.parse(localStorage.getItem('generos'))
        for (let i = 0; i < generos.length; i++) {
            if (generos[i]._id == id) {
                generos.splice(i, 1)
                localStorage.setItem("generos", JSON.stringify(generos));
            }
        }
    }

    // Função para adicionar um select com os géneros que existem
    function selectGenero() {
        generos = JSON.parse(localStorage.getItem('generos'))

        let selectGenero = document.getElementById("selectGenero")
        let inputGenero1 = document.getElementById("inputGenero1")

        let strHtml = "<label for='inputGenero'>Género:</label>" +
            "<select id='inputGenero' required>" +
            "<option value=''></option>"
        for (var i = 0; i < generos.length; i++) {
            strHtml += "<option value='" + generos[i]._genero + "' >" + generos[i]._genero + "</option>"
        }
        strHtml += "</select>"
        selectGenero.innerHTML = strHtml

        let strHtml1 = "<option value=''>Todos</option>"
        for (let i = 0; i < generos.length; i++) {
            strHtml1 += `<option value='${generos[i]._genero}'>${generos[i]._genero}</option>`
        }
        inputGenero1.innerHTML = strHtml1
    }

    // Botão que permite alterar as informações do utilizador
    let btnAlterar = document.getElementById("btnAlterar")
    btnAlterar.addEventListener("click", function (event) {
        if (ativo == false) {
            document.getElementById("gestaoNome").disabled = false
            document.getElementById("gestaoDataNasc").disabled = false
            document.getElementById("gestaoEmail").disabled = false
            document.getElementById("gestaoUsername").disabled = false
            document.getElementById("gestaoPassword").disabled = false
            document.getElementById("gestaoAdmin").disabled = false
            ativo = true
        } else if (ativo == true) {
            document.getElementById("gestaoNome").disabled = true
            document.getElementById("gestaoDataNasc").disabled = true
            document.getElementById("gestaoEmail").disabled = true
            document.getElementById("gestaoUsername").disabled = true
            document.getElementById("gestaoPassword").disabled = true
            document.getElementById("gestaoAdmin").disabled = true
            ativo = false
        }
    })

    // Guardar as informações do utilizador alterado
    let frmGestao = document.getElementById("frmGestao")
    frmGestao.addEventListener("submit", function () {
        let gestaoNome = document.getElementById("gestaoNome")
        let gestaoDataNasc = document.getElementById("gestaoDataNasc")
        let gestaoEmail = document.getElementById("gestaoEmail")
        let gestaoUsername = document.getElementById("gestaoUsername")
        let gestaoPassword = document.getElementById("gestaoPassword")
        let gestaoAdmin = document.getElementById("gestaoAdmin")
        let gestaoMulta = document.getElementById("gestaoMulta")

        // Editar utilizador
        for (let i = 0; i < users.length; i++) {
            if (users[i].id == userId) {
                users[i]._nome = gestaoNome.value
                users[i]._dataNasc = gestaoDataNasc.value
                users[i]._email = gestaoEmail.value
                users[i]._username = gestaoUsername.value
                users[i]._password = gestaoPassword.value
                users[i]._admin = gestaoAdmin.value
                users[i]._multa = gestaoMulta.value
            }
            
        }
       // console.log(users)
        //Render da tabla
        renderTableGestao()
        event.preventDefault()
    })

    // Tabela com os utilizadores existentes
    function renderTableGestao() {
        let tblGestao = document.getElementById("tblGestao")

        if(users.length == null) {
            users = JSON.parse(localStorage.getItem('utilizadores'))
        }

        let strHtml = "<thead class='thead-dark'><tr>" +
            "<th>#</th>" +
            "<th>Nome</th>" +
            "<th>Data de Nascimento</th>" +
            "<th>Email</th>" +
            "<th>Username</th>" +
            "<th>Password</th>" +
            "<th>Tipo</th>" +
            "<th>Multa</th>" +
            "<th>Ações</th>" +
            "</tr>" +
            "</thead><tbody>"

        for (var i = 0; i < users.length; i++) {
            strHtml += "<tr>" +
                "<td>" + users[i]._id + "</td>" +
                "<td>" + users[i]._nome + "</td>" +
                "<td>" + users[i]._dataNasc + "</td>" +
                "<td>" + users[i]._email + "</td>" +
                "<td>" + users[i]._username + "</td>" +
                "<td>" + users[i]._password + "</td>"
            if (users[i]._admin == 0) {
                strHtml += "<td>Administrador</td>" +
                    "<td>" + users[i]._multa + "</td>" +
                    "<td>" +
                    "<a id='" + users[i]._id + "' class='edit'><i class='fas fa-edit'></i></a> " +
                    "<a id='" + users[i]._id + "' class='remove'><i class='fas fa-trash-alt'></i></a> " +
                    "</td>" +
                    "</tr>"
            } else if (users[i]._admin == 1) {
                strHtml += "<td>Operador</td>" +
                    "<td>" + users[i]._multa + "</td>" +
                    "<td>" +
                    "<a id='" + users[i]._id + "' class='edit'><i class='fas fa-edit'></i></a> " +
                    "<a id='" + users[i]._id + "' class='remove'><i class='fas fa-trash-alt'></i></a> " +
                    "</td>" +
                    "</tr>"
            } else if (users[i]._admin == 2) {
                strHtml += "<td>User</td>" +
                    "<td>" + users[i]._multa + "</td>" +
                    "<td>" +
                    "<a id='" + users[i]._id + "' class='edit'><i class='fas fa-edit'></i></a> " +
                    "<a id='" + users[i]._id + "' class='remove'><i class='fas fa-trash-alt'></i></a> " +
                    "</td>" +
                    "</tr>"
            }
        }
        strHtml += "</tbody>"
        tblGestao.innerHTML = strHtml

        // Obter todos os links removes da tabela
        let tdRemove = document.getElementsByClassName("remove")
        // Por cada link, adicionar um listener
        for (let i = 0; i < tdRemove.length; i++) {
            tdRemove[i].addEventListener("click", function () {
                // Ao clicar num especifico user, remove-o do array
                let userId = tdRemove[i].getAttribute("id")
                removeUserById(userId)
                renderTableGestao()
            })
        }

        // Obter todos os links edit da tabela
        let tdEdit = document.getElementsByClassName("edit")
        // Por cada link, adicionar um listener
        for (let i = 0; i < tdEdit.length; i++) {
            tdEdit[i].addEventListener("click", function () {
                // Ao clicar num especifico user, edite-o no form
                let userId = tdEdit[i].getAttribute("id")
                editUserById(userId)
            })
        }
    }

    // Função que remove o user pelo o id
    function removeUserById(id) {
        users = JSON.parse(localStorage.getItem('utilizadores'))
        for (let i = 0; i < users.length; i++) {
            if (users[i]._id == id) {
                users.splice(i, 1)
                users = localStorage.setItem("utilizadores", JSON.stringify(users))
            }
        }
    }

    // Função que permite editar o user a partir do seu id
    function editUserById(id) {
        users = JSON.parse(localStorage.getItem('utilizadores'))
        let gestaoNome = document.getElementById("gestaoNome")
        let gestaoDataNasc = document.getElementById("gestaoDataNasc")
        let gestaoEmail = document.getElementById("gestaoEmail")
        let gestaoUsername = document.getElementById("gestaoUsername")
        let gestaoPassword = document.getElementById("gestaoPassword")
        let gestaoAdmin = document.getElementById("gestaoAdmin")
        let gestaoMulta = document.getElementById("gestaoMulta")

        userId = id
        for (var i = 0; i < users.length; i++) {
            if (users[i]._id == id) {
                gestaoNome.value = users[i]._nome
                gestaoDataNasc.value = users[i]._dataNasc
                gestaoEmail.value = users[i]._email
                gestaoUsername.value = users[i]._username
                gestaoPassword.value = users[i]._password
                gestaoAdmin.value = users[i]._admin
                gestaoMulta.value = users[i]._multa
            }
        }
    }

    // Requisição de Livros
    let btnRequisitar = document.getElementById("btnRequisitar")
    btnRequisitar.addEventListener("click", function (event) {
        // Obter a data atual
        var hoje = new Date()
        var dd = hoje.getDate();
        var mm = hoje.getMonth() + 1; //Janeiro é 0
        var yyyy = hoje.getFullYear();
        hoje = yyyy + '-' + mm + '-' + dd

        // Obter a data que o utlizador permite entregar
        let selectData = document.getElementById("selectData")
        let strError = ""

        let dia = (1000 * 60 * 60 * 24) // Calcular os milissegundos que existem num dia

        // Verificar a data de entrega
        var dataEnt = Date.parse(selectData.value)
        var dataAtual = Date.parse(hoje)
        if (dataEnt == "") {
            strError = "Selecione uma data"
            alert(strError)
        }
        if (dataAtual >= dataEnt) {
            console.log(dataAtual)
            console.log(dataEnt)
            strError = "Tem de indicar uma data de entre diferente"
            alert(strError)
        }
        if ((dataEnt - dataAtual) > (14 * dia)) {
            strError = "Tem de indicar uma data dentro das próximas duas semanas"
            alert(strError)
        }

        let selectLivro1 = document.getElementById("selectLivro")

        // Verificar o livro selecionado
        if (selectLivro1.value == "") {
            strError = "Tem de selecionar um livro"
            alert(strError)
        }

        // Criar requisição
        if (strError == "") {
            let newRequisicao = new Requisicao(userId, selectLivro1.value, hoje, selectData.value)

            for (var i = 0; i < myLivros.length; i++) {
                if (myLivros[i]._id == selectLivro1.value) {
                    myLivros[i]._disponivel = "Não"
                }
            }

            alert("Tem até o dia " + selectData.value + " para entregar o livro.")

            let frmNotif = document.getElementById("frmNotif")
            strHtml = ""
            // Notificar o user da indisponibilidade de um livro
            for (var j = 0; j < myLivros.length; j++) {
                if (myLivros[j]._id == selectLivro1.value)
                    strHtml += "<h6>Livro Indisponível</h6>" +
                        "<p>" + myLivros[j]._titulo + " foi requisitado.</p>"
            }
            frmNotif.innerHTML += strHtml

            requisicoes.push(newRequisicao)
            localStorage.setItem("requisicoes", JSON.stringify(requisicoes));
            console.log(requisicoes)
            console.log(myLivros)
        }

        //Funções
        selectLivro()
        renderTableRequisicoes(userId)
        event.preventDefault()
    })

    // Tabela de Requisições dos users
    function renderTableRequisicoes(id) {
        let tblRequisicoes = document.getElementById("tblRequisicoes")
      
            requisicoes = JSON.parse(localStorage.getItem('requisicoes'))
        
        
            myLivros = JSON.parse(localStorage.getItem('livros'))
        
     
            users = JSON.parse(localStorage.getItem('utilizadores'))
      
        let strHtml = "<thead class='thead-dark'><tr>" +
            "<th>#</th>" +
            "<th>Livro</th>" +
            "<th>Utilizador</th>" +
            "<th>Data Requisição</th>" +
            "<th>Data Entrega</th>" +
            "<th>Devolver</th>" +
            "</tr>" +
            "</thead><tbody>"

        for (var i = 0; i < requisicoes.length; i++) {
            for (var j = 0; j < myLivros.length; j++) {
                for (var k = 0; k < users.length; k++) {
                    if (myLivros[j]._id == requisicoes[i]._livroId && users[k]._id == requisicoes[i]._uti) {
                        strHtml += "<tr>" +
                            "<td>" + requisicoes[i]._id + "</td>" +
                            "<td>" + myLivros[j]._titulo + "</td>" +
                            "<td>" + users[k]._username + "</td>" +
                            "<td>" + requisicoes[i]._dataReq + "</td>" +
                            "<td>" + requisicoes[i]._dataEnt + "</td>"
                        if (requisicoes[i]._uti == userId) {
                            strHtml += "<td>" +
                                "<a id='" + requisicoes[i]._id + "' class='return'><i class='fas fa-upload'></i></a> " +
                                "</td>" +
                                "</tr>"
                        } else {
                            strHtml += "<td>" +
                                "" +
                                "</td>" +
                                "</tr>"
                        }
                    }
                }
            }
        }

        strHtml += "</tbody>"
        tblRequisicoes.innerHTML = strHtml

        // Obter todos os links returns da tabela
        let tdReturn = document.getElementsByClassName("return")
        // Por cada link, adicionar um listener
        for (let i = 0; i < tdReturn.length; i++) {
            tdReturn[i].addEventListener("click", function () {
                // Ao clicar numa especifica requisição, remove-a do array
                let requisicaoId = tdReturn[i].getAttribute("id")
                removeRequisicaoById(requisicaoId)
                renderTableRequisicoes(userId)
                console.log(requisicoes)
            })
        }
    }

    // Função que permite o user entregar o livro, ao ir buscar o id da requisição que fez e removê-la do array
    function removeRequisicaoById(id) {
        let strHtml = ""
        let frmNotif = document.getElementById("frmNotif")
        for (let j = 0; j < myLivros.length; j++) {
            for (let i = 0; i < requisicoes.length; i++) {
                if (requisicoes[i].id == id) {
                    if (requisicoes[i]._livroId == myLivros[j]._id) {
                        myLivros[j]._disponivel = "Sim"
                    }
                    if (myLivros[j]._disponivel == "Sim") {
                        strHtml += "<h6>Livro Disponível</h6>" +
                            "<p>O livro " + myLivros[i]._titulo + " já se encontra disponível para requisição.</p>"
                        requisicoes.splice(i, 1)
                    }
                }
                // Remover o valor da multa caso o user tenha
                for (let k = 0; k < users.length; k++) {
                    if (requisicoes[i]._userId == users[k].id && requisicoes[i].multa != 0) {
                        users[k]._multa - requisicoes[i].multa
                        if (users[k]._multa == 0 && users[k].id == userId) {
                            strHtml += "<h6>Aviso de Multa</h6>" +
                                "<p>O utilizador " + users[i]._nome + " não tem mais entregas em atraso.</p>"
                            frmNotif.innerHTML += strHtml
                        } else if (users[k]._multa != 0 && users[k]._id == userId) {
                            strHtml += "<h6>Aviso de Multa</h6>" +
                                "<p>O utilizador " + users[k]._nome + " ainda tem mais " + users[k]._multa + "€ por pagar.</p>"
                            frmNotif.innerHTML += strHtml
                        }
                    }
                }
            }
        }
        frmNotif.innerHTML += strHtml
        selectLivro()
    }

    // Esta função verifica se o livro que foi requisitado já foi entregue
    function verificarMulta(id) {
        let frmNotif = document.getElementById("frmNotif")
        strHtml = ""

        // Obter a data atual
        var hoje = new Date()
        var dd = hoje.getDate();
        var mm = hoje.getMonth() + 1; //Janeiro é 0
        var yyyy = hoje.getFullYear();
        hoje = yyyy + '-' + mm + '-' + dd

        let dia = (1000 * 60 * 60 * 24) // Calcular os milissegundos que existem num dia
        var dataAtual = Date.parse(hoje)

        for (var i = 0; i < requisicoes.length; i++) {
            // Verifica se o livro tem um dia de atraso de entrega
            if ((Date.parse(requisicoes[i].dataEnt) - dataAtual) / dia > dia &&
                (Date.parse(requisicoes[i].dataEnt) - dataAtual) / dia < (2 * dia)) {
                requisicoes[i].multa = 1.5
                for (let j = 0; j < users.length; j++) {
                    if (requisicoes[i].uti == users[j].id) {
                        users[j].multa += requisicoes[i].multa
                    }
                }
                // Verifica se o livro tem dois dias de atraso de entrega
            } else if ((Date.parse(requisicoes[i].dataEnt) - dataAtual) / dia > (2 * dia) &&
                (Date.parse(requisicoes[i].dataEnt) - dataAtual) / dia < (3 * dia)) {
                requisicoes[i].multa = 3
                for (let j = 0; j < users.length; j++) {
                    if (requisicoes[i].uti == users[j].id) {
                        users[j].multa += requisicoes[i].multa
                    }
                }
                // Verifica se o livro tem três dias de atraso de entrega
            } else if ((Date.parse(requisicoes[i].dataEnt) - dataAtual) / dia > (3 * dia) &&
                (Date.parse(requisicoes[i].dataEnt) - dataAtual) / dia < (4 * dia)) {
                requisicoes[i].multa = 4.5
                for (let j = 0; j < users.length; j++) {
                    if (requisicoes[i].uti == users[j].id) {
                        users[j].multa += requisicoes[i].multa
                    }
                }
                // Verifica se o livro tem quatro dias de atraso de entrega
            } else if ((Date.parse(requisicoes[i].dataEnt) - dataAtual) / dia > (4 * dia) &&
                (Date.parse(requisicoes[i].dataEnt) - dataAtual) / dia < (5 * dia)) {
                requisicoes[i].multa = 6
                for (let j = 0; j < users.length; j++) {
                    if (requisicoes[i].uti == users[j].id) {
                        users[j].multa += requisicoes[i].multa
                    }
                }
                // Verifica se o livro tem cinco dias de atraso de entrega
            } else if ((Date.parse(requisicoes[i].dataEnt) - dataAtual) / dia > (5 * dia) &&
                (Date.parse(requisicoes[i].dataEnt) - dataAtual) / dia < (6 * dia)) {
                requisicoes[i].multa += 7.5
                for (let j = 0; j < users.length; j++) {
                    if (requisicoes[i].uti == users[j].id) {
                        users[j].multa += requisicoes[i].multa
                    }
                }
                // Verifica se o livro tem seis dias de atraso de entrega
            } else if ((Date.parse(requisicoes[i].dataEnt) - dataAtual) / dia > (6 * dia) &&
                (Date.parse(requisicoes[i].dataEnt) - dataAtual) / dia < (7 * dia)) {
                requisicoes[i].multa = 9
                for (let j = 0; j < users.length; j++) {
                    if (requisicoes[i].uti == users[j].id) {
                        users[j].multa += requisicoes[i].multa
                    }
                }
                // Verifica se o livro tem mais de uma semana de atraso de entrega
            } else if ((Date.parse(requisicoes[i].dataEnt) - dataAtual) / dia > (7 * dia)) {
                requisicoes[i].multa = 12
                for (let j = 0; j < users.length; j++) {
                    if (requisicoes[i].uti == users[j].id) {
                        users[j].multa += requisicoes[i].multa
                    }
                }
                // Verifica se o livro está dentro do prazo de entrega
            } else if ((Date.parse(requisicoes[i].dataEnt) - dataAtual) / dia < 0) {
                for (let j = 0; j < users.length; j++) {
                    requisicoes[i].multa = 0
                    if (requisicoes[i].uti == users[j].id) {
                        users[j].multa += requisicoes[i].multa
                    }
                }
            }
        }

        //Notificar o user que tem multas para pagar
        for (let j = 0; j < users.length; j++) {
            if (users[i]._multa != 0 && users[i].id == userId) {
                strHtml += "<h6>Aviso de Multa</h6>" +
                    "<p>O utilizador " + users[i]._nome + " tem de pagar " + users[i].multa + "€ por entrega em atraso.</p>"
                frmNotif.innerHTML += strHtml
            }
        }
    }
}

// Função que vai carrega login para memória
function verLog() {
    var log = "";

    if (localStorage.getItem("utilizadores")) {
        log = JSON.parse(localStorage.getItem("utilizadores"));
    }
    else {
        log = false;
    };

    return log;
}

// Adicionar users
function injetar() {
    console.log('before the if')
    if (verLog()) {
        log = verLog();
    }
    else {
        console.log('here we go the admin')
        let Administrador = new User("Administrador", "0000-00-00", "admin@mail.com", "admin", 123, 0, 0)
        users.push(Administrador);
        let Operador = new User("Operador", "0000-00-00", "oper@mail.com", "oper", 123, 1, 0)
        users.push(Operador)
        let Andre = new User("André", "1998-01-15", "andresg1501@mail.com", "andre", 123, 2, 0)
        users.push(Andre)
        localStorage.setItem("utilizadores", JSON.stringify(users))
		let vilaConde = new Biblioteca("Vila de Conde", "Marginal, 46", 40)
        bibliotecas.push(vilaConde)
        localStorage.setItem("biblioteca",JSON.stringify(bibliotecas))
		let sherlock = new Livro("As Aventuras de Sherlock Holmes", "Arthur Conan Doyle", "Bertrand Editora", 2010, "Thriller", "https://img.wook.pt/images/as-aventuras-de-sherlock-holmes-arthur-conan-doyle/MXwzNTAxNDE4fDI2NDAxOTd8MTM4MzUyMzIwMDAwMA==/502x", "Bom", "Sim", "Vila de Conde" ) 
		myLivros.push(sherlock)
		localStorage.setItem("livros",JSON.stringify(myLivros))
		let tresPorquinhos = new Livro("Os Três Porquinhos", "Pedro Miguel", "Civilização Editora", 2015, "Infantil", "https://static.fnac-static.com/multimedia/Images/PT/NR/db/a3/0d/893915/1540-1/tsp20160818193301/Os-Tres-Porquinhos.jpg", "Aceitável", "Não", "Vila de Conde" ) 
		myLivros.push(tresPorquinhos)
        localStorage.setItem("livros",JSON.stringify(myLivros))
        let thriller = new Genero("Thriller")
		generos.push(thriller)
		localStorage.setItem("generos",JSON.stringify(generos))
		let infantil = new Genero("Infantil")
		generos.push(infantil)
		localStorage.setItem("generos",JSON.stringify(generos))
		let requer = new Requisicao(1, 3, 1, "2018-06-07", "2018-07-07", 0)
		requisicoes.push(requer)
		localStorage.setItem("requisicoes",JSON.stringify(requisicoes))
        console.log(JSON.parse(localStorage.getItem("utilizadores")))
		console.log(JSON.parse(localStorage.getItem("biblioteca")))
    }
}