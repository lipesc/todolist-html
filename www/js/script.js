/**
+ * Cria um novo item na lista de tarefas com uma caixa de seleção, botão de exclusão e botão de edição.
+ * O novo item é adicionado à lista 'minhaLista'. Se a caixa de seleção estiver marcada, o texto do item será riscado. O botão de exclusão remove o item da lista. O botão de edição permite que o usuário edite o texto do item.
+ *
+ */
/**
 * Função para adicionar um novo item à lista.
 */

function adicionarItem() {
  // Obtém a lista onde os itens serão adicionados.
  var lista = document.getElementById('minhaLista')

  // Obtém o campo de entrada do novo item.
  var itemInput = document.getElementById('itemInput')

  // Cria um novo elemento 'li' para o item.
  var novoItem = document.createElement('li')

  // Cria um novo elemento 'input' para a caixa de seleção.
  var checkbox = document.createElement('input')
  checkbox.type = 'checkbox'

  // Adiciona um evento de clique à caixa de seleção.
  checkbox.onclick = function () {
    // Alterna a cor do texto do item quando a caixa de seleção é clicada.
    novoItem.style.textDecoration = checkbox.checked ? 'line-through' : 'none'
  }

  // Cria um novo elemento 'button' para a remoção do item.
  var deleteItem = document.createElement('button')
  deleteItem.textContent = '  Remover  '

  // Adiciona um evento de clique ao botão de remoção.
  deleteItem.onclick = function () {
    // Remove o item da lista quando o botão de remoção é clicado.
    lista.removeChild(novoItem)
  }

  // Cria um novo elemento 'button' para a edição do item.
  var editButton = document.createElement('button')
  editButton.textContent = '  Editar  '

  // Adiciona um evento de clique ao botão de edição.
  editButton.onclick = function () {
    // Abre uma caixa de diálogo para editar o texto do item.
    var novoTexto = prompt('  Editar item:  ', novoItem.textContent)
    if (novoTexto !== null) {
      novoItem.textContent = novoTexto
      novoItem.appendChild(checkbox)
      novoItem.appendChild(deleteItem)
      novoItem.appendChild(editButton)
    }
  }

  // Define o texto do novo item.
  novoItem.textContent = itemInput.value

  // Adiciona a caixa de seleção, o botão de remoção e o botão de edição ao novo item.
  novoItem.prepend(checkbox)
  novoItem.appendChild(deleteItem)
  novoItem.appendChild(editButton)

  // Adiciona o novo item à lista.
  lista.appendChild(novoItem)

  // Limpa o campo de entrada.
  itemInput.value = ''
}

// Adiciona um evento 'keyup' ao campo de entrada para adicionar um item quando a tecla Enter é pressionada.
document
  .getElementById('itemInput')
  .addEventListener('keyup', function (event) {
    // Verifica se a tecla pressionada foi a Enter
    // Adiciona um evento 'keyup' ao campo de entrada para adicionar um item quando a tecla Enter é pressionada
    document
      .getElementById('itemInput')
      .addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
          adicionarItem()
        }
      })
  })
// Function to save the to-do list data to local storage
function saveTodoList() {
  const listItems = document.getElementById('minhaLista').querySelectorAll('li')
  const todoListArray = []

  listItems.forEach(listItem => {
    const text = listItem.textContent.trim()
    const isChecked = listItem.querySelector('input[type="checkbox"]').checked
    todoListArray.push({ text, isChecked })
  })

  localStorage.setItem('todoList', JSON.stringify(todoListArray))
}

// Function to load the to-do list data from local storage
function loadTodoList() {
  const storedTodoList = localStorage.getItem('todoList')
  if (storedTodoList) {
    const todoListArray = JSON.parse(storedTodoList)

    todoListArray.forEach(item => {
      const li = createListItem(item.text)
      const checkbox = createCheckbox()
      checkbox.checked = item.isChecked // Set the checkbox state
      li.prepend(checkbox)
      li.appendChild(createDeleteButton(li)) // Add delete button
      li.appendChild(createEditButton(li)) // Add edit button
      document.getElementById('minhaLista').appendChild(li)
    })
  }
}

// Add event listeners to save the to-do list
document.getElementById('itemInput').addEventListener('keyup', handleKeyUp) // For adding new items
document.getElementById('minhaLista').addEventListener('click', event => {
  if (event.target.tagName === 'LI' || event.target.tagName === 'INPUT') {
    saveTodoList() // Save after adding, deleting, or editing
  }
})

// Load the to-do list when the page loads
loadTodoList()
