# short-url

An app to generate shortened URL

Planned Architecture
1. Uses Docker Compose for container orchestration 
2. React.js frontend client
3. Nginx to serve frontend files, and loadbalance requests to multiple Node.js servers
4. Multiple instance of Node.js servers work as producers to receive client request, and add task to message queue
5. A single Node.js server work as consumers to handle tasks in message queue
6. Uses RabbitMQ as message queue
7. Uses MongoDB to store generated short URLs
8. Uses Redis in front of MongoDB to accelerate service speed
