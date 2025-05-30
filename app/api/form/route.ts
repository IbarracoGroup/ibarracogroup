// app/api/form/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { Connection, Request as SqlRequest, TYPES } from 'tedious'

const config = {
  server: 'ibarracogroupserver.database.windows.net',
  authentication: {
    type: 'default',
    options: {
      userName: 'ibarraco_admin', // 👈 tu usuario real
      password: 'Ib@rrac0SQL2025_2345!', // 👈 tu contraseña real
    },
  },
  options: {
    database: 'ibarracogroupdb',
    encrypt: true,
  },
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  const { nombre, apellido, email, empresa, pais, mensaje, boletin } = await req.json()

  return new Promise((resolve) => {
    const connection = new Connection(config)

    connection.on('connect', (err) => {
      if (err) {
        console.error('❌ Conexión fallida:', err)
        resolve(NextResponse.json({ ok: false, error: err.message }, { status: 500 }))
        return
      }

      const sql = `
        INSERT INTO Formularios (Nombre, Apellido, Email, Empresa, Pais, Mensaje, Boletin)
        VALUES (@nombre, @apellido, @correo, @empresa, @pais, @mensaje, @boletin)
      `

      const request = new SqlRequest(sql, (err) => {
        if (err) {
          console.error('❌ Error SQL:', err)
          resolve(NextResponse.json({ ok: false, error: err.message }, { status: 500 }))
        } else {
          resolve(NextResponse.json({ ok: true }, { status: 200 }))
        }
        connection.close()
      })

      request.addParameter('nombre', TYPES.NVarChar, nombre)
      request.addParameter('apellido', TYPES.NVarChar, apellido)
      request.addParameter('correo', TYPES.NVarChar, email)
      request.addParameter('empresa', TYPES.NVarChar, empresa)
      request.addParameter('pais', TYPES.NVarChar, pais)
      request.addParameter('mensaje', TYPES.NVarChar, mensaje)
      request.addParameter('boletin', TYPES.Bit, boletin === true)

      connection.execSql(request)
    })

    connection.connect()
  })
}
