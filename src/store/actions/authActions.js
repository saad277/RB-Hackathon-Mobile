import AsyncStorage from "@react-native-async-storage/async-storage";
import Snackbar from "react-native-snackbar";

import { httpRequest, postConfig, getError, getConfig } from "../../utils/requestUtils";

export const ME_SUCCESS = "ME_SUCCESS";
export const LOG_OUT = "LOG_OUT";

export const login = (payload) => (dispatch) => {
    return httpRequest
        .post("/api/user/login", payload, postConfig)
        .then(async (res) => {
            console.log(res);
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
        .post("/api/users/user", payload, postConfig)
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

export const getMe = (token) => (dispatch) => {
    return httpRequest
        .get(`/api/user/me/${token}`, getConfig(token))
        .then((res) => {
            return Promise.resolve(res.data);
        })
        .catch((err) => {
            Snackbar.show({
                text: getError(err),
                duration: Snackbar.LENGTH_SHORT,
            });

            dispatch(logout());
            return Promise.reject(err);
        });
};

export const logout = () => async () => {
    await AsyncStorage.removeItem("token");
};
