const http = require ('http')

const server = http.createServer((req,res) => {
    const cookies = parseCookies(req);
    const counter = cookies.count ? parseInt(cookies.counter) + 1 : 1;

    res.setHeader('Set-Cookie', `counter=${counter}`); 
    res.writeHead(200,{'Content-Type':'text/plain'});

    res.end(`Nombre de visites: ${counter}`);
})


function parseCookies(req){
    const cookieHeader =req.headers.cookie;
    const cookies ={};

    if(cookieHeader){
        cookieHeader.split(';').forEach(cookie => {
            const parts = cookie.split('=');
            cookie[parts[0].trim()] = parts[1].trim();
        });
    }
    return cookies;
}
const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Le serveur est sur le port ${PORT}`);
})