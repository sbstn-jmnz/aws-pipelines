# Imagen base oficial de Node
FROM public.ecr.aws/docker/library/node:18-alpine

# Crear directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install --production

# Copiar el resto del código
COPY . .

# Exponer puerto (usado por ECS/Elastic Beanstalk)
EXPOSE 3000

# Comando de arranque
CMD ["npm", "start"]
