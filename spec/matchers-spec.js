describe("Suite de testes dp toBe", function(){

   var valorBooleano = true;
   var valorBooleano2 = true;
   var valorBooleanoCopia = valorBooleano;
   var valorBooleanoTexto = "true";
   var obj1 = { 'valor' : valorBooleano };
   var obj2 = { 'valor' : valorBooleano };
//==valor eo tipo  e == apenas compara valores (toEqual)
   it("deve validar o uso do matcher 'toBe'", function() {
   expect( valorBooleano).toBe(true);
   expect( valorBooleanoCopia).toBe(valorBooleano);
   expect( valorBooleano).not.toBe(valorBooleanoTexto);
   expect(valorBooleanoTexto).toBe("true");
   expect(obj1).not.toBe(obj2); 

});
});
    // to match 
    describe("Suite de testes do toMatch",function(){
     var textoComparar = "Curso de testes com Jasmine";
     it("deve validar ou uso do matcher 'toMatch'", function(){
     expect(textoComparar).toMatch(/jasmine/);
     expect(textoComparar).toMatch("Jasmine");
     expect(textoComparar).toMatch(/Jasmine/i);
     expect(textoComparar).not.toMatch(/Javascript/);
      expect("14/12/2016").toMatch(/^\d{2}\/\d{2\/\d{4}$/);
     });
     });
     //toBeDefined 
     describe("Suite de testes do toBeDefined",function(){
         var numero = 10;
         var texo;
         var obj = {'valor':10 };
         it("deve validar o uso do matcher 'toBeDefined'",function(){
         expect (numero).toBeDefined();
         expect (texto).not.toBeDefined();
         expect(obj.valor).toBeDefined();
         expect(obj.mensagem).not.toBeDefined();  
         });
         });
        //toBeUnderfined
        describe("Suite de testes do toBeUnderdefined",function(){
            var numero = 10;
            var texto;
            var obj = {'valor':10};
            it("deve validar o uso do matcher 'toBeUnderDefined'",function(){
                expect (numero).toBeUnderDefined();
                expect (texto).not.toBeUnderDefined();
                expect(obj.mensagem).toBeUnderDefined();  
                expect(obj.valor).not.toBeUnderDefined();
                
         });
         });
         //toBeNull
         describe("Suite de testes do toBeNull",function(){
         
            var objeto = null;
            var texto;
            var numero = 10;
            it ("deve validar o uso do matcher 'toBeNull'",function() {
            expect(objeto).toBeNull();
            expect(numero).not.toBeNull();
            expect(texto).not.toBeNull();
            expect(objeto).not.tobeEqual(texto);
             });
             });
          //toBeTruthy
          //acieta qualquer valor valído != 'false'
            describe("Suite de testes do toBeTruthy",function(){
            var objeto = {'valor' : 123};
            var texto;
            var numero = 10;
            it("deve validar o uso do matcher 'toBeThuthy'",function(){
            expect(objeto).toBeTruthy();
            expect(numero).toBeTruthy();
            expect(texto).not.toBeTruthy();
            });
            });
           //toBeFalsy
           describe("Suite de testes do toBeFalsy",function(){
           var numero = 10;
           it("Deve validar o uso do matcher 'toBeFalsy'",function(){
           expect(false).toBeFalsy();
           expect("").toBeFalsy();
           expect(0).toBeFalsy();
           expect(undefined).toBeFalsy();
           expect(null).toBeFalsy();
           expect(numero).not.toBeFalsy();
           expect("false").toBeFalsy();
           });
           });
