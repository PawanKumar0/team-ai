import { z } from 'zod';

export const UserSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  subscriptionTier: z.enum(['free', 'pro', 'enterprise']),
});

export type User = z.infer<typeof UserSchema>;

export const HealthStatusSchema = z.object({
  status: z.string(),
  service: z.string(),
});

export type HealthStatus = z.infer<typeof HealthStatusSchema>;
