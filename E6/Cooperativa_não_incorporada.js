pm.test("Status code is 200 - Sucesso", function () {
    pm.response.to.have.status(200);

pm.test("Header - Filtro", function () {
        pm.expect(pm.response.text()).to.include("codTipoFiltro");
         });

        pm.test("Header - Coop", function () {
        pm.expect(pm.response.text()).to.include("codCoopOrigem");
         });

        pm.test("Header - Destino", function () {
        pm.expect(pm.response.text()).to.include("codCoopDestino");
         });

         pm.test("Header - Lista", function () {
        pm.expect(pm.response.text()).to.include("listaDeParaIncorporacao");
         });


    });