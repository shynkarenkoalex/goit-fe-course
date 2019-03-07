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
  saveNote(title, body) {
    const newItem = {
      id: generateUniqueId(),
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

Notepad.PRIORITIES = {
  0: { id: 0, value: 0, name: 'Low' },
  1: { id: 1, value: 1, name: 'Normal' },
  2: { id: 2, value: 2, name: 'High' },
};

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

// Referens
const refs = {
  list: document.querySelector('.note-list'),
  editor: document.querySelector('.note-editor'),
  filter: document.querySelector('.search-form'),
};

// Function create list all
const createListItem = note => {
  const listItem = document.createElement('li');
  listItem.classList.add('note-list__item');
  listItem.dataset.id = note.id;

  const listBox = document.createElement('div');
  listBox.classList.add('note');

  listItem.appendChild(listBox);
  listBox.append(createNoteContent(note), createNoteFooter(note));

  return listItem;
};

// Для div.note__content
const createNoteContent = ({ title, body }) => {
  const noteContent = document.createElement('div');
  noteContent.classList.add('note__content');

  const noteTitle = document.createElement('h2');
  noteTitle.classList.add('note__title');
  noteTitle.textContent = title;

  const noteBody = document.createElement('p');
  noteBody.classList.add('note__body');
  noteBody.textContent = body;

  noteContent.append(noteTitle, noteBody);

  return noteContent;
};

// Для footer.note__footer
const createNoteFooter = note => {
  const footer = document.createElement('footer');
  footer.classList.add('note__footer');

  const sectionPriority = document.createElement('section');
  sectionPriority.classList.add('note__section');

  const decreaseButton = actionsButton();
  decreaseButton.dataset.actions = NOTE_ACTIONS.DECREASE_PRIORITY;

  const increaseButton = actionsButton();
  increaseButton.dataset.actions = NOTE_ACTIONS.INCREASE_PRIORITY;

  const iconMore = icon();
  iconMore.textContent = 'expand_more';

  const iconLess = icon();
  iconLess.textContent = 'expand_less';

  const priority = document.createElement('span');
  priority.classList.add('note__priority');
  priority.textContent = `Priority: ${Notepad.getPriorityName(note.priority)}`;

  const sectionActions = document.createElement('section');
  sectionActions.classList.add('note__section');

  const editNoteButton = actionsButton();
  editNoteButton.dataset.actions = NOTE_ACTIONS.EDIT;

  const iconEdit = icon();
  iconEdit.textContent = ICON_TYPES.EDIT;

  const deleteNoteButton = actionsButton();
  deleteNoteButton.dataset.actions = NOTE_ACTIONS.DELETE;

  const iconDelete = icon();
  iconDelete.textContent = ICON_TYPES.DELETE;

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

  return button;
};

// Function create icon
const icon = () => {
  const icon = document.createElement('i');
  icon.classList.add('material-icons');
  icon.classList.add('action__icon');

  return icon;
};

const renderNoteList = (listRef, notes) => {
  const listItems = notes.map(item => createListItem(item));

  listRef.innerHTML = '';
  listRef.append(...listItems);
};
renderNoteList(refs.list, item.notes);

// Function Generate Unique ID
const generateUniqueId = () =>
  Math.random()
    .toString(36)
    .substring(2, 15) +
  Math.random()
    .toString(36)
    .substring(2, 15);

const addListItem = (listRef, item) => {
  const createItem = createListItem(item);

  listRef.append(createItem);
};

// Handlers
const handleEditorSubmit = event => {
  event.preventDefault(); // Действия браузера по умолчанию

  const [title, body] = event.currentTarget.elements;
  const titleValue = title.value;
  const bodyValue = body.value;

  const checkForEmptinessForm =
    titleValue.length === 0 || bodyValue.length === 0;

  if (checkForEmptinessForm) {
    return alert('Необходимо заполнить все поля!');
  }
  const savedItem = item.saveNote(titleValue, bodyValue);

  addListItem(refs.list, savedItem);
  event.currentTarget.reset();
  console.log(item._notes);
};

const handleFilterNotes = event => {
  const filterNotes = item.filterNotesByQuery(event.target.value);

  renderNoteList(refs.list, filterNotes);
};

const handleDeleteNote = ({ target }) => {
  if (target.nodeName !== 'I') {
    return;
  }

  const parentButton = target.closest('.action');
  const actions = parentButton.dataset.actions;

  switch (actions) {
    case NOTE_ACTIONS.DELETE:
      removeListItem(target);
      break;
  }
};

const removeListItem = element => {
  const parentListItem = element.closest('.note-list__item');
  const currentId = parentListItem.dataset.id;

  item.deleteNote(Number(currentId));
  parentListItem.remove();
};

// Listeners
refs.editor.addEventListener('submit', handleEditorSubmit);
refs.filter.addEventListener('input', handleFilterNotes);
refs.list.addEventListener('click', handleDeleteNote);
