const Ticket = require("../models/ticket");

class TicketService {
  constructor() {
    this.tickets = [];
  }

  createTicket(title, description, priority, createdBy) {
    const ticket = new Ticket(
      this.tickets.length + 1,
      title,
      description,
      priority,
      "new",
      createdBy
    );

    // 🔥 Business Rule: auto-assign
    if (priority === "high") {
      ticket.assignedTo = "support-team";
    }

    this.tickets.push(ticket);
    return ticket;
  }

  getAllTickets() {
    return this.tickets;
  }

  updateStatus(id, status) {
    const ticket = this.tickets.find(t => t.id === id);
    if (!ticket) return null;

    ticket.status = status;

    // 🔥 Business Rule: auto-close
    if (status === "resolved") {
      ticket.status = "closed";
    }

    return ticket;
  }
}

module.exports = new TicketService();
