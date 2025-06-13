const { Connection, Request, TYPES } = require('tedious');
const { DefaultAzureCredential } = require('@azure/identity');

async function getAccessToken() {
  const credential = new DefaultAzureCredential();
  const tokenResponse = await credential.getToken('https://database.windows.net/');
  return tokenResponse.token;
}

module.exports = async function (context, req) {
  const { nombre, apellido, email, empresa, pais, mensaje, boletin } = req.body;

  const accessToken = await getAccessToken();

  const config = {
    server: 'ibarracogroupserver.database.windows.net',
    authentication: {
      type: 'azure-active-directory-access-token',
      options: { token: accessToken }
    },
    options: {
      database: 'ibarracogroupdb',
      encrypt: true
    }
  };

  return new Promise((resolve) => {
    const connection = new Connection(config);

    connection.on('connect', (err) => {
      if (err) {
        context.log('❌ Error de conexión:', err);
        context.res = {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
          body: { ok: false, error: 'Error de conexión: ' + err.message }
        };
        return resolve();
      }

      const sql = `
        INSERT INTO Formularios (Nombre, Apellido, Email, Empresa, Pais, Mensaje, Boletin)
        VALUES (@nombre, @apellido, @correo, @empresa, @pais, @mensaje, @boletin)
      `;

      const request = new Request(sql, (err) => {
        if (err) {
          context.log('❌ Error SQL:', err);
          context.res = {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
            body: { ok: false, error: 'Error al insertar: ' + err.message }
          };
        } else {
          context.res = {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
            body: { ok: true }
          };
        }
        connection.close();
        return resolve();
      });

      request.addParameter('nombre', TYPES.NVarChar, nombre);
      request.addParameter('apellido', TYPES.NVarChar, apellido);
      request.addParameter('correo', TYPES.NVarChar, email);
      request.addParameter('empresa', TYPES.NVarChar, empresa);
      request.addParameter('pais', TYPES.NVarChar, pais);
      request.addParameter('mensaje', TYPES.NVarChar, mensaje);
      request.addParameter('boletin', TYPES.Bit, boletin === true);

      connection.execSql(request);
    });

    connection.connect();
  });
};
