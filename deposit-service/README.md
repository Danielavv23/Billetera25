# Servicio de Depósito

Agrega fondos a una cuenta existente.

## Endpoint

```
POST /deposito
Content-Type: application/json
{
  "tipoCuenta": "<string>",
  "nroCuenta": "<string>",
  "monto": <number>
}
```

Ejemplo de solicitud:

```bash
curl -X POST "http://localhost:3003/deposito" \
  -H 'Content-Type: application/json' \
  -d '{"tipoCuenta":"AHO","nroCuenta":"1234","monto":100}'
```

Las variables de entorno `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASS` y `DB_NAME` deben estar configuradas.
