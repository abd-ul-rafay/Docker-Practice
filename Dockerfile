# Base image (or use ubuntu and install node)
FROM node

# Copy files
# COPY <src> <dest>
COPY . .

RUN npm install

ENTRYPOINT [ "node", "index.js" ]
