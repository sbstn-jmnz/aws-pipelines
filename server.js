// Cargar dependencias
const express = require('express');
const app = express();

// Puerto configurable vía env (AWS lo hace automáticamente)
const PORT = process.env.PORT || 3000;

// Endpoint raíz
app.get('/', (req, res) => {
  res.send('🚀 Aplicación desplegada automáticamente con AWS CodePipeline + CodeBuild desde GitHub');
});

// Endpoint de health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

// Arrancar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
