# Servicio de Consulta de Saldo

Obtiene el saldo actual de una cuenta.

## Endpoint

```
GET /saldo?tipoCuenta=<string>&nroCuenta=<string>
```

Ejemplo de solicitud:

```bash
curl "http://localhost:3001/saldo?tipoCuenta=AHO&nroCuenta=1234"
```

Configura las variables `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASS` y `DB_NAME` para conectar con MySQL.
