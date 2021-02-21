pm.test("Sem saldos - maior que dt_situação - Saldo banco totalizador", function () {
    pm.expect(pm.response.text()).not.include("2021-12-29");

pm.test("Status code is 200 - Sucesso", function () {
    pm.response.to.have.status(200);
    
    });
});