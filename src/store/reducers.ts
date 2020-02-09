import { combineReducers } from 'redux';
import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    VisibilityFilters,
    Action, SET_CURRENT_PART, INCREASE_CURRENT_PART, DECREASE_CURRENT_PART, SET_APPLICATION_THEME, ApplicationThemes,
} from './actions';
import { decreaseCurrentPart, increaseCurrentPart, setCurrentPart } from './mutations';

interface Todo {
    text: string;
    completed: boolean;
}

interface Game {
    parts: GameParts;
}

interface GameParts {
    maxParts: number;
    currentPart: number;
}

const gameDefault: Game = {
    parts: {
        maxParts: 5,
        currentPart: 3,
    }
};

const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action: Action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state
    }
}

function applicationTheme(state = ApplicationThemes.CLASSIC, action: Action) {
    switch (action.type) {
        case SET_APPLICATION_THEME:
            return action.theme;
        default:
            return state
    }
}

function game(state: Game = gameDefault, action: Action): Game {
    switch (action.type) {
        case SET_CURRENT_PART:
            return setCurrentPart(state, action.part);
        case INCREASE_CURRENT_PART:
            return increaseCurrentPart(state);
        case DECREASE_CURRENT_PART:
            return decreaseCurrentPart(state);
        default:
            return state;
    }
}

function todos(state: Todo[] = [], action: Action): Todo[] {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ];
        case TOGGLE_TODO:
            return state.map((todo: Todo, index: number) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            });
        default:
            return state
    }
}

export const wpScoreApp = combineReducers({
    visibilityFilter,
    todos,
    game,
});