import database from "../../database";

const updatedProductByIdService = async (id, data) => {
  try {
    let query = "UPDATE products SET ";
    const dataKeys = Object.keys(data);
    const dataValues = Object.values(data);
    dataKeys.forEach((key, index) => {
      query += `${key} = $${(index += 1)},`;
    });
    query = query.slice(0, -1);
    query += ` WHERE id = \$${(dataKeys.length += 1)} RETURNING *;`;
    const updatedProductById = await database.query(query, [...dataValues, id]);
    return updatedProductById.rows;

    // const updatedProductById = database.query(
    //   `UPDATE products SET  $1 = $2
    //   RETURNING * `
    // );
  } catch (error) {
    throw new Error(error);
  }
};

export default updatedProductByIdService;
