import Joi from "joi";

export default (schema, property) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    console.log(error);
    const valid = error == null;
    console.log(valid);

    if (valid) {
      next();
    } else {
      const { details } = error;
      const message = details?.map(i => i.message).join(",");

      console.log("error", message);
      res.status(422).json({ error: message });
    }
  }
   
}

