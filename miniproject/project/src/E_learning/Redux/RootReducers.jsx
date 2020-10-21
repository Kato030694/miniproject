import {combineReducers} from 'redux';
import CoursesReducer from './StoreReducers';

const RootReducers = combineReducers({
    courses: CoursesReducer,
})
export default RootReducers;