//tdd

// var isAnagrama = require('../anagrama');
 
// describe('Teste Anagrama',function(){
//     it('quando for verdadeiro "abc" e "cba"',function(){
//         expect(isAnagrama('abc','cba')).toEqual(true);
//     })

//     it('quando  for verdadeiro "Amor" e "Roma"',function(){
//         expect(isAnagrama('Amor','Roma')).toEqual(true);
//     })

//     it('se é verdade que existem duas strings vazias',function(){
//         expect(isAnagrama('','')).toEqual(true);
//     })

//     it('é verdade quando 132 é igual a 312',function(){
//         expect(isAnagrama('132','312')).toEqual(true);
//     })

//     it('é verdade quando 0.12 é igual a 102',function(){
//         expect(isAnagrama(0.12,'102')).toEqual(true);
//     })
    
//     it('é verdade quando 012 é igual a 102',function(){
//         expect(isAnagrama(012,102)).toEqual(false);
//     }) 
// })
//tdd
var isAnagram = require ('../anagram');

describe('Teste Anagram',function(){
    it('quando for verdadeiro "abc" e "cba"',function(){
        expect(isAnagram('abc', 'cba')).toEqual(true);
    })
    it('quando for verdadeiro "Amor" e "Roma"',function(){
        expect (isAnagram('Amor','Roma')).toEqual(true);
    })
    it('se é verdade que existem duas String vazias',function(){
        expect(isAnagram('','')).toEqual(true);
    })
    it('é verdade quando "132" é igual "312"',function(){
        expect(isAnagram('132','312')).toEqual(true);
    })
    it('é verdade quando 0.12 é igual "102"',function(){
        expect(isAnagram(0.12,'102')).toEqual(true);
    })
    it('é falso quando 012 nao é igual a 102',function(){
        expect(isAnagram(012,102)).toEqual(false);
    })
})