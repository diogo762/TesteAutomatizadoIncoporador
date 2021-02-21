pm.test("Com saldo - data menor que dt_situação - Saldo banco", function () {
    pm.expect(pm.response.text()).to.include("2018-12-29");

pm.test("Status code is 200 - Sucesso", function () {
    pm.response.to.have.status(200);
    
    });
});