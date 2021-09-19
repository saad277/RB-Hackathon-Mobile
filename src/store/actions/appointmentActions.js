import AsyncStorage from "@react-native-async-storage/async-storage";
import Snackbar from "react-native-snackbar";

import { httpRequest, postConfig, getError, getConfig } from "../../utils/requestUtils";

export const getAppointments = (token) => (dispatch, getState) => {
    let user = getState().auth.user;

    const { Token, _id } = user;

    return httpRequest
        .get(`/appointments/${_id}`, getConfig(Token))
        .then((res) => {
            console.log("resss====>", res);

            return Promise.resolve(res.data);
        })
        .catch((err) => {
            return Promise.reject(err);
        });
};
