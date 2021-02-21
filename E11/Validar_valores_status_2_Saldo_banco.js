let jsonData = pm.response.json()

pm.test('Valores coop 2013 status - 2', () => {
    _.each(jsonData.saldos, (item) => {
        pm.expect(item.saldo).to.eql(366055050)
        pm.expect(item.totalDepositoPF).to.eql(200)
        pm.expect(item.totalDepositoPJ).to.eql(200)
        pm.expect(item.totalRetiradaPF).to.eql(200)
        pm.expect(item.totalRetiradaPJ).to.eql(200)
        pm.expect(item.totalRendimentoPF).to.eql(200)
        pm.expect(item.totalRendimentoPJ).to.eql(200)
        pm.expect(item.totalIRPJ).to.eql(200)

    })
});
pm.test("Status code is 200 - Sucesso", function () {
    pm.response.to.have.status(200);
    
    });