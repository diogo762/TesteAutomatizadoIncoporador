let jsonData = pm.response.json()

pm.test('2013 status 2 - 1100', () => {
    _.each(jsonData.registros, (item) => {
        pm.expect(item.saldoTotal).to.eql(0)
    })
});


pm.test("Status code is 200 - Sucesso", function () {
    pm.response.to.have.status(200);
    
    });