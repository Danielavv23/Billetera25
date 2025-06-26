# Servicio de Retiro

Deduce fondos de una cuenta si el saldo es suficiente.

## Endpoint

```
POST /retiro
Content-Type: application/json
{
  "tipoCuenta": "<string>",
  "nroCuenta": "<string>",
  "monto": <number>
}
```

Ejemplo de solicitud:

```bash
curl -X POST "http://localhost:3002/retiro" \
  -H 'Content-Type: application/json' \
  -d '{"tipoCuenta":"AHO","nroCuenta":"1234","monto":50}'
```

Configura `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASS` y `DB_NAME` para conectar con la base de datos.
