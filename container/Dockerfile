# Stage 1
FROM node:alpine AS build-app
WORKDIR /app
COPY . .
RUN npm ci && node ./node_modules/@angular/cli/bin/ng build

# Stage 2
FROM nginx:alpine
COPY --from=build-app /app/dist/container /usr/share/nginx/html
EXPOSE 80
