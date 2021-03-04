const { getConecction } = require("../config/database");
const { v4 } = require("uuid");

exports.WelcomeToPage = (req, res) => {
  res.render("index", {
    PageName: "Test",
    TagLine: "Signature Generator",
  });
};

exports.toSignature = async (req, res, next) => {
  const user = getConecction().get("user").value();

  res.render("firma", {
    PageName: "Firma HTML",
    TagLine: "Crea tu Firma Corporativa",
    user,
  });
};

exports.CreateSignature = async (req, res) => {
  const newSignature = {
    id: v4(),
    name: req.body.name,
    lastname: req.body.lastname,
    position: req.body.position,
    phone: req.body.phone,
    mail: req.body.mail,
  };

  console.log(newSignature);

  getConecction().get("user").push(newSignature).write();
  res.redirect("firma");
};
