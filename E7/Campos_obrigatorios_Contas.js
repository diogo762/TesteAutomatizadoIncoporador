pm.test("Status code is 412 - Campo obrigatorio", function () {
    pm.response.to.have.status(412);


    pm.test("Mensagem de campo obrigatorio", function () {
        pm.expect(pm.response.text()).to.include("O(s) campo(s) Lista de contas poupança é(são) obrigatório(s).");
    });
});