FROM node:20-alpine AS builder
WORKDIR /app
RUN npm install -g pnpm
COPY package.json .
COPY pnpm-lock.yaml .

RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY .env.prod .env.prod

EXPOSE 3000
CMD ["node", "dist/main.js"]
