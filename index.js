const http = require('http');

const PORT = process.env.PORT || 3000;

const whatsappGroupLink = encodeURI('https://www.kore.co.il/');

const server = http.createServer((req, res) => {
  res.writeHead(301, {
    'Location': whatsappGroupLink,
    'Content-Type': 'text/plain'
  });
  res.end('מועבר לקבוצת הוואצאפ...');
});

server.listen(PORT, () => {
  console.log(`השרת פועל על פורט ${PORT} ומפנה לקבוצת וואצאפ`);
});
