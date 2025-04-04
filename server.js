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
  // Pošli zpět HTML odpověď s klikatelným odkazem
  res.send(`
    <!DOCTYPE html>
    <html lang="cs">
    <head>
        <meta charset="UTF-8">
        <title>Moje API</title>
        <style>
            body { font-family: sans-serif; padding: 20px; }
            a { color: blue; }
        </style>
    </head>
    <body>
        <h1>Server běží!</h1>
        <p>Zkus kliknout na: <a href="/api/pozdrav">/api/pozdrav</a></p>
    </body>
    </html>
  `);
});

// Spusť server a poslouchej na daném portu
app.listen(port, () => {
  console.log(`Server běží na http://localhost:${port}`);
});