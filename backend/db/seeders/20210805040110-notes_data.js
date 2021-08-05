'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Notes', [
      {title: "Lunch date", content: "Remember to pick up flowers!", isPinned: false, userId: 1}
      {title: "Bob's Birthday", content: "1.Pick up cake 2.grab hotdogs 3.Buy a gift", isPinned: false, userId: 1}
      {title: "Motivation", content: "Graduation is in 2 weeks. The journey of a thousand miles begins with a sing step", isPinned: false, userId: 1}
      {title: "Note to self", content: "Do not eat the yellow snow", isPinned: false, userId: 1}
      {title: "Lunch date", content: "Remember to pick up flowers!", isPinned: false, userId: 1}
      {title: "Lunch date", content: "Remember to pick up flowers!", isPinned: false, userId: 1}
      {title: "Lunch date", content: "Remember to pick up flowers!", isPinned: false, userId: 1}
      {title: "Lunch date", content: "Remember to pick up flowers!", isPinned: false, userId: 1}
      {title: "Lunch date", content: "Remember to pick up flowers!", isPinned: false, userId: 1}

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
