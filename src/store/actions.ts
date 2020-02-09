/*
 * action types
 */

export interface Action {
    type: string;

    [ key: string ]: any;
}

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const SET_APPLICATION_THEME = 'SET_APPLICATION_THEME';
export const SET_CURRENT_PART = 'SET_CURRENT_PART';
export const INCREASE_CURRENT_PART = 'INCREASE_CURRENT_PART';
export const DECREASE_CURRENT_PART = 'DECREASE_CURRENT_PART';
export const SET_MAX_PART = 'SET_MAX_PART';
export const INCREASE_MAX_PART = 'INCREASE_MAX_PART';
export const DECREASE_MAX_PART = 'DECREASE_MAX_PART';

/*
 * other constants
 */

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
};

export const ApplicationThemes = {
    CLASSIC: 'Classic',
    CWPM: 'CWPM',
    FINA: 'Fina',
};

/*
 * action creators
 */

export function addTodo(text: string): Action {
    return { type: ADD_TODO, text } as Action
}

export function toggleTodo(index: number): Action {
    return { type: TOGGLE_TODO, index } as Action
}

export function setVisibilityFilter(filter: string): Action {
    return { type: SET_VISIBILITY_FILTER, filter } as Action
}

export function setApplicationTheme(theme: string): Action {
    return { type: SET_APPLICATION_THEME, theme } as Action
}

export function setCurrentPart(part: number): Action {
    return {
        type: SET_CURRENT_PART,
        part
    } as Action
}

export function increaseCurrentPart(): Action {
    return {
        type: INCREASE_CURRENT_PART
    } as Action
}

export function decreaseCurrentPart(): Action {
    return {
        type: DECREASE_CURRENT_PART
    } as Action
}

export function setMaxPart(part: number): Action {
    return {
        type: SET_MAX_PART,
        part
    } as Action
}

export function increaseMaxPart(): Action {
    return {
        type: INCREASE_MAX_PART
    } as Action
}

export function decreaseMaxPart(): Action {
    return {
        type: DECREASE_MAX_PART
    } as Action
}