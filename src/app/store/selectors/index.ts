function findValue(key: string, object: any) {
  return object[key]
}

export const getStoredState = (feature: string, defaultState: any) => {
  const serialState = localStorage.getItem('appState')
  if (serialState == null) {
    return defaultState;
  }
  try {
    const appState = JSON.parse(serialState);
    if (!feature.includes('.')) {
      return appState[feature];
    }
    const featureCollection = feature.split('.')
    let state = appState[featureCollection[0]]

    if (featureCollection.length > 1) {
      for (let count = 1; count < featureCollection.length; count++) {
        state = findValue(featureCollection[count], state)
        if (state == null) {
          return defaultState;
        }
      }
    }
    return state;
  } catch (e) {
    return defaultState
  }
}
