const express = require('express'); // Importuj framework Express
const app = express(); // Vytvoř instanci Express aplikace
const port = process.env.PORT || 3000; // Port, na kterém server poběží (Vercel nastaví PORT)

// Definuj cestu (route) pro GET požadavek na /api/pozdrav
app.get('/api/pozdrav', (req, res) => {
  // Pošli zpět JSON odpověď
  res.json({ message: 'Ahoj z mého prvního API!' });
});

// Definuj základní cestu (route) pro GET požadavek na /
app.get('/', (req, res) => {
  res.send('Server běží! Zkus /api/pozdrav');
});

// Spusť server a poslouchej na daném portu
app.listen(port, () => {
  console.log(`Server běží na http://localhost:${port}`);
});