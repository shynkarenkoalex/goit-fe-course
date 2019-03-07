import { PRIORITY_TYPES } from './constants';

const shortid = require('shortid');

export default class Notepad {
  constructor(notes = []) {
    this._notes = notes;
  }
  get notes() {
    return this._notes;
  }
  findNoteById(id) {
    for (const note of this._notes) {
      if (note.id === id) {
        return note;
      }
    }
  }
  saveNote(title, body) {
    const newItem = {
      id: shortid.generate(),
      title: title,
      body: body,
      priority: Notepad.getPriorityName(),
    };

    this._notes.push(newItem);

    return newItem;
  }
  deleteNote(id) {
    this._notes = this._notes.filter(item => item.id !== id);
  }
  updateNoteContent(id, updatedContent) {
    const note = this.findNoteById(id);
    const updateNoteContent = Object.keys(updatedContent);

    for (const key of updateNoteContent) {
      note[key] = updatedContent[key];
    }
  }
  updateNotePriority(id, priority) {
    const note = this.findNoteById(id);

    if (!note) {
      return;
    }
    note.priority = priority;
  }
  filterNotesByQuery(query) {
    const filteredNote = [];
    for (let i = 0; i < this._notes.length; i += 1) {
      const { title, body } = this._notes[i];
      const note = `${title} ${body}`;
      const resultNote = note.toLowerCase().includes(query.toLowerCase());
      if (resultNote) {
        filteredNote.push(this._notes[i]);
      }
    }
    return filteredNote;
  }
  filterNotesByPriority(priority) {
    const filteredNotesOnPriority = [];
    const notes = this.notes;

    for (const note of notes) {
      if (note.priority === priority) {
        filteredNotesOnPriority.push(note);
      }
    }
    return filteredNotesOnPriority;
  }

  static getPriorityName(priorityId) {
    const valuesPriorityType = Object.values(PRIORITY_TYPES);

    if (valuesPriorityType.includes(priorityId)) {
      return Notepad.PRIORITIES[priorityId].name;
    }

    return PRIORITY_TYPES.LOW;
  }
}
