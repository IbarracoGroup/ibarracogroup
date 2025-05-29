// app/api/form/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { Connection, Request as SqlRequest, TYPES } from 'tedious'

// Configuración de tu base de datos Azure SQL
const config = {
  server: 'tu-servidor.database.windows.net',
  authentication: {
    type: 'default',
    options: {
      userName: 'tu-usuario',
      password: 'tu-password',
    },
  },
  options: {
    database: 'tu-database',
    encrypt: true,
  },
}

export async function POST(req: NextRequest) {
  const { nombre, email, mensaje } = await req.json()

  return new Promise((resolve) => {
    const connection = new Connection(config)

    connection.on('connect', (err) => {
      if (err) {
        console.error('Error de conexión SQL:', err)
        return resolve(NextResponse.json({ ok: false, error: err.message }))
      }

      const sql = `
        INSERT INTO Formularios (Nombre, Email, Mensaje)
        VALUES (@nombre, @correo, @mensaje)
      `

      const request = new SqlRequest(sql, (err) => {
        if (err) {
          console.error('Error ejecutando SQL:', err)
          return resolve(NextResponse.json({ ok: false, error: err.message }))
        }

        resolve(NextResponse.json({ ok: true }))
      })

      request.addParameter('nombre', TYPES.NVarChar, nombre)
      request.addParameter('correo', TYPES.NVarChar, email)
      request.addParameter('mensaje', TYPES.NVarChar, mensaje)

      connection.execSql(request)
    })

    connection.connect()
  })
}