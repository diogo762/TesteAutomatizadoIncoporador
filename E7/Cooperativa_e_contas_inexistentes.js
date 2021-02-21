pm.test("Status code is 200 - Sucesso", function () {
    pm.response.to.have.status(200);


    pm.test("Lista de contas poupanças", function () {
        pm.expect(pm.response.text()).to.include("listaContasPoupancas");
    });

    });