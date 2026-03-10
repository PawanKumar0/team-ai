import { describe, it, expect } from 'vitest';
import { UserSchema, SessionSchema, HealthStatusSchema } from './index';

describe('Shared Zod Schemas', () => {
  describe('UserSchema', () => {
    it('should validate a valid user', () => {
      const validUser = {
        id: 'user-123',
        email: 'test@example.com',
        subscriptionTier: 'pro',
      };
      expect(UserSchema.parse(validUser)).toEqual(validUser);
    });

    it('should reject invalid emails', () => {
      const invalidUser = {
        id: 'user-123',
        email: 'invalid-email',
        subscriptionTier: 'pro',
      };
      expect(() => UserSchema.parse(invalidUser)).toThrow();
    });

    it('should reject invalid subscription tiers', () => {
      const invalidUser = {
        id: 'user-123',
        email: 'test@example.com',
        subscriptionTier: 'unknown',
      };
      expect(() => UserSchema.parse(invalidUser)).toThrow();
    });
  });

  describe('SessionSchema', () => {
    it('should validate a valid session', () => {
      const validSession = {
        id: 'session-123',
        userId: 'user-123',
        expiresAt: new Date().toISOString(),
      };
      expect(SessionSchema.parse(validSession)).toEqual(validSession);
    });

    it('should reject invalid date formats', () => {
      const invalidSession = {
        id: 'session-123',
        userId: 'user-123',
        expiresAt: 'not-a-date',
      };
      expect(() => SessionSchema.parse(invalidSession)).toThrow();
    });
  });

  describe('HealthStatusSchema', () => {
    it('should validate a valid health status', () => {
      const validHealth = {
        status: 'ok',
        service: 'api-gateway',
        timestamp: new Date().toISOString(),
      };
      expect(HealthStatusSchema.parse(validHealth)).toEqual(validHealth);
    });

    it('should reject missing fields', () => {
      const invalidHealth = {
        status: 'ok',
        service: 'api-gateway',
      };
      expect(() => HealthStatusSchema.parse(invalidHealth)).toThrow();
    });
  });
});
