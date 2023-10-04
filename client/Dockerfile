FROM amd64/alpine:latest

#Atualizando o cache de pacote alpine
#teste
RUN apk update

#Adicionando pacotes nodeJS e NPM
RUN apk add nodejs npm

# Criando e definindo diretório de trabalho no contêiner
WORKDIR /prod-fullstack

# Copie o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências da aplicação

RUN npm install

# Copie o resto dos arquivos da aplicação
COPY . .

# Construa a aplicação React
RUN npm run build

# Especifica o comando para iniciar o aplicativo quando o contêiner for executado
CMD ["npm", "start"]