var appUserRouter = function(app, model) {
    app.get("/", function(req, res) {
        res.status(200).send("Welcome to our restful API");
    });

    app.get("/310/healthReport/getAllUser", function(req, res) {
        model.User.findAll({}).then(users => res.json({
                status: 200,
                data: users
            }))
            .catch(error => res.json({
                status: 203,
                error: error
            }));
    });
    app.get("/310/healthReport/getUser/:id", function(req, res) {
        model.User.findById(req.params.id).then(user => res.json({
                status: 200,
                data: user
            }))
            .catch(error => res.json({
                status: 203,
                error: error
            }));
    });
    app.post("/310/healthReport/createUser", function(req, res) {
        model.User.create(req.body).then(user => res.json({
                status: 201,
                data: user
            }))
            .catch(error => res.json({
                status: 203,
                error: error
            }));
    });

    app.update("/310/healthReport/updateUser/:id", function(req, res) {
        model.User.update(req.body, {
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
    app.delete("/310/healthReport/deleteUser/:id", function(req, res) {
        model.User.destroy({
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
module.exports = appUserRouter;