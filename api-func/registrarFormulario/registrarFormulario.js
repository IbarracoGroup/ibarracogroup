const { MongoClient } = require("mongodb");

module.exports = async function (context, req) {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    context.res = {
      status: 500,
      body: "MONGO_URI no está configurado en la aplicación.",
    };
    return;
  }

  if (!req.body) {
    context.res = {
      status: 400,
      body: "No se recibió ningún cuerpo en la solicitud.",
    };
    return;
  }

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  try {
    await client.connect();

    const database = client.db("ibarracogroup-db"); // 🏷️ NOMBRE DE TU BASE DE DATOS
    const collection = database.collection("formularios"); // 🗃️ NOMBRE DE LA COLECCIÓN (tabla)

    const result = await collection.insertOne(req.body);

    context.res = {
      status: 200,
      body: {
        message: "Formulario guardado correctamente.",
        insertedId: result.insertedId,
      },
    };
  } catch (error) {
    context.log.error("Error al insertar en MongoDB:", error.message);
    context.res = {
      status: 500,
      body: "Error al insertar en MongoDB.",
    };
  } finally {
    await client.close();
  }
};
