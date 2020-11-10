const winston = require("winston");
const UserService = require("./user.service");
<<<<<<< HEAD
const MedicalTestService = require("./medical-test.service");
const { User, MedicalTest } = require("../models");
=======
const LoginService = require("./login.service");
const { User } = require("../models");
>>>>>>> d74a157 (Added authentication-g.)

const logger = winston.loggers.get("logger");

exports.userServiceInstance = new UserService({ logger, userModel: User });
<<<<<<< HEAD
exports.medicalTestServiceInstance = new MedicalTestService({
  logger,
  testModel: MedicalTest,
});
=======
exports.loginServiceInstance = new LoginService({ logger, userModel: User });
>>>>>>> d74a157 (Added authentication-g.)
