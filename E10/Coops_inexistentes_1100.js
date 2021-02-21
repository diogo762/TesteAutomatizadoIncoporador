let jsonData = pm.response.json()

pm.test('Cooperativas inexistente retornando valor zerado - 1100', () => {
    _.each(jsonData.registros, (item) => {
        pm.expect(item.saldoTotal).to.eql(0)
    })
});


pm.test("Status code is 200 - Sucesso", function () {
    pm.response.to.have.status(200);
    
    });
