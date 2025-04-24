# Node.js Microservices Project

This project consists of two microservices: `antifraud-ms` and `transaction-ms`. These microservices communicate with each other using Kafka and are built with Node.js, Express.js, and TypeScript. The `transaction-ms` microservice connects to a PostgreSQL database using the Prisma ORM.

## Microservices Overview

### antifraud-ms
- **Purpose**: Handles antifraud operations.
- **Technologies**: Node.js, Express.js, TypeScript, Kafka.
- **Key Files**:
  - `src/app.ts`: Entry point for the antifraude microservice.
  - `src/utils/broker/*`: Manages Kafka communication.
  - `src/services/antifraud.service.ts`: Handles microservice operations.
  - `src/types/index.ts`: Defines types used in the antifraude microservice.

### transaction-ms
- **Purpose**: Manages transaction operations and interacts with the database.
- **Technologies**: Node.js, Express.js, TypeScript, Kafka, PostgreSQL, Prisma.
- **Key Files**:
  - `src/app.ts`: Entry point for the transaction microservice.
  - `src/repository/transaction.repository.ts`: Handles database communication with services.
  - `src/routes/index.ts`: Sets up the routes for the transaction microservice.
  - `src/utils/broker/*`: Manages Kafka communication.
  - `src/services/transaction.service.ts`: Handles microservice operations.
  - `src/types/index.ts`: Defines types used in the transaction microservice.
  - `prisma/schema.prisma`: Defines the database schema for the transaction microservice.

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd app-nodejs-codechallenge
   ```

2. **Install dependencies**:
   For each microservice, navigate to the respective directory and run:
   ```
   npm install
   ```

3. **Set up the database**:
   Ensure PostgreSQL is running and configure the database connection in the `transaction-ms` microservice.

4. **Run the microservices**:
   Use Docker Compose to start the services:
   ```
   docker-compose up
   ```

## Architecture Overview

The project is designed with a microservices architecture, allowing for scalability and independent deployment of each service. The antifraud microservice focuses on fraud detection, while the transaction microservice manages transactions and database interactions. Communication between the services is handled through Kafka, ensuring reliable message delivery.

## License

This project is licensed under the MIT License.