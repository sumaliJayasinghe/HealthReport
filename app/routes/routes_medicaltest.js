var appReportRouter = function(app, model) {
    app.get("/", function(req, res) {
        res.status(200).send("Welcome to our restful API");
    });

    app.get("/310/healthReport/getMedicalTest", function(req, res) {
        model.MedicalReport.findAll({}).then(test => res.json({
                status: 200,
                data: test
            }))
            .catch(error => res.json({
                status: 203,
                error: error
            }));
    });
    app.get("/310/healthReport/getMedicalTest/:id", function(req, res) {
        model.MedicalReport.findById(req.params.id).then(tests => res.json({
                status: 200,
                data: tests
            }))
            .catch(error => res.json({
                status: 203,
                error: error
            }));
    });

    app.post("/310/healthReport/createMedicalTest", function(req, res) {
        model.MedicalReport.create(req.body).then(re => res.json({
                status: 201,
                data: re
            }))
            .catch(error => res.json({
                status: 203,
                error: error
            }));
    });

    app.update("/310/healthReport/updateMedicalTest/:id", function(req, res) {
        model.MedicalReport.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            .then(user => res.json({
                status: 201,
                data: user
            }))
            .catch(error => res.json({
                status: 203,
                error: error
            }));
    });
    app.delete("/310/healthReport/deleteMedicalTest/:id", function(req, res) {
        model.MedicalReport.destroy({
                where: {
                    id: req.params.id
                }
            }).then(resp => res.json({
                status: 200,
                data: resp
            }))
            .catch(error => res.json({
                status: 203,
                error: error
            }));
    });
}
module.exports = appReportRouter;