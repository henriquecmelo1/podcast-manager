import * as http from 'http';
import { getAllEpisodes, getFilteredEpisodes } from './controllers/podcasts-controller';

const port = process.env.PORT;

const server = http.createServer(async (request: http.IncomingMessage, response: http.ServerResponse)=>{

    const [baseUrl, query] = request.url?.split("?") || [];
    console.log(`Request received: ${request.method} ${baseUrl} with query: ${query}`);

    if (request.method === 'GET' && baseUrl === "/api/list") {
        await getAllEpisodes(request, response);
    }
    if (request.method === 'GET' && baseUrl === "/api/filter") {
        await getFilteredEpisodes(request, response);
    }
})

server.listen(port, () =>{
    console.log(`servidor iniciado na porta ${port}`)
})