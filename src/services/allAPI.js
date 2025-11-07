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

// history api call

export const addHistoryAPI = async (resumeHistory)=>{
    return await commonAPI("POST",`${serverURL}/history`,resumeHistory)
}

// view history api call

export const viewHistoryAPI = async ()=>{
    return await commonAPI("GET",`${serverURL}/history`,{})
}

// remove histroy api call

export const removeHistoryAPI = async (id)=>{
    return await commonAPI("DELETE",`${serverURL}/history/${id}`,{})
}