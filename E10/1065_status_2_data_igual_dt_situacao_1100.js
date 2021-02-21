let jsonData = pm.response.json()

pm.test('--- status 2 - 1100', () => {
    _.each(jsonData.registros, (item) => {
        pm.expect(item).to.not.eql(0)
    })
});


pm.test("Status code is 200 - Sucesso", function () {
    pm.response.to.have.status(200);
    
    });