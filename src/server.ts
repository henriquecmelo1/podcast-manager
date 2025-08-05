import * as http from 'http';
import { getAllEpisodes } from './controllers/podcasts-controller';

const port = process.env.PORT;

const server = http.createServer(async (request: http.IncomingMessage, response: http.ServerResponse)=>{

    if (request.method === 'GET') {
        await getAllEpisodes(request, response);
    }
})

server.listen(port, () =>{
    console.log(`servidor iniciado na porta ${port}`)
})