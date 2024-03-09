//import { serveFile } from "https://deno.land/std@0.212.0/http/file_server.ts"
import * as mod from "@std/http/file_server";

Deno.serve(async (request: Request): Promise<Response> => {
   let { pathname } = new URL(request.url);
   if (pathname === '/') pathname = '/index.html';
   console.log('Serving: ', pathname)
   const resp = await mod.serveFile(request, '.' + pathname )
   return resp 
})