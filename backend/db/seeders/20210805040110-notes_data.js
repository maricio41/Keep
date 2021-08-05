"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Notes",
      [
        {
          title: "Lunch date",
          content: "Remember to pick up flowers!",
          isPinned: false,
          userId: 1,
        },
        {
          title: "Bob's Birthday",
          content: "1.Pick up cake 2.grab hotdogs 3.Buy a gift",
          isPinned: false,
          userId: 1,
        },
        {
          title: "Motivation",
          content:
            "Graduation is in 2 weeks. The journey of a thousand miles begins with a sing step",
          isPinned: false,
          userId: 1,
        },
        {
          title: "Note to self",
          content: "Do not eat the yellow snow",
          isPinned: false,
          userId: 1,
        },
        {
          title: "Kecia's Prescription",
          content: "Go by the pharmacy for Kecia",
          isPinned: false,
          userId: 1,
        },
        {
          title: "AT&T Fiber",
          content: "Look into fiber optic availabilty in your area.",
          isPinned: false,
          userId: 1,
        },
        {
          title: "Junior",
          content:
            "Junior wanted you to bring more grapes home from the grocery store",
          isPinned: false,
          userId: 1,
        },
        {
          title: "Minimum salary goal",
          content: "Georgia: $65k, New York: $90k, Florida/NCarolina: $75k",
          isPinned: false,
          userId: 1,
        },
        {
          title: "Career Quest",
          content:
            "Attend all hiring sessions to get a feel for whats out there and to see what you would be interested in.",
          isPinned: false,
          userId: 1,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Notes", null, {});
  },
};
