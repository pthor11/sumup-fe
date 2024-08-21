# sumup-fe

install: npm i

build: 
    npx tsc
    npx webpack

run    
    npx ts-node src/server.ts