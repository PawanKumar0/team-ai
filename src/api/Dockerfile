FROM node:20-alpine

RUN npm install -g pnpm

WORKDIR /app

COPY package.json pnpm-workspace.yaml pnpm-lock.yaml* ./
COPY src/api/package.json ./src/api/
COPY src/packages/types/package.json ./src/packages/types/

RUN pnpm install

COPY . .

EXPOSE 3001

CMD ["pnpm", "--filter", "@team-ai/api", "dev"]
