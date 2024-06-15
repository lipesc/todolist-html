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
  deleteItem.textContent = ' Remover'

  // Adiciona um evento de clique ao botão de remoção.
  deleteItem.onclick = function () {
    // Remove o item da lista quando o botão de remoção é clicado.
    lista.removeChild(novoItem)
  }

  // Cria um novo elemento 'button' para a edição do item.
  var editButton = document.createElement('button')
  editButton.textContent = ' Editar'

  // Adiciona um evento de clique ao botão de edição.
  editButton.onclick = function () {
    // Abre uma caixa de diálogo para editar o texto do item.
    var novoTexto = prompt('Editar item:', novoItem.textContent)
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

/**************************************************************************************************************************************************************
 * Extract the event listener into a separate function to improve readability and 				maintainability.
	Use arrow functions to avoid binding the this keyword.
	Use template literals to improve readability when setting the text content of the buttons.
	
 * 
 // Extraia o manipulador de eventos em uma função separada
const handleKeyUp = (event) => {
  // Verifica se a tecla pressionada é 'Enter'
  if (event.key === 'Enter') {
    // Chama a função 'adicionarItem' para adicionar um novo item à lista
    adicionarItem();
  }
};

// Use arrow functions para evitar a vinculação do 'this' keyword
document.getElementById('itemInput').addEventListener('keyup', handleKeyUp);

// Use template literals para melhorar a legibilidade ao definir o conteúdo de texto dos botões
const createButton = (text, onClick) => {
  // Cria um novo elemento 'button'
  const button = document.createElement('button');
  // Define o conteúdo de texto do botão
  button.textContent = text;
  // Adiciona um evento de clique ao botão
  button.onclick = onClick;
  // Retorna o botão criado
  return button;
};

function adicionarItem() {
  // Obtém a lista onde os itens serão adicionados
  const lista = document.getElementById('minhaLista');
  // Obtém o campo de entrada do novo item
  const itemInput = document.getElementById('itemInput');
  // Cria um novo elemento 'li' para o item
  const novoItem = document.createElement('li');
  // Cria um novo elemento 'input' para a caixa de seleção
  const checkbox = document.createElement('input');

  checkbox.type = 'checkbox';
  checkbox.onclick = () => {
    // Alterna a cor do texto do item quando a caixa de seleção é clicada
    novoItem.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
  };

  // Cria um novo botão de remoção
  const deleteItem = createButton('Remover', () => {
    // Remove o item da lista quando o botão de remoção é clicado
    lista.removeChild(novoItem);
  });

  // Cria um novo botão de edição
  const editButton = createButton('Editar', () => {
    // Abre uma caixa de diálogo para editar o texto do item
    const novoTexto = prompt(`Editar item: ${novoItem.textContent}`);
    if (novoTexto !== null) {
      // Atualiza o texto do item
      novoItem.textContent = novoTexto;
      // Adiciona a caixa de seleção, o botão de remoção e o botão de edição ao novo item
      novoItem.appendChild(checkbox);
      novoItem.appendChild(deleteItem);
      novoItem.appendChild(editButton);
    }
  });

  // Define o texto do novo item
  novoItem.textContent = itemInput.value;
  // Adiciona a caixa de seleção, o botão de remoção e o botão de edição ao novo item
  novoItem.prepend(checkbox);
  novoItem.appendChild(deleteItem);
  novoItem.appendChild(editButton);
  // Adiciona o novo item à lista
  lista.appendChild(novoItem);
  // Limpa o campo de entrada
  itemInput.value = '';
}
**************************************************************************************************************************************************************/
