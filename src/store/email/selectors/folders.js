import get from 'lodash/get';
import {selectedFolderId} from './application';
import {createSelector} from 'reselect/lib/index';

export const explodedItems = state => get(state.email, 'folders.explodedItems');

export const getSelectedFolder = createSelector(
  explodedItems,
  selectedFolderId,
  (resolvedExplodedItems, resolvedSelectedFolderId) => resolvedExplodedItems[resolvedSelectedFolderId]
);
