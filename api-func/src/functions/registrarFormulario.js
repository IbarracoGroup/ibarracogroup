const { app } = require('@azure/functions');
const { Connection, Request, TYPES } = require('tedious');

app.http('registrarFormulario', {
  methods: ['POST'],
  authLevel: 'anonymous',
  handler: async (req, context) => {
    const { nombre, apellido, email, empresa, pais, mensaje, boletin } = await req.json();

    const config = {
      server: 'ibarracogroupserver.database.windows.net',
      authentication: {
        type: 'default',
        options: {
          userName: 'ibarraco_admin',
          password: 'Ib@rrac0SQL2025_2345!'
        }
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
          resolve({ status: 500, body: 'Error de conexión a BD: ' + err.message });
          return;
        }

        const sql = `
          INSERT INTO Formularios (Nombre, Apellido, Email, Empresa, Pais, Mensaje, Boletin)
          VALUES (@nombre, @apellido, @correo, @empresa, @pais, @mensaje, @boletin)
        `;

        const request = new Request(sql, (err) => {
          if (err) {
            context.log('❌ Error al insertar:', err);
            resolve({ status: 500, body: 'Error SQL: ' + err.message });
          } else {
            resolve({ status: 200, body: JSON.stringify({ ok: true }) });
          }
          connection.close();
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
  }
});
