import { AsyncStorage, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';

import {
    UPDATE_SINGLE_FIELD,
  } from './Constants';

export function updateFields(field, value) {
    return {
        type: UPDATE_SINGLE_FIELD,
        field,
        value
    };
}
  