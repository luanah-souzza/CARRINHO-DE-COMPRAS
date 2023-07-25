//Objeto com todas as informações sobre os produtos
const items = [
    {
        id: 0,
        nome: "Blusa Xadrez",
        valor: 139.90,
        categoria: "feminino",
        img: "imagens/feminino/1.jpg",
        quantidade: 0,
    }, 
    {
        id: 1,
        nome: "Casaco Casual",
        valor: 218.80,
        categoria: "feminino",
        img: "imagens/feminino/2.jpg",
        quantidade: 0,
    },
    {
        id: 2,
        nome: "Camisa Social",
        valor: 89.90,
        categoria: "feminino",
        img: "imagens/feminino/3.jpg",
        quantidade: 0,
    },  
    {
        id: 3,
        nome: "Camisa Bege",
        valor: 115.50,
        categoria: "feminino",
        img: "imagens/feminino/4.jpg",
        quantidade: 0,
    }, 
    {
        id: 4,
        nome: "Blusa Animal Print Manga7/8",
        valor: 80.99,
        categoria: "feminino",
        img: "imagens/feminino/5.jpg",
        quantidade: 0,
    }, 
    {
        id: 5,
        nome: "Camiseta Bordada",
        valor: 178.20,
        categoria: "feminino",
        img: "imagens/feminino/6.jpg",
        quantidade: 0,
    }, 
    {
        id: 6,
        nome: "Camiseta Listrada Stitch Disney",
        valor: 27.99,
        categoria: "infantil",
        img: "imagens/infantil/1.jpg",
        quantidade: 0,
    }, 
    {
        id: 7,
        nome: "Camiseta Manga Curta Estampa Sonic",
        valor: 30.99,
        categoria: "infantil",
        img: "imagens/infantil/2.jpg",
        quantidade: 0,
    }, 
    {
        id: 8,
        nome: "Vestido Xadrez Manga Longa",
        valor: 69.99,
        categoria: "infantil",
        img: "imagens/infantil/3.jpg",
        quantidade: 0,
    }, 
    {
        id: 9,
        nome: "Camiseta Estampa Dinossauro",
        valor: 22.99,
        categoria: "infantil",
        img: "imagens/infantil/4.jpg",
        quantidade: 0,
    }, 
    {
        id: 10,
        nome: "Casaco Moletom Flanelado Minnie Disney",
        valor: 76.99,
        categoria: "infantil",
        img: "imagens/infantil/5.jpg",
        quantidade: 0,
    }, 
    {
        id: 11,
        nome: "Vestido Estampa Animal Print",
        valor: 75.99,
        categoria: "infantil",
        img: "imagens/infantil/6.jpg",
        quantidade: 0,
    }, 
    {
        id: 12,
        nome: "Camisa Flanelada Estampa Xadrez Capuz",
        valor: 119.99,
        categoria: "masculino",
        img: "imagens/masculino/1.jpg",
        quantidade: 0,
    }, 
    {
        id: 13,
        nome: "Suéter Masculino Zíper",
        valor: 89.99,
        categoria: "masculino",
        img: "imagens/masculino/2.jpg",
        quantidade: 0,
    }, 
    {
        id: 14,
        nome: "Camisa Rick And Morty Manga Curtar Warner Bros",
        valor: 84.99,
        categoria: "masculino",
        img: "imagens/masculino/3.jpg",
        quantidade: 0,
    }, 
    {
        id: 15,
        nome: "Camisa Polo Bolso Manga Curta",
        valor: 49.99,
        categoria: "masculino",
        img: "imagens/masculino/4.jpg",
        quantidade: 0,
    }, 
    {
        id: 16,
        nome: "Camisa Estampa Tropical Manga Curta",
        valor: 54.99,
        categoria: "masculino",
        img: "imagens/masculino/5.jpg",
        quantidade: 0,
    }, 
    {
        id: 17,
        nome: "Camisa Básica Manga Longa",
        valor: 109.99,
        categoria: "masculino",
        img: "imagens/masculino/6.jpg",
        quantidade: 0,
    }, 
]

// Variável que armazena a referência ao elemento com o ID "products"
var productContainer = document.getElementById("products");

// Função que exibe todos os produtos na página
showAllProducts = () => {
  // Limpa o conteúdo do elemento com o ID "products" antes de adicionar os novos produtos
  productContainer.innerHTML = "";

  // Itera sobre cada item no array "items" e chama a função addProductContainer() para criar os cards dos produtos
  items.forEach((item) => {
      addProductContainer(item);
  });
};

// Função que filtra e exibe produtos por categoria na página
showProductsByCategory = (category) => {
  // Limpa o conteúdo do elemento com o ID "products" antes de adicionar os novos produtos filtrados
  productContainer.innerHTML = "";

  // Itera sobre cada item no array "items"
  items.forEach((item) => {
      // Verifica se a categoria do item corresponde à categoria especificada
      if (item.categoria === category) {
          // Se a categoria corresponder, chama a função addProductContainer() para criar o card do produto
          addProductContainer(item);
      }
  });
};

// Função que filtra e exibe produtos de acordo com o termo digitado na pesquisa
pesquisa = () => {
  // Obtém o valor digitado na caixa de pesquisa, removendo espaços em branco no início e fim e convertendo para letras minúsculas
  const searchValue = document.querySelector(".form-control").value.trim().toLowerCase();
  
  // Limpa o conteúdo do elemento com o ID "products" antes de adicionar os novos produtos filtrados
  productContainer.innerHTML = "";

  // Filtra os produtos do array "items" com base no termo digitado
  const filteredItems = items.filter((item) => {
      // Verifica se o nome do produto (em letras minúsculas) contém o termo pesquisado
      return item.nome.toLowerCase().includes(searchValue);
  });

  // Para cada produto filtrado, chama a função addProductContainer() para criar o card do produto
  filteredItems.forEach((item) => {
      addProductContainer(item);
  });
};

// Cria um array vazio para representar o carrinho de compras
let carrinho = [];

// Função para adicionar um produto ao carrinho de compras
function addProduct(id) {
  // Encontre o produto no array 'items' com base no 'id'
  const produto = items.find(item => item.id === id);

  // Verifica se o produto já está no carrinho
  const cartItemIndex = carrinho.findIndex(item => item.id === id);

  if (cartItemIndex !== -1) {
    // Se o produto já estiver no carrinho, apenas incrementa a quantidade
    carrinho[cartItemIndex].quantidade += 1;
    // Atualiza o valor total do item multiplicando o valor unitário pela quantidade
    carrinho[cartItemIndex].valorTotal = carrinho[cartItemIndex].valorUnitario * carrinho[cartItemIndex].quantidade;
  } else {
    // Se o produto não estiver no carrinho, adiciona-o ao carrinho
    carrinho.push({
      id: produto.id,
      nome: produto.nome,
      img: produto.img,
      valorUnitario: produto.valor,
      quantidade: 1, // Começa com quantidade 1, pois é a primeira vez que o produto é adicionado
      valorTotal: produto.valor, // Valor total igual ao valor unitário, pois é a primeira vez que o produto é adicionado
    });
  }

  // Salva os dados do carrinho no localStorage
  localStorage.setItem('carrinho', JSON.stringify(carrinho));

  // Atualiza a exibição dos itens no carrinho
  showCartItems();
}

// Função para aumentar a quantidade de um produto no carrinho de compras
function increaseQuantity(id) {
  // Encontre o produto no carrinho com base no 'id'
  const cartItemIndex = carrinho.findIndex(item => item.id === id);

  if (cartItemIndex !== -1) {
    // Se o produto estiver no carrinho, aumenta a quantidade em 1
    carrinho[cartItemIndex].quantidade += 1;
    // Atualiza o valor total do item multiplicando o valor unitário pela quantidade
    carrinho[cartItemIndex].valorTotal = carrinho[cartItemIndex].valorUnitario * carrinho[cartItemIndex].quantidade;
  }

  // Salva os dados do carrinho no localStorage
  localStorage.setItem('carrinho', JSON.stringify(carrinho));

  // Atualiza a exibição dos itens no carrinho
  showCartItems();
}

// Função para diminuir a quantidade de um produto no carrinho de compras
function decreaseQuantity(id) {
  // Encontre o produto no carrinho com base no 'id'
  const cartItemIndex = carrinho.findIndex(item => item.id === id);

  if (cartItemIndex !== -1) {
    // Se o produto estiver no carrinho, diminui a quantidade em 1
    carrinho[cartItemIndex].quantidade -= 1;

    if (carrinho[cartItemIndex].quantidade <= 0) {
      // Se a quantidade for menor ou igual a zero, remove o item do carrinho
      carrinho.splice(cartItemIndex, 1);
    } else {
      // Atualiza o valor total do item multiplicando o valor unitário pela quantidade
      carrinho[cartItemIndex].valorTotal = carrinho[cartItemIndex].valorUnitario * carrinho[cartItemIndex].quantidade;
    }
  }

  // Salva os dados do carrinho no localStorage
  localStorage.setItem('carrinho', JSON.stringify(carrinho));

  // Atualiza a exibição dos itens no carrinho
  showCartItems();
}

// Função para remover um item do carrinho de compras
function removeItem(id) {
  // Encontre o índice do item no carrinho com base no 'id'
  const indiceItemNoCarrinho = carrinho.findIndex((item) => item.id === id);

  if (indiceItemNoCarrinho !== -1) {
    // Se o item for encontrado, remova-o do carrinho
    carrinho.splice(indiceItemNoCarrinho, 1);

    // Salve os dados atualizados do carrinho no localStorage
    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    // Atualize a exibição dos itens do carrinho
    showCartItems();
  }
}

function continueShopping() {
  // Fecha o modal do carrinho (caso esteja aberto) usando o Bootstrap
  const cartModal = new bootstrap.Modal(document.getElementById("cartModal"));
  cartModal.hide();
}

// Função para exibir os itens do carrinho de compras na interface
function showCartItems() {
  // Obtém o elemento HTML que irá conter os itens do carrinho
  const cartItemsContainer = document.getElementById("cartItems");
  // Limpa o conteúdo atual do container
  cartItemsContainer.innerHTML = "";

  // Itera sobre os itens do carrinho (carrinho é o array que contém os itens do carrinho)
  carrinho.forEach((item) => {
    // Cria um elemento <li> para representar cada item do carrinho
    const listItem = document.createElement("li");
    listItem.className = "list-group-item py-3";

    // Preenche o conteúdo do item do carrinho
    listItem.innerHTML = `
      <div class="row g-3">
        <div class="col-4 col-md-3 col-lg-2">
          <a href="#">
            <img src="${item.img}" alt="" class="img-thumbnail">
          </a>
        </div>
        <div class="col-8 col-md-9 col-lg-7 col-xl-8 text-left align-self-center">
          <h4><b><a href="#" class="text-decoration-none text-danger">${item.nome}</a></b></h4>
          <h4><small>Preço: R$ ${item.valorUnitario.toFixed(2)}</small></h4>
          <div class="btn-group mt-2" role="group" aria-label="Quantity">
            <button type="button" class="btn btn-secondary" onclick="decreaseQuantity(${item.id})">-</button>
            <button type="button" class="btn btn-light" disabled>${item.quantidade}</button>
            <button type="button" class="btn btn-secondary" onclick="increaseQuantity(${item.id})">+</button>
          </div>
          <button class="btn btn-danger mt-2" type="button" onclick="removeItem(${item.id})">Remover</button>
          <h4><small>Valor Total: R$ ${item.valorTotal.toFixed(2)}</small></h4>
        </div>
      </div>
    `;

    // Adiciona o item criado ao container de itens do carrinho
    cartItemsContainer.appendChild(listItem);
  });
}

// Função para finalizar a compra
function checkout() {
  // Verifica se o carrinho está vazio
  if (carrinho.length === 0) {
    alert("Você não adicionou nada ao carrinho. Adicione produtos antes de finalizar a compra.");
    return; // Retorna sem prosseguir com a finalização da compra
  }

  // Limpa o carrinho de compras após finalizar a compra
  carrinho = [];
  localStorage.removeItem('carrinho');
  showCartItems();

  // Exibe uma mensagem de confirmação para o usuário (você pode personalizar esta mensagem de acordo com a sua necessidade)
  alert("Compra finalizada com sucesso! Obrigado por comprar conosco!");

  // Fecha o modal do carrinho (caso esteja aberto) usando o Bootstrap após 3 segundos
  const cartModal = new bootstrap.Modal(document.getElementById("cartModal"));
  cartModal.show();
  setTimeout(() => {
    cartModal.hide();
  }, 1000); // Tempo em milissegundos (3 segundos)
}






// Verifica se há dados salvos no localStorage e atualiza o carrinho
const savedCart = localStorage.getItem('carrinho');

if (savedCart) {
  // Se houver dados salvos no localStorage, atualiza o carrinho com esses dados
  carrinho = JSON.parse(savedCart);

  // Atualiza a exibição dos itens do carrinho na interface
  showCartItems();
}

  // Função que formata um valor numérico para a moeda brasileira (BRL)
formatarMoedaReal = (valor) => {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Função que mostra os produtos na tela
addProductContainer = (item) => {
  // Cria um elemento div para representar o card do produto
  var cardDiv = document.createElement("div");
  cardDiv.className = "col text-center";

  // Preenche o conteúdo do card com os dados do produto
  cardDiv.innerHTML = `
    <div class="card h-100">
      <img class="card-img-top" src="${item.img}" alt="${item.nome}">
      <div class="card-body d-flex flex-column">
        <h2 class="card-title my-2">${item.nome}</h2>
        <h3 class="card-subtitle my-2">${formatarMoedaReal(item.valor)}</h3>
        <button class="btn btn-primary mt-auto" type="button" key="${item.id} my-2" onclick="addProduct(${item.id})" id="add-product">Adicionar</button>
      </div>
    </div>
  `;

  // Adiciona o card do produto ao container principal onde serão exibidos todos os produtos
  productContainer.appendChild(cardDiv);
}

// Eventos de clique nos links do menu para filtrar produtos por categoria e botão de pesquisa
document.getElementById("link-todos").onclick = showAllProducts;
document.getElementById("link-feminino").onclick = () => showProductsByCategory("feminino");
document.getElementById("link-infantil").onclick = () => showProductsByCategory("infantil");
document.getElementById("link-masculino").onclick = () => showProductsByCategory("masculino");
document.getElementById("btn-pesquisa").onclick = () => pesquisa();

// Exibe todos os produtos inicialmente mesmo sem o clique em um link específico
showAllProducts();

// Evento de clique para exibir o carrinho quando o botão "Carrinho" é clicado
document.querySelector("[data-bs-target='#cartModal']").addEventListener("click", showCartItems);

