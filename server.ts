import { serveFile } from "https://deno.land/std@0.212.0/http/file_server.ts"


Deno.serve(async (request: Request): Promise<Response> => {
   let { pathname } = new URL(request.url);
   if (pathname === '/') pathname = '/index.html';
   console.log('Serving: ', pathname)
   const resp = await serveFile(request, '.' + pathname )
   return resp 
})