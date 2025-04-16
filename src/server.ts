// Import the 'express' module along with 'Request' and 'Response' types from express
import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import router from './routes';
import { Client } from '@elastic/elasticsearch';

// Create an Express application
const app = express();


// Specify the port number for the server
const port: number = 3000;

// Express configuration
app.use(cors()); // Enable CORS
app.use(helmet()); // Enable Helmet
app.use(morgan('dev')); // Enable Morgan
app.use(express.json()); // <=== Enable JSON body parser

// Use routes
app.use('/', router);

// Define a route for the root path ('/')
app.get('/', (req: Request, res: Response) => {
  // Send a response to the client
  res.send('Hello, TypeScript + Node.js + Express!!!!');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  // Log a message when the server is successfully running
  console.log(`Server is running on http://localhost:${port}`);
});

// Export Express app
export default app;