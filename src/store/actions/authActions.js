import AsyncStorage from "@react-native-async-storage/async-storage";
import Snackbar from "react-native-snackbar";

import { httpRequest, postConfig, getError, getConfig } from "../../utils/requestUtils";

export const login = (payload) => (dispatch) => {
    return httpRequest
        .post("/login", payload, postConfig)
        .then(async (res) => {
            //  let token = res.data.Token;
            //  await AsyncStorage.setItem('token', token);
            //  return dispatch(getMe(token) as any);
        })
        .catch((err) => {
            Snackbar.show({
                text: getError(err),
                duration: Snackbar.LENGTH_SHORT,
            });
            return Promise.reject(err);
        });
};

export const signUp = (payload) => () => {
    return httpRequest
        .post("/signUp", payload, postConfig)
        .then((res) => {
            // Snackbar.show({
            //     text: res.data.Message,
            //     duration: Snackbar.LENGTH_SHORT,
            // });
            return Promise.resolve(res.data);
        })
        .catch((err) => {
            Snackbar.show({
                text: getError(err),
                duration: Snackbar.LENGTH_SHORT,
            });
            return Promise.reject(err);
        });
};
