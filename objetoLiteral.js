const user = {
  nome: "Juliana",
  email: "jjj@j.com",
  nascimento: "10/10/10",
  role: "admin",
  ativo: true,
  exibirInfos: function () {
    console.log(this.nome, this.email);
  },
};

user.exibirInfos();
// const exibir = user.exibirInfos;
// exibir();

const exibir = function () {
  console.log(this);
};

const exibirNome = exibir.bind(user);
exibirNome;
exibir();
