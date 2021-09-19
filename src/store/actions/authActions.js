import AsyncStorage from "@react-native-async-storage/async-storage";
import Snackbar from "react-native-snackbar";

import { httpRequest, postConfig, getError, getConfig } from "../../utils/requestUtils";

export const ME_SUCCESS = "ME_SUCCESS";
export const LOG_OUT = "LOG_OUT";

export const login = (payload) => (dispatch) => {
    return httpRequest
        .post("/users/login", payload, postConfig)
        .then(async (res) => {
            let token = res.data.accessToken;
            await AsyncStorage.setItem("token", token);
            Snackbar.show({
                text: "Logged in",
                duration: Snackbar.LENGTH_SHORT,
            });
            return dispatch(getMe(token));
        })
        .catch((err) => {
            console.log(err);
            Snackbar.show({
                text: getError(err),
                duration: Snackbar.LENGTH_SHORT,
            });
            return Promise.reject(err);
        });
};

export const signUp = (payload) => () => {
    return httpRequest
        .post("/users", payload, postConfig)
        .then((res) => {
            Snackbar.show({
                text: "Profile Created",
                duration: Snackbar.LENGTH_SHORT,
            });
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
        .get(`/users/me`, getConfig(token))
        .then((res) => {
            dispatch({
                type: ME_SUCCESS,
                payload: { Token: token, ...res.data.user },
            });
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

export const logout = () => async (dispatch) => {
    await AsyncStorage.removeItem("token");
    dispatch({
        type: LOG_OUT,
    });

    return Promise.resolve(true);
};
