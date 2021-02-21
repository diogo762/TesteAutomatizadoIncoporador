let jsonData = pm.response.json()

pm.test('Valores coop 2013 status - 2', () => {
    _.each(jsonData.totalizadorSaldos, (item) => {
        pm.expect(item.saldo).to.eql(366055050)
        pm.expect(item.totalDeposito).to.eql(400)
        pm.expect(item.totalRetirada).to.eql(400)
        pm.expect(item.totalRendimento).to.eql(400)
        pm.expect(item.totalIRPJ).to.eql(200)

    })
});
pm.test("Status code is 200 - Sucesso", function () {
    pm.response.to.have.status(200);
    
    });