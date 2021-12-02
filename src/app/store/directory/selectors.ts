import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DirectoryState } from './reducer';

export const selectFeature = createFeatureSelector<DirectoryState>('directory');
export const selectAllSpecializations = createSelector(selectFeature, ({ allSpecializations }) => allSpecializations);
