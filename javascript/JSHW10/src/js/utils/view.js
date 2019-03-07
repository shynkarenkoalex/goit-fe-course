import { ICON_TYPES, NOTE_ACTIONS } from './constants';
import Notepad from './notepad-model';

// Referens
export const refs = {
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

export const renderNoteList = (listRef, notes) => {
  const listItems = notes.map(item => createListItem(item));

  listRef.innerHTML = '';
  listRef.append(...listItems);
};

export const addListItem = (listRef, item) => {
  const createItem = createListItem(item);

  listRef.append(createItem);
};
