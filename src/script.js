+/**
+ * Cria um novo item na lista de tarefas com uma caixa de seleção, botão de exclusão e botão de edição.
+ * O novo item é adicionado à lista 'minhaLista'. Se a caixa de seleção estiver marcada, o texto do item
+ * será riscado. O botão de exclusão remove o item da lista. O botão de edição permite que o usuário edite o texto do item.
+ * @return {void} Nenhum valor de retorno.
+ */
function adicionarItem() {
  var lista = document.getElementById('minhaLista')
  var itemInput = document.getElementById('itemInput')
  var novoItem = document.createElement('li')
  var checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.onclick = function () {
    novoItem.style.textDecoration = checkbox.checked ? 'line-through' : 'none'
  }
  var deleteItem = document.createElement('button')
  deleteItem.textContent = ' Remove'
  deleteItem.onclick = function () {
    lista.removeChild(novoItem)
  }
  // Cria um botão de edição
  var editButton = document.createElement('button')
  editButton.textContent = ' Editar'
  editButton.onclick = function () {
    var novoTexto = prompt('Editar item:', novoItem.textContent)
    if (novoTexto !== null) {
      novoItem.textContent = novoTexto
      novoItem.appendChild(checkbox) // Adiciona o botão checkbox.
      novoItem.appendChild(deleteItem) // Adiciona o botão de remoção novamente
      novoItem.appendChild(editButton) // Adiciona o botão de edição novamente
    }
  }
  novoItem.textContent = itemInput.value
  novoItem.prepend(checkbox)
  novoItem.appendChild(deleteItem)
  novoItem.appendChild(editButton) // Adiciona o botão de edição ao item
  lista.appendChild(novoItem)
  itemInput.value = ''
}
// Adiciona um evento 'keyup' ao campo de entrada para adicionar um item quando a tecla Enter é pressionada
document
  .getElementById('itemInput')
  .addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
      adicionarItem()
    }
  })
