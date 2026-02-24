FROM node:20-alpine

RUN npm install -g pnpm

WORKDIR /app

COPY package.json pnpm-workspace.yaml pnpm-lock.yaml* ./
COPY src/web/package.json ./src/web/
COPY src/packages/types/package.json ./src/packages/types/

RUN pnpm install

COPY . .

EXPOSE 3000

CMD ["pnpm", "--filter", "@team-ai/web", "dev"]
