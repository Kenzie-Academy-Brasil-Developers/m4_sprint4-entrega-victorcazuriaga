import database from "../../database";

const updatedProductByIdService = async (id, data) => {
  try {
    const query = "UPDATE products SET";
    const dataKeys = Object.keys(data);
    const dataValues = Object.values(data);
    dataKeys.map((key) => {
      query += `${key} \$${(index += 1)}`;
    });
    query = query.slice(0, -2);
    query += ` WHERE id = \$${(keys.length += 1)} RETURNING *;`;
    const updatedProductById = await database.query(query, [...dataValues, id]);
    return updatedProductById.rows;
  } catch (error) {
    throw new Error(error);
  }
};

export default updatedProductByIdService;
