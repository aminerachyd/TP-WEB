const express = require("express");
const mongoose = require("mongoose");

// Constants
const { mongoURI } = require("./config/keys");
const PORT = process.env.PORT || 5000;

/**
 * Fonction pour lancer un serveur express
 */
const startServer = async (port) => {
  // Init express app
  const app = express();

  // Middlewares
  app.use(express.json());

  // Routes
  app.use("/api/items", require("./routes/api/item"));

  try {
    // Connect to MongoDB
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("MongoDB connnected...");

    // Start the server
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer(PORT);
