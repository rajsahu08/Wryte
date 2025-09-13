const sampleData = [
    {
        title: "Understanding JavaScript Closures",
        description: "Closures are a fundamental concept in JavaScript that allow functions to retain access to their lexical scope even when executed outside of that scope. This article explores how closures work, common use cases such as data privacy and factory functions, and provides practical examples to help you master this powerful feature."
    },
    {
        title: "Node.js Event Loop Explained",
        description: "The Node.js event loop is the backbone of asynchronous programming in Node. In this comprehensive guide, we break down the phases of the event loop, explain how callbacks, promises, and async/await interact with it, and discuss performance implications for building scalable applications."
    },
    {
        title: "Async/Await in Modern JavaScript",
        description: "Async/await syntax has revolutionized asynchronous programming in JavaScript, making code easier to read and maintain. This article covers the basics of async functions, error handling, chaining asynchronous operations, and best practices for using async/await in real-world projects."
    },
    {
        title: "Getting Started with Express.js",
        description: "Express.js is a fast, unopinionated web framework for Node.js. Learn how to set up your first Express server, define routes, serve static files, and use middleware to handle requests and responses. This beginner-friendly tutorial will get you up and running quickly."
    },
    {
        title: "RESTful API Design Best Practices",
        description: "Designing a RESTful API involves more than just creating endpoints. Discover best practices for resource naming, versioning, error handling, authentication, and documentation. Learn how to build APIs that are scalable, maintainable, and easy for clients to consume."
    },
    {
        title: "Introduction to MongoDB",
        description: "MongoDB is a popular NoSQL database that stores data in flexible, JSON-like documents. This article introduces MongoDB's core concepts, CRUD operations, indexing, and aggregation framework, with practical examples for integrating MongoDB into your Node.js applications."
    },
    {
        title: "Mongoose ODM Tutorial",
        description: "Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. Learn how to define schemas, create models, perform validations, and interact with your database using Mongoose's powerful API. Includes tips for managing relationships and optimizing queries."
    },
    {
        title: "Deploying Node.js Apps to Heroku",
        description: "Heroku makes it easy to deploy and scale Node.js applications in the cloud. Follow this step-by-step guide to prepare your app for deployment, set environment variables, manage add-ons, and troubleshoot common issues. Get your project online in minutes!"
    },
    {
        title: "JWT Authentication in Node.js",
        description: "JSON Web Tokens (JWT) are a secure way to handle authentication in modern web applications. This article explains how JWTs work, how to implement login and protected routes in Node.js, and strategies for token storage and renewal to keep your users safe."
    },
    {
        title: "Building a Blog with Express and MongoDB",
        description: "Create a fully functional blog platform using Express.js and MongoDB. Learn how to structure your application, implement CRUD operations for posts, manage user authentication, and add features like comments and tags. Includes code samples and deployment tips."
    },
    {
        title: "Error Handling in Express.js",
        description: "Robust error handling is essential for any web application. Discover how to use Express's error middleware, handle synchronous and asynchronous errors, log issues for debugging, and provide meaningful feedback to users. Learn to build resilient apps that fail gracefully."
    },
    {
        title: "Using EJS for Templating",
        description: "EJS is a simple templating language that lets you generate dynamic HTML pages with embedded JavaScript. This tutorial covers EJS syntax, partials, layouts, and how to pass data from your Express routes to your views for seamless rendering."
    },
    {
        title: "CRUD Operations with Mongoose",
        description: "Master the basics of Create, Read, Update, and Delete (CRUD) operations using Mongoose. Learn how to interact with MongoDB documents, handle validation errors, and optimize your queries for performance. Includes practical examples for each operation."
    },
    {
        title: "Securing Node.js Applications",
        description: "Security is critical for any Node.js application. This article covers common vulnerabilities such as SQL injection, cross-site scripting (XSS), and cross-site request forgery (CSRF), and provides actionable steps to protect your app using best practices and popular libraries."
    },
    {
        title: "Understanding Middleware in Express",
        description: "Middleware functions are the building blocks of Express applications. Learn how middleware works, how to create custom middleware, and how to use built-in middleware for tasks like logging, authentication, and error handling. Includes code samples and use cases."
    },
    {
        title: "File Uploads with Multer",
        description: "Multer is a middleware for handling multipart/form-data, primarily used for uploading files. This guide walks you through setting up Multer, configuring storage options, validating file types, and integrating uploads into your Express routes."
    },
    {
        title: "Pagination in MongoDB",
        description: "Efficient pagination is essential for displaying large datasets. Learn how to implement pagination in MongoDB using skip and limit, optimize queries for performance, and create user-friendly navigation in your web applications."
    },
    {
        title: "Building a REST API with Express",
        description: "Build a robust REST API from scratch using Express.js. This article covers routing, controllers, data validation, error handling, and testing. Learn how to structure your code for scalability and maintainability."
    },
    {
        title: "Connecting to MongoDB Atlas",
        description: "MongoDB Atlas is a cloud-based database service. Learn how to create a cluster, connect your Node.js application, manage users and permissions, and monitor performance using Atlas's powerful dashboard."
    },
    {
        title: "Unit Testing Node.js Applications",
        description: "Unit testing ensures your code works as expected and prevents regressions. Discover how to write tests for your Node.js applications using Jest and Mocha, mock dependencies, and integrate testing into your development workflow."
    },
    {
        title: "Environment Variables in Node.js",
        description: "Environment variables help you manage configuration and secrets securely. Learn how to use dotenv, set up different environments, and avoid hardcoding sensitive information in your Node.js projects."
    },
    {
        title: "Logging in Node.js Applications",
        description: "Effective logging is key to monitoring and debugging your applications. Explore popular logging libraries like Winston and Morgan, set up log levels, and integrate logging with cloud services for centralized monitoring."
    },
    {
        title: "Session Management in Express",
        description: "Sessions allow you to persist user data across requests. This article explains how to implement session management in Express using express-session, configure storage options, and secure sessions against common attacks."
    },
    {
        title: "Building a Simple Chat App",
        description: "Create a real-time chat application using Node.js, Express, and Socket.io. Learn how to manage user connections, broadcast messages, and add features like private chats and message history."
    },
    {
        title: "Introduction to WebSockets",
        description: "WebSockets enable two-way communication between clients and servers. This article covers the basics of WebSocket protocol, how to implement WebSockets in Node.js, and practical use cases for real-time applications."
    },
    {
        title: "Rate Limiting in Express",
        description: "Protect your API endpoints from abuse by implementing rate limiting. Learn how to use express-rate-limit, configure limits, handle blocked requests, and monitor usage patterns to keep your service reliable."
    },
    {
        title: "Data Validation with Joi",
        description: "Joi is a powerful schema description language and data validator for JavaScript. Discover how to define validation schemas, handle errors gracefully, and integrate Joi into your Express routes for robust input validation."
    },
    {
        title: "Sending Emails from Node.js",
        description: "Automate email notifications and transactional messages using Node.js and Nodemailer. Learn how to set up SMTP, create email templates, and handle attachments and errors for reliable email delivery."
    },
    {
        title: "Scheduling Tasks with Node Cron",
        description: "Automate repetitive tasks in your Node.js applications using node-cron. This guide covers scheduling jobs, handling failures, and integrating scheduled tasks with your business logic."
    },
    {
        title: "Building a Portfolio Website",
        description: "Showcase your skills and projects by building a personal portfolio website with Node.js, Express, and MongoDB. Learn how to structure your site, add dynamic content, and deploy it for the world to see."
    }
];

module.exports = sampleData;