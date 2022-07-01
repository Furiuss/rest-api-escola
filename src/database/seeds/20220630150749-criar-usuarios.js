const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [
      {
        nome: 'marcia',
        email: 'marcia@email.com',
        password_hash: await bcrypt.hash('marcia123', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'pedro',
        email: 'pedro@email.com',
        password_hash: await bcrypt.hash('pedro123', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'batista',
        email: 'batista@email.com',
        password_hash: await bcrypt.hash('batista123', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),
  down() {},
};
