let jsonData = pm.response.json()

pm.test('Número de contas status Ativo - 1 semestre de 2020', () => {
    _.each(jsonData.registros, (item) => {
        pm.expect(item.quantidadeContasAniversario).to.lessThan(107)
    })
});
pm.test("Status code is 200 - Sucesso", function () {
    pm.response.to.have.status(200);
    
    });
