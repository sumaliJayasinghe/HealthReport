var appReportRouter = function(app, model) {
    app.get("/", function(req, res) {
        res.status(200).send("Welcome to our restful API");
    });

    app.get("/310/healthReport/getReportResults", function(req, res) {
        var request;
        if(req && req.body){
            request = model.ReportResult.findAll({
                where: {
                    userID: req.body.userID,
                    reportID: req.body.reportID
                }
            });
        }else{
            request = model.ReportResult.findAll({})
        }

        request.then(test => res.json({
            status: 200,
            data: test
        }))
        .catch(error => res.json({
            status: 203,
            error: error
        }));
        
    });
    app.get("/310/healthReport/getReportResult/:id", function(req, res) {
        model.ReportResult.findById(req.params.id).then(tests => res.json({
                status: 200,
                data: tests
            }))
            .catch(error => res.json({
                status: 203,
                error: error
            }));
    });

    app.post("/310/healthReport/createReportResult", function(req, res) {
        model.ReportResult.create(req.body).then(re => res.json({
                status: 201,
                data: re
            }))
            .catch(error => res.json({
                status: 203,
                error: error
            }));
    });

    app.update("/310/healthReport/updateReportResult/:id", function(req, res) {
        model.ReportResult.update(req.body, {
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
    app.delete("/310/healthReport/deleteReportResult/:id", function(req, res) {
        model.ReportResult.destroy({
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