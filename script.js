const produtos = [
    { nome: "Sapata de Freio Dianteira", categoria: "sapata", imagem: src="Sapata-de-freio.jpg", descricao: "Durabilidade e segurança para veículos leves." },
    { nome: "Sapata de Freio Traseira", categoria: "sapata", imagem: src="SapataT.png", descricao: "Durabilidade e segurança para veículos leves." },
	{ nome: "Sapata de Freio Dianteira", categoria: "sapata", imagem: src="Sapata-de-freio.jpg", descricao: "Durabilidade e segurança para veículos leves." },
	{ nome: "Sapata de Freio Dianteira", categoria: "sapata", imagem: src="Sapata-de-freio.jpg", descricao: "Durabilidade e segurança para veículos leves." },
    { nome: "Sapata de Freio Dianteira", categoria: "sapata", imagem: src="Sapata-de-freio.jpg", descricao: "Durabilidade e segurança para veículos leves." }
	
];

const grade = document.getElementById("grade-produtos");
const campoBusca = document.getElementById("busca");
const filtroCategoria = document.getElementById("categoria");

function renderizarProdutos(lista) {
    grade.innerHTML = "";
    if (lista.length === 0) {
        grade.innerHTML = "<p>Nenhum produto encontrado.</p>";
        return;
    }
    lista.forEach(prod => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${prod.imagem}" alt="${prod.nome}">
            <h3>${prod.nome}</h3>
            <p>${prod.descricao}</p>
        `;
        grade.appendChild(card);
    });
}

function filtrar() {
    const texto = campoBusca.value.toLowerCase();
    const categoria = filtroCategoria.value;
    const filtrados = produtos.filter(p => 
        (categoria === "todos" || p.categoria === categoria) &&
        p.nome.toLowerCase().includes(texto)
    );
    renderizarProdutos(filtrados);
}

campoBusca.addEventListener("input", filtrar);
filtroCategoria.addEventListener("change", filtrar);

renderizarProdutos(produtos);
