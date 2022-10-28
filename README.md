## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

This is a hometask for a simple phonebook CRUD

### Built With

* NextJs
* Typescript
* MaterialUI
* Graphql
* Apollo
* Prisma
* Postgresql
* Docker

## Getting Started
1. Install NPM packages
   ```sh
   npm install
   ```
2. Setup server (-d: so cli does not get blocked)
   ```sh
   docker compose up -d
   ```
3. Setup DB table via prisma
   ```sh
   npx prisma migrate dev
   ```
4. Run on localhost
   ```sh
   npm run dev
   ```

## Comments
I used Prisma because it is easier to work with in teams, and it creates a schema file from my Graphql files, and uploads them as tables to my Database.

I used PostgreSQL because i am used to MySQL Databases, but PostgreSQL is more effecient and advanced.

<!-- MARKDOWN LINKS & IMAGES -->
[product-screenshot]: images/product.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[Typescript]: https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square
[Typescript-url]: https://nextjs.org/
