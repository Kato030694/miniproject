let initialState = {
    courses : [],
    coursesDetail: null
}

const CoursesReducer = (state = initialState, action) =>{
    console.log(action)
    switch(action.type) {
        case 'FETCH_COURSES':{
            state.courses = action.payload;
            // ban copy cua state, de load lai
            return {...state};
        }
        case 'FETCH_COURSE_DETAIL':{
            state.coursesDetail = action.payload;
            return {...state};
        }
        default: return state;
    }

}
export default CoursesReducer;