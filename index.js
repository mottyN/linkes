const express = require('express');
const app = express();

const PORT = 3000;

// כתובת הקבוצה שלך בווצאפ (החלף בכתובת שלך)
const whatsappGroupLink = 'https://chat.whatsapp.com/Ecxmzq9SjWlJmKws4qM9OX?mode=ac_t';

app.get('*', (req, res) => {
  res.redirect(whatsappGroupLink);
});

app.listen(PORT, () => {
  console.log(`השרת פועל על http://localhost:${PORT} ומפנה אוטומטית לקבוצת וואצאפ`);
});
