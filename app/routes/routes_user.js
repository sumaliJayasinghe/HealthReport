var appRouter = function (app) {
    app.get("/", function(req, res) {
      res.status(200).send("Welcome to our restful API");
    });

    app.get("/310/healthReport/getUser", function (req, res) {
        var data = ({
          firstName: "sumali",
          lastName: "jayasinghe",
          id: "8878234567V",
          email: "sukijayasinghe@gmail.com",
          age: "30",
          weight:"57KG"
        });
        res.status(200).send(data);
      });
      app.get("/310/healthReport/createUser", function (req, res) {
        var data = ({
          firstName: "sumali",
          lastName: "jayasinghe",
          id: "8878234567V",
          email: "sukijayasinghe@gmail.com",
          age: "30",
          weight:"57KG"
        });
        res.status(200).send(data);
      });

      app.get("/310/healthReport/updateUser", function (req, res) {
        var data = ({
          firstName: "sumali",
          lastName: "jayasinghe",
          id: "8878234567V",
          email: "sukijayasinghe@gmail.com",
          age: "30",
          weight:"57KG"
        });
        res.status(200).send(data);
      });
  }
module.exports = appRouter;  