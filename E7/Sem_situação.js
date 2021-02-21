pm.test("Status code is 200 - Sucesso", function () {
    pm.response.to.have.status(200);


    pm.test("Movimento Presente", function () {
        pm.expect(pm.response.text()).to.include(10590131081702824);
    });

      pm.test("Movimento Presente", function () {
        pm.expect(pm.response.text()).to.include(10750022111705026);
    });

 
});