import {createStore} from 'redux';
import { reducer } from './Redux/Reducers/reducer';

export const store=createStore(reducer);