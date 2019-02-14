import {
    FETCHING_STORIES_START,
    FETCHING_STORIES_SUCCESS,
    FETCHING_STORIES_FAILURE,
    CREATE_STORY_START,
    CREATE_STORY_SUCCESS,
    CREATE_STORY_FAILURE,
    DELETE_STORY_START,
    DELETE_STORY_SUCCESS,
    DELETE_STORY_FAILURE,
    UPDATE_STORY_START,
    UPDATE_STORY_SUCCESS,
    UPDATE_STORY_FAILURE,
    FETCH_MY_STORIES_START,
    FETCH_MY_STORIES_SUCCESS,
    FETCH_MY_STORIES_FAILURE
} from '../actions/'

const initialState = {
    stories: [],
    myStories: [],
    updatingData: {
        title: '',
        country: '',
        story: '',
        description: '',
    },
    isFetchingStories: false,
    isFetchingStory: false,
    isAddingStory: false,
    isDeletingStory: false,
    isUpdatingStory: false,
    isFetchingMyStories: false,
    error: ''
}

export const storyReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCHING_STORIES_START:
            return{
                ...state,
                isFetchingStories: true,
                error: ''
            }
        case FETCHING_STORIES_SUCCESS:
            return{
                ...state,
                isFetchingStories: false,
                stories: action.payload,
                error: ''
            }
        case FETCHING_STORIES_FAILURE:
            return{
                ...state,
                isFetchingStories: false,
                error: action.payload
            }
        case CREATE_STORY_START:
            return{
                ...state,
                isAddingStory: true,
                error: ''
            }
        case CREATE_STORY_SUCCESS:
            return{
                ...state,
                stories: action.payload,
                isAddingStory: false,
                error: ''
            }
        case CREATE_STORY_FAILURE:
            return{
                ...state,
                isAddingStory: false,
                error: ''
            }
        case DELETE_STORY_START:
            return{
                ...state,
                isDeletingStory: true,
                error: ''
            }
        case DELETE_STORY_SUCCESS:
            return{
                ...state,
                stories: action.payload,
                isDeletingStory: false,
                error: ''
            }
        case DELETE_STORY_FAILURE:
            return{
                ...state,
                isDeletingStory: false,
                error: action.payload
            }
        case UPDATE_STORY_START:
            return{
                ...state,
                updatingData: action.payload,
                isUpdatingStory: true,
                error: ''
            }
        case UPDATE_STORY_SUCCESS:
            return{
                ...state,
                stories: action.payload,
                updatingData: '',
                isUpdatingStory: false,
                error: ''
            }
        case UPDATE_STORY_FAILURE:
            return{
                ...state,
                updatingData: '',
                isUpdatingStory: false,
                error: action.payload
            }
        case FETCH_MY_STORIES_START:
            return{
                ...state,
                isFetchingMyStories: true,
                error: ''
            }
        case FETCH_MY_STORIES_SUCCESS:
            return{
                ...state,
                myStories: action.payload,
                isFetchingMyStories: false,
                error: ''
            }
        case FETCH_MY_STORIES_FAILURE:
            return{
                ...state,
                isFetchingMyStories: false,
                error: action.payload
            }
        default:
            return state
    }
}