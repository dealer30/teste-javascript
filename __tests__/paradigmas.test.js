const declarativo = require('../declarativo');
const imperativo = require('../imperativo');

const palavras = ['javascript', 'the', 'best'];
const vezes = [1, 10, 100, 1000];

vezes.map(a => {
    test(`${a} execuções no Paradigma Declarativo`, () => {
        for (let i=0; i <= a; i++){
            const result = declarativo(palavras);
            expect(result).toBe(2, 'Deveria retornar 2');
        }
    })

    test(`${a} execuções no Paradigma Imperativo`, () => {
        for (let i=0; i <= a; i++){
            const result = imperativo(palavras);
            expect(result).toBe(2, 'Deveria retornar 2');
        }
    })
})
