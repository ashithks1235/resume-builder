import commonAPI from "./commonAPI"
import serverURL from "./serverURL"

// add resume api call

export const addResumeAPI = async (resumeDetails)=>{
    return await commonAPI("POST",`${serverURL}/resume`,resumeDetails)
}

// view resume api call

export const viewResumeAPI = async (id)=>{
    return await commonAPI("GET",`${serverURL}/resume/${id}`,{})
}

//update api call

export const editResumeAPI = async (id,resumeDetails)=>{
    return await commonAPI("PUT",`${serverURL}/resume/${id}`,resumeDetails)
}