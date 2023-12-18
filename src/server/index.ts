import jwt, { VerifyErrors, JwtPayload } from 'jsonwebtoken'; // Import types for jwt
import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { userRouter } from './routes/user';
import { PrismaClient } from '@prisma/client';
import { router } from './trpc';
import cors from "cors"

const prismaDummy = new PrismaClient();

export const appRouter = router({
    user: userRouter
});


// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;

const server = createHTTPServer({
    router: appRouter,
    middleware: cors() ,
    createContext(opts) 
    {

        // WE WILL HAVE TO USE THIS FOR JWT VERIFICATION

        // let authHeader = opts.req.headers["authorization"]

        // if(authHeader)
        // {
        //     let token = authHeader.split(" ")[1]
        //     console.log(token)

        //     return new Promise<{prisma: {User: typeof prismaDummy.user} ; username : string;}>((resolve) =>
        //     {
        //         jwt.verify(token , "SECRET" , (err , data) =>
        //         {
        //             if(data)
        //             {   
        //                 resolve({ username : data as string , prisma : {User : prismaDummy.user}})
        //             }
        //         })
        //     }) 
        // }
        // else
        // {
        //     return {
        //         prisma : {User: prismaDummy.user}
        //     }
        // }
    
        return{
            prisma: { User : prismaDummy.user}
        } 
        // Delete this return once you un comment jwt.verify promisify function
    }

  });
  
  server.listen(3000);