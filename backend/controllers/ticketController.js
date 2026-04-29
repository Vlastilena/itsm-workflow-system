const ticketService = require("../services/ticketService");

class TicketController {
  create(req, res) {
    const { title, description, priority, createdBy } = req.body;

    const ticket = ticketService.createTicket(
      title,
      description,
      priority,
      createdBy
    );

    res.json(ticket);
  }

  getAll(req, res) {
    res.json(ticketService.getAllTickets());
  }

  update(req, res) {
    const { id, status } = req.body;

    const ticket = ticketService.updateStatus(id, status);
    res.json(ticket);
  }
}

module.exports = new TicketController();
