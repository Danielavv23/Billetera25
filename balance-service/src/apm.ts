
import 'dotenv/config'; 
const apm = require('elastic-apm-node');


apm.start({
  serviceName: process.env.ELASTIC_APM_SERVICE_NAME || 'mi-servicio-nest',
  serverUrl: process.env.ELASTIC_APM_SERVER_URL,
  secretToken: process.env.ELASTIC_APM_SECRET_TOKEN,
  environment: process.env.NODE_ENV || 'development',
  captureBody: 'all', 
  logLevel: 'info',
});
