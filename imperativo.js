function imperativo(palavras) {

let controle = 0;

for (let i=0; i < palavras.length; i++) {
    if (palavras[i].includes('e')) controle++;
}

return controle;

}

module.exports = imperativo;
