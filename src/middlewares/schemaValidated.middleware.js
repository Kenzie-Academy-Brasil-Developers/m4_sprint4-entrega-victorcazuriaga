const schemaValidation = (schema) => async (request, response, next) => {
  try {
    const valitadedData = await schema.validate(request.body);
    request = valitadedData;
    next();
  } catch (error) {
    return response.status(400).json({
      message: error.errors,
    });
  }
};
export default schemaValidation;
