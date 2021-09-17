import axios from "axios";

import { apiUrl, EC2Url } from "../Config";
import { store } from "../store";

export const httpRequest = axios.create({
    baseURL: apiUrl,
});

export const ec2Request = axios.create({
    baseURL: EC2Url,
});

export const postConfig = {
    headers: {
        "Content-Type": "application/json",
    },
};

export const mediaConfig = {
    headers: {
        "Content-Type": "multipart/form-data",
    },
};

export const getConfig = (token) => {
    return {
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
    };
};

export const getError = (error) => {
    return error.response.data.message;
};
