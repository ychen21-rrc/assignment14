FROM node:20-alpine AS build
WORKDIR /chen_yaohuang_final_site
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Run step (serve static build on 5575)
FROM node:20-alpine
WORKDIR /chen_yaohuang_final_site
RUN npm install -g serve
COPY --from=build /chen_yaohuang_final_site/build ./build
EXPOSE 5575
CMD ["serve", "-s", "build", "-l", "5575"]