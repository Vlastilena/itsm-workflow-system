class Ticket {
  constructor(id, title, description, priority, status, createdBy) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.priority = priority; // low | medium | high
    this.status = status; // new | in_progress | resolved | closed
    this.createdBy = createdBy;
    this.assignedTo = null;
    this.createdAt = new Date();
  }
}

module.exports = Ticket;
