const express = require('express')
const router = require('./src/routes/api')
const cookieParser = require('cookie-parser')
const path = require('path')


// Security middleware 
const rateLimit = require('express-rate-limit')
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize')
const hpp = require('hpp')
const cors = require('cors')


// Database Connection
const connectDB = require('./src/utility/Database/ConnectDB')

// Create express app
const app = express();


// Apply Middlewares in correct order

// 1. Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2. Cookie Parser (if needed for auth)
app.use(cookieParser());


// 3. Security Middleware
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(mongoSanitize());  // Make sure it's after body parser


// 4. Rate Limiter
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100,
    message: 'Too many requests, please try again later.',
});
app.use(limiter);


// 5. Connect to DB
connectDB()


// 6. Routes
app.use('/api', router);


// Export the app
module.exports = app;











// database connect 