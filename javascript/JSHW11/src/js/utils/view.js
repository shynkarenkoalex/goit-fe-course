import createlistItem from '../../templates/list-items.hbs';
import Notepad from './notepad-model';

// Referens
//=============================================================================
export const refs = {
  list: document.querySelector('.note-list'),
  editor: document.querySelector('.note-editor'),
  filter: document.querySelector('.search-form'),
  openEditorModale: document.querySelector('button[data-action="open-editor"]'),
};

//=============================================================================

// Rendering and Adds list item
//=============================================================================
export const renderNoteList = (listRef, notes) => {
  // const listItems = notes.map(item => createlistItem(item)).join('');
  const listItems = notes.map(item => {
    const newItem = { ...item };
    newItem.priority = Notepad.getPriorityName(newItem.priority);
    return createlistItem(newItem);
  });

  listRef.innerHTML = '';
  listRef.insertAdjacentHTML('beforeend', listItems.join(''));
};

export const addListItem = (listRef, item) => {
  const newItem = { ...item };
  newItem.priority = Notepad.getPriorityName(newItem.priority);
  const createItem = createlistItem(newItem);

  listRef.insertAdjacentHTML('afterbegin', createItem);
};
//=============================================================================
