pm.test("Com saldo - mesma data que dt_situação - Saldo banco", function () {
    pm.expect(pm.response.text()).to.include("2020-12-22");

pm.test("Status code is 200 - Sucesso", function () {
    pm.response.to.have.status(200);
    
    });
});