/* src/server.js */
import { createApolloServer } from "./graphql/index.js";

async function startServer() {
  try {
    // This now returns the Express 'app'
    const app = await createApolloServer(); 

    const PORT = process.env.PORT || 4000;

    app.listen(PORT, () => {
      console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
}

startServer();