FROM node:20-alpine as build

WORKDIR /app

# Copiar arquivos de configuração
COPY package.json ./
COPY pnpm-lock.yaml ./

# Instalar dependências
RUN npm install -g pnpm
RUN pnpm install

# Copiar código fonte
COPY . .

# Construir aplicação
RUN pnpm run build

# Estágio de produção
FROM nginx:alpine

# Copiar build da aplicação para o diretório do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copiar configuração personalizada do Nginx (opcional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expor porta 80
EXPOSE 80

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
