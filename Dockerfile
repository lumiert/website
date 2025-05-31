# Etapa de build
FROM node:20-alpine as build

WORKDIR /app

# Copiar arquivos de configuração
COPY package.json package-lock.json ./

# Instalar dependências com NPM
RUN npm install

# Copiar restante do código-fonte
COPY . .

# Build da aplicação (ajuste o script se necessário)
RUN npm run build

# Etapa de produção
FROM nginx:alpine

# Copiar build da aplicação para o diretório do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# (Opcional) Copiar configuração personalizada do Nginx
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]