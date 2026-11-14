const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Permite que el frontend alojado en otro dominio consulte esta API.
app.use(cors());

app.get("/test", (_req, res) => {
  res.status(200).json({
    success: true,
    status: 200,
    message: "API funcionando correctamente",
    data: {
      estudiante: "Alex Mátzar y Neftalí Andrade", // Reemplazar por el nombre del estudiante.
      carne: "231394 y 231419", // Reemplazar por el carné del estudiante.
      curso: "Despliegue web",
      campus: "UVG Campus Altiplano",
      tecnologia: "Node.js + Express",
      plataforma: "Render"
    },
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`API disponible en el puerto ${PORT}`);
});
