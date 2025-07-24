const http = require('http');

const PORT = process.env.PORT || 3000;

const whatsappGroupLink = encodeURI('https://chat.whatsapp.com/Ecxmzq9SjWlJmKws4qM9OX');

const server = http.createServer((req, res) => {
  res.writeHead(302, {
    'Location': whatsappGroupLink,
    'Content-Type': 'text/plain'
  });
  res.end('מועבר לקבוצת הוואצאפ...');
});

server.listen(PORT, () => {
  console.log(`השרת פועל על פורט ${PORT} ומפנה לקבוצת וואצאפ`);
});
