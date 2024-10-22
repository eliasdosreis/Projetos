const inputBox      = document.getElementById("input-box");        // Obtém o elemento com o id "input-box" e o armazena na variável inputBox
const listContainer = document.getElementById("list-container");   // Obtém o elemento com o id "list-container" e o armazena na variável listContainer

function addTask(){                                                // Declara a função addTask
    if(inputBox.value === ''){                                     // Verifica se o valor do inputBox está vazio
        alert("You must write something")                          // Exibe um alerta se o input estiver vazio
    } 
    else{                                                          // Se o input não estiver vazio
        let li = document.createElement("li");                     // Cria um novo elemento "li"
        li.innerHTML = inputBox.value;                             // Define o conteúdo do "li" com o valor do inputBox
        listContainer.appendChild(li);                             // Adiciona o "li" ao listContainer

        let span = document.createElement("span");                 // Cria um novo elemento "span"
        span.innerHTML = "\u00d7";                                 // Define o conteúdo do "span" com o símbolo "×"
        li.appendChild(span);                                      // Adiciona o "span" como filho do "li"
    }   
    inputBox.value = "";                                           // Limpa o valor do inputBox
    saveData();                                                    // Chama a função saveData para salvar os dados
}

listContainer.addEventListener("click", function(e){               // Adiciona um ouvinte de evento de clique ao listContainer
    if(e.target.tagName === "LI"){                                 // Verifica se o elemento clicado é um "li"
        e.target.classList.toggle("checked");                      // Alterna a classe "checked" no elemento clicado
        saveData();                                                // Salva os dados atuais
    }
    else if(e.target.tagName === "SPAN"){                          // Verifica se o elemento clicado é um "span"
        e.target.parentElement.remove();                           // Remove o elemento pai do "span" (o "li")
        saveData();                                                // Salva os dados atuais
    }
}, false);

function saveData(){                                               // Declara a função saveData
    localStorage.setItem("data", listContainer.innerHTML);         // Salva o conteúdo HTML de listContainer no localStorage com a chave "data"
}

function showTask(){                                               // Declara a função showTask
    listContainer.innerHTML = localStorage.getItem("data");        // Recupera os dados do localStorage e insere em listContainer
}

showTask();                                                        // Chama a função showTask para exibir as tarefas ao carregar a página
