# Para desarrollo
FROM node:18-alpine

#Directorio de trabajo
WORKDIR /usr/src/app

#Archivos de dependencias
COPY package*.json ./

#Instalacion de dependencias
RUN npm install

#Codigo fuente 
COPY . .

# Este comando se sobreescribirá en el docker-compose
CMD ["npm", "run", "start:dev"]