var appRouter = function (app) {
    app.get("/", function(req, res) {
      res.status(200).send("Welcome to our restful API");
    });

      app.get("/310/healthReport/getMedicalTest", function (req, res) {
        var data = ({
          firstName: "sumali",
          lastName: "jayasinghe",
          username: "suki",
          email: "sukijayasinghe@gmail.com"
        });
        res.status(200).send(data);
      });
      app.get("/310/healthReport/createMedicalTest", function (req, res) {
        var data = ({
          firstName: "sumali",
          lastName: "jayasinghe",
          username: "suki",
          email: "sukijayasinghe@gmail.com"
        });
        res.status(200).send(data);
      });

      app.get("/310/healthReport/updateMedicalTest", function (req, res) {
        var data = ({
          firstName: "sumali",
          lastName: "jayasinghe",
          username: "suki",
          email: "sukijayasinghe@gmail.com"
        });
        res.status(200).send(data);
      });

      app.get("/310/healthReport/deleteMedicalTest", function (req, res) {
        var data = ({
          firstName: "sumali",
          lastName: "jayasinghe",
          username: "suki",
          email: "sukijayasinghe@gmail.com"
        });
        res.status(200).send(data);
      });
  }
module.exports = appRouter;  