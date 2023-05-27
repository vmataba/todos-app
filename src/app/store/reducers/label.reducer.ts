import {Label} from "../models/label.model";
import {SystemError} from "../models/system-error.model";
import {getStoredState} from "../selectors";
import {createReducer, on} from "@ngrx/store";
import {
  addFail,
  addSuccess,
  deleteSuccess,
  load,
  loadFail,
  loadSuccess,
  removeActive,
  setActive,
  updateFail,
  updateSuccess
} from "../actions/label.action";

export interface LabelsState {
  loading: boolean
  loaded: boolean
  labels: Label[],
  error?: SystemError,
  activeLabel?: Label
}

const initialState: LabelsState = getStoredState('todos.labels', {
  loading: false,
  loaded: false,
  labels: [],
  error: null
})

export const labelsReducer = createReducer(initialState,
  on(load, state => ({...state, loading: true, loaded: false, error: undefined})),
  on(loadSuccess, (state, {labels}) => {
    let activeLabel = state.activeLabel
    let newActiveLabel = labels.filter(label => label.id == activeLabel?.id)?.at(0)
    if (newActiveLabel) {
      activeLabel = newActiveLabel
    }
    return {
      ...state,
      loading: false,
      loaded: true,
      labels,
      error: undefined,
      activeLabel
    }
  }),
  on(loadFail, (state, {error}) => ({
    ...state,
    loading: false,
    loaded: false,
    error,
    labels: []
  })),
  on(addSuccess, (state, {label}) => ({
    ...state, loading: false, loaded: false, labels: [
      ...state.labels,
      label
    ],
    error: undefined
  })),
  on(addFail, (state, {error}) => ({
    ...state,
    error,
    loaded: false,
    loading: false
  })),
  on(updateSuccess, (state, {label}) => {
    let activeLabel = state.activeLabel
    if (activeLabel?.id == label.id) {
      activeLabel = label
    }
    return {
      ...state,
      loaded: false,
      loading: false,
      labels: [
        ...state.labels.filter(existingLabel => existingLabel.id != label.id),
        label
      ],
      activeLabel,
      error: undefined
    }
  }),
  on(updateFail, (state, {error}) => ({
    ...state,
    error,
    loaded: false,
    loading: false
  })),
  on(deleteSuccess, (state, {id}) => {
    let activeLabel = state.activeLabel
    if (activeLabel?.id == id) {
      activeLabel = undefined
    }
    return {
      ...state,
      loaded: false,
      loading: false,
      labels: [
        ...state.labels.filter(existingLabel => existingLabel.id != id)
      ],
      error: undefined,
      activeLabel
    }
  }),
  on(setActive, (state, {id}) => ({
    ...state,
    activeLabel: state.labels.filter(label => label.id == id)?.at(0)
  })),
  on(removeActive, (state) => ({
    ...state,
    activeLabel: undefined
  }))
)
