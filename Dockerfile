FROM node:alpine AS builder

#Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY prisma ./prisma/

# Install app dependencies
RUN npm ci
# Required if not done in postinstall
# RUN npx prisma generate

COPY . .

RUN npm run build

FROM node:alpine

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/pages ./pages

EXPOSE 3000
CMD [ "npm", "run", "start:prod" ]
