#FROM node:18
#
#WORKDIR /app
#COPY package*.json ./
#
#COPY --from=builder /app/next.config.mjs ./
#COPY --from=builder /app/next.config.mjs ./next.config.mjs
#COPY . .
#RUN npm install
#COPY . .
#EXPOSE 3000
#CMD npm run dev

#FROM node:18-alpine as base
#RUN apk add --no-cache g++ make py3-pip libc6-compat
#WORKDIR /app
#COPY package*.json ./
#EXPOSE 3000

#FROM base as builder
#WORKDIR /app
#RUN npm i
#COPY . .
#RUN npm run build
#
#
#FROM base as production
#WORKDIR /app
#
#ENV NODE_ENV=production
#RUN #npm ci

#RUN #addgroup -g 1001 -S nodejs
#RUN #adduser -S nextjs -u 1001
#USER nextjs


#COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
#COPY --from=builder /app/next.config.mjs ./
#COPY --from=builder /app/next.config.mjs ./next.config.mjs
#COPY --from=builder /app/node_modules ./node_modules
#COPY --from=builder /app/package.json ./package.json
#COPY --from=builder /app/public ./public
#
#CMD npm start
#
#FROM node:latest
#
##FROM base as dev
#ENV NODE_ENV=development
#COPY . .
#RUN npm install
#CMD npm run dev





#FROM node:latest
#RUN mkdir -p /app
#WORKDIR /app
#COPY . .
#RUN npm install
#RUN npm run build
##RM node_modules
#EXPOSE 3000
#CMD ["npm", "start"]


FROM node:lts as dependencies

WORKDIR /quanticfiles
COPY package.json ./
#COPY package.json pnpm-lock.yaml ./
#COPY package.json package-lock.json ./
RUN npm install -g pnpm
RUN pnpm install

FROM node:lts as builder
WORKDIR /quanticfiles
COPY . .
COPY --from=dependencies /quanticfiles/node_modules ./node_modules
RUN npm install -g pnpm
RUN pnpm run build

FROM node:lts as runner
RUN npm install -g pnpm

WORKDIR /quanticfiles
ENV NODE_ENV production

COPY --from=builder /quanticfiles/public ./public
COPY --from=builder /quanticfiles/package.json ./package.json
COPY --from=builder /quanticfiles/.next ./.next
COPY --from=builder /quanticfiles/next.config.mjs ./
COPY --from=builder /quanticfiles/next.config.mjs ./next.config.mjs


COPY --from=builder /quanticfiles/node_modules ./node_modules

EXPOSE 3000
CMD ["pnpm", "start"]