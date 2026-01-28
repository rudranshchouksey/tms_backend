import app from "./app.js";
import { CONFIG } from "./config/index.js";
import { createApolloServer } from "./graphql/index.js";

const startServer = async () => {

 const server = await createApolloServer();
 server.applyMiddleware({ app });

 app.listen(CONFIG.server.port, () => {
   console.log(
    `🚀 Server running on http://localhost:${CONFIG.server.port}/graphql`
   );
 });
};

startServer();