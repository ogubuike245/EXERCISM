/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @returns {Visitor} the visitor that was created
 */
export function createVisitor(name, age, ticketId) {
  // return { name: name, age: age, ticketId: ticketId };
  return Object({ name: name, age: age, ticketId: ticketId });
}

/**
 * Revokes a ticket for a visitor.
 *
 * @param {Visitor} visitor the visitor with an active ticket
 * @returns {Visitor} the visitor without a ticket
 */

const visitor = {
  name: "Verena Nardi",
  age: 45,
  ticketId: "H32AZ123",
};
export function revokeTicket(visitor) {
  if (visitor.hasOwnProperty("ticketId")) {
    visitor.ticketId = null;
  }
  return visitor;
}

console.log(revokeTicket(visitor));

/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */

const tickets = {
  "0H2AZ123": null,
  "23LA9T41": "Verena Nardi",
};

// export function ticketStatus(tickets, ticketId) {
//   switch (tickets[ticketId]) {
//     case undefined:
//       return "unknown ticket id";
//     case null:
//       return "not sold";
//     default:
//       return `sold to ${tickets[ticketId]}`;
//   }

// }

export function ticketStatus(tickets, ticketId) {
  if (tickets[ticketId] === undefined) {
    return "unknown ticket id";
  } else if (tickets[ticketId] === null) {
    return "not sold";
  } else {
    return `sold to ${tickets[ticketId]}`;
  }
}

console.log(ticketStatus(tickets, "23LA9T45"));
console.log(ticketStatus(tickets, "0H2AZ123"));
console.log(ticketStatus(tickets, "23LA9T41"));
/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function simpleTicketStatus(tickets, ticketId) {
  if (tickets[ticketId] === undefined || tickets[ticketId] === null) {
    return "invalid ticket !!!";
  } else {
    return `${tickets[ticketId]}`;
  }
}

/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * @param {VisitorWithGtc} visitor
 * @returns {string | undefined} version
 */

const visitorNew = {
  name: "Verena Nardi",
  age: 45,
  ticketId: "H32AZ123",
  gtc: {
    signed: true,
    version: "2.1",
  },
};

const visitorOld = {
  name: "Verena Nardi",
  age: 45,
  ticketId: "H32AZ123",
};

export function gtcVersion(visitor) {
  return visitor?.gtc?.version;
}

console.log(gtcVersion(visitorNew));

console.log(gtcVersion(visitorOld));
