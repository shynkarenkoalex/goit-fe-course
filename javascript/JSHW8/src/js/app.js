'use strict';

const PRIORITY_TYPES = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};

const ICON_TYPES = {
  EDIT: 'edit',
  DELETE: 'delete',
  ARROW_DOWN: 'expand_more',
  ARROW_UP: 'expand_less',
};

const NOTE_ACTIONS = {
  DELETE: 'delete-note',
  EDIT: 'edit-note',
  INCREASE_PRIORITY: 'increase-priority',
  DECREASE_PRIORITY: 'decrease-priority',
};

class Notepad {
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
  saveNote(note) {
    this._notes.push(note);
  }
  deleteNote(id) {
    for (let i = 0; i < this._notes.length; i += 1) {
      const note = this._notes[i];

      if (note.id === id) {
        return this._notes.splice(i, 1);
      }
    }
  }
  updateNoteContent(id, updatedContent) {
    const note = this.findNoteById(id);
    const updateNoteContent = Object.keys(updatedContent);

    for (const key of updateNoteContent) {
      note[key] = updatedContent[key];
    }

    // Вариант с Деструкторизацией!

    // const { fields, value } = updatedContent;
    // const note = this.findNoteById(id);

    // return note[fields] = value;
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
    const idPriorities = Notepad.PRIORITIES[priorityId].id;

    if (valuesPriorityType.includes(idPriorities)) {
      return Notepad.PRIORITIES[priorityId].name;
    }
  }
}

const initialNotes = [
  {
    id: 1,
    title: 'JavaScript essentials',
    body:
      'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
    priority: PRIORITY_TYPES.HIGH,
  },
  {
    id: 2,
    title: 'Refresh HTML and CSS',
    body:
      'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
    priority: PRIORITY_TYPES.NORMAL,
  },
  {
    id: 3,
    title: 'Get comfy with Frontend frameworks',
    body:
      'First should get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
    priority: PRIORITY_TYPES.NORMAL,
  },
  {
    id: 4,
    title: 'Winter clothes',
    body:
      "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
    priority: PRIORITY_TYPES.LOW,
  },
];

const item = new Notepad(initialNotes);
// console.log(item.notes); // Получение все notes - get-ром

const list = document.querySelector('.note-list');
// console.log(list);

// Function create list all
const createListItem = note => {
  const listItem = document.createElement('li');
  listItem.classList.add('note-list__item');
  listItem.dataset.id = note.id;
  // console.log(listItem);

  const listBox = document.createElement('div');
  listBox.classList.add('note');
  // console.log(listBox);

  listItem.appendChild(listBox);
  listBox.append(createNoteContent(note), createNoteFooter());
  return listItem;
};

// Для div.note__content
const createNoteContent = ({ title, body }) => {
  const noteContent = document.createElement('div');
  noteContent.classList.add('note__content');
  // console.log(noteContent);

  const noteTitle = document.createElement('h2');
  noteTitle.classList.add('note__title');
  noteTitle.textContent = title;
  // console.log(noteTitle);

  const noteBody = document.createElement('p');
  noteBody.classList.add('note__body');
  noteBody.textContent = body;
  // console.log(noteBody);

  noteContent.append(noteTitle, noteBody);

  return noteContent;
};

// Для footer.note__footer
const createNoteFooter = () => {
  const footer = document.createElement('footer');
  footer.classList.add('note__footer');
  // console.log(footer);

  const sectionPriority = document.createElement('section');
  sectionPriority.classList.add('note__section');
  // console.log(sectionPriority);

  const decreaseButton = actionsButton();
  decreaseButton.dataset.actions = NOTE_ACTIONS.DECREASE_PRIORITY;
  // console.log(decreaseButton);

  const increaseButton = actionsButton();
  increaseButton.dataset.actions = NOTE_ACTIONS.INCREASE_PRIORITY;
  // console.log(increaseButton);

  const iconMore = icon();
  iconMore.textContent = 'expand_more';
  // console.log(iconMore);

  const iconLess = icon();
  iconLess.textContent = 'expand_less';
  // console.log(iconLess);

  const priority = document.createElement('span');
  priority.classList.add('note__priority');
  priority.textContent = 'Priority: Low';
  // console.log(priority);

  const sectionActions = document.createElement('section');
  sectionActions.classList.add('note__section');
  // console.log(sectionActions);

  const editNoteButton = actionsButton();
  editNoteButton.dataset.actions = NOTE_ACTIONS.EDIT;
  // console.log(editNoteButton);

  const iconEdit = icon();
  iconEdit.textContent = ICON_TYPES.EDIT;
  // console.log(iconEdit);

  const deleteNoteButton = actionsButton();
  deleteNoteButton.dataset.actions = NOTE_ACTIONS.DELETE;
  // console.log(deleteNoteButton);

  const iconDelete = icon();
  iconDelete.textContent = ICON_TYPES.DELETE;
  // console.log(iconDelete);

  footer.append(sectionPriority, sectionActions);
  sectionPriority.append(decreaseButton, increaseButton, priority);
  decreaseButton.appendChild(iconMore);
  increaseButton.appendChild(iconLess);

  sectionActions.append(editNoteButton, deleteNoteButton);
  editNoteButton.appendChild(iconEdit);
  deleteNoteButton.appendChild(iconDelete);

  return footer;
};

// Function create button
const actionsButton = () => {
  const button = document.createElement('button');
  button.classList.add('action');
  // console.log(button);

  return button;
};

// Function create icon
const icon = () => {
  const icon = document.createElement('i');
  icon.classList.add('material-icons');
  icon.classList.add('action__icon');
  // console.log(icon);

  return icon;
};

const renderNoteList = (listRef, notes) => {
  const listItems = notes.map(item => createListItem(item));

  listRef.append(...listItems);
};

renderNoteList(list, item.notes);
