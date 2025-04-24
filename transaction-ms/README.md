# Transaction Microservice

This is the transaction microservice of the Node.js microservices project. It is responsible for handling transaction-related operations and communicating with the antifraud microservice via Kafka.

## Features

- Connects to a PostgreSQL database using Prisma ORM.
- Implements Kafka messaging for communication with other microservices.
- Provides RESTful API endpoints for transaction operations.

## Getting Started

### Prerequisites

- Node.js
- PostgreSQL
- Docker (for running Kafka)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd nodejs-microservices-project/transaction-ms
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up the database:
   - Update the database connection details in the `prisma/schema.prisma` file.
   - Run migrations:
     ```
     npx prisma migrate dev
     ```

### Running the Microservice

To start the transaction microservice, run:
```
npm run start
```

### API Documentation

Refer to the API documentation for details on available endpoints and their usage.

### Communication with Antifraud Microservice

This microservice communicates with the antifraud microservice using Kafka. Ensure that Kafka is running and properly configured.

## License

This project is licensed under the MIT License.