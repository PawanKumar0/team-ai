import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { HealthStatusSchema } from '@team-ai/types';

const app = express();
const port = process.env.PORT || 3001;

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  const healthStatus = {
    status: 'ok',
    service: 'api-gateway',
    timestamp: new Date().toISOString(),
  };

  // Validate response using the schema
  HealthStatusSchema.parse(healthStatus);

  res.json(healthStatus);
});

app.listen(port, () => {
  console.log(`API Gateway listening on port ${port}`);
});
