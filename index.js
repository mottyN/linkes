const express = require('express');
const app = express();

// הפורט צריך להיות מה־ENV כדי לעבוד בענן כמו Render
const PORT = process.env.PORT || 3000;

// כתובת הקבוצה שלך בווצאפ
const whatsappGroupLink = 'https://chat.whatsapp.com/Ecxmzq9SjWlJmKws4qM9OX?mode=ac_t';

// כל בקשה תופנה לכתובת הוואצאפ
app.get('*', (req, res) => {
  res.redirect(whatsappGroupLink);
});

app.listen(PORT, () => {
  console.log(`השרת פועל על פורט ${PORT} ומפנה לקבוצת וואצאפ`);
});
