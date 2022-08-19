# Stage 1
FROM node:alpine AS build-app
WORKDIR /app
COPY . .
RUN npm ci && node ./node_modules/@angular/cli/bin/ng build --output-hashing none --single-bundle true

# Stage 2
FROM nginx:alpine
COPY --from=build-app /app/dist/content-b /usr/share/nginx/html
EXPOSE 80
