const { defineConfig } = require('@prisma/config');

module.exports = defineConfig({
  schema: './prisma/schema.prisma',
  db: {
    url: process.env.DATABASE_URL,
  },
});
