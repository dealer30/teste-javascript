function declarativo(palavras) {
let controle = 0;

const filtrarString = (palavra, termo) => palavra.includes(termo) ? controle++ : controle;

palavras.map((palavra) => filtrarString(palavra, 'e'));

return controle;
}

module.exports = declarativo;
