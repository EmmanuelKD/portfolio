import { APIS, BASE_ROUT } from "../constants"
import axios from "axios"
import { CapabilityDataType, MailData, MyInfoDataType, ProjectDataType, WorkExperienceDataType } from "../types";

// getProjects
// getCapabilities
// getMyInfo
// getWorkExperience


export async function getMyInfo() {

    const { data } = await axios({
        url: `${BASE_ROUT}/${APIS.portfolio}/getMyInfo`,
        method: "GET"
    })
    return data[0] as MyInfoDataType;
}
export async function getProjects() {

    const { data } = await axios({
        url: `${BASE_ROUT}/${APIS.portfolio}/getProjects`,
        method: "GET"
    })
    return data as ProjectDataType[];
}
export async function getCapabilities() {

    const { data } = await axios({
        url: `${BASE_ROUT}/${APIS.portfolio}/getCapabilities`,
        method: "GET"
    })
    return data as CapabilityDataType[];
}
export async function getWorkExperience() {

    const { data } = await axios({
        url: `${BASE_ROUT}/${APIS.portfolio}/getWorkExperience`,
        method: "GET"
    })
    return data as WorkExperienceDataType;
}

export async function sendAvailabilityRequestMail(mailData: MailData) {

    const { data } = await axios({
        url: `${BASE_ROUT}/${APIS.portfolio}/sendAvailabilityRequestMail`,
        method: "POST",
        data: mailData
    })
    return data.message;
}
