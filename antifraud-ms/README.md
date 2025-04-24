# Antifraude Microservice

This is the antifraude microservice of the Node.js microservices project. It is responsible for handling antifraud operations and communicating with the transaction microservice via Kafka.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- TypeScript
- Kafka
- PostgreSQL (for transaction microservice)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd nodejs-microservices-project/antifraude-ms
   ```

2. Install dependencies:
   ```
   npm install
   ```

### Running the Microservice

To start the antifraude microservice, run:
```
npm start
```

### API Endpoints

The antifraude microservice exposes various endpoints for antifraud operations. Refer to the routes defined in the `src/routes/index.ts` file for more details.

### Communication with Transaction Microservice

This microservice communicates with the transaction microservice using Kafka. Ensure that Kafka is running and properly configured.

### Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

### License

This project is licensed under the MIT License. See the LICENSE file for details.