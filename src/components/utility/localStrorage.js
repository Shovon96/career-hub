const getStoredJobApplication = () => {
    const storedJobApplication = localStorage.getItem('job-applications');
    if(storedJobApplication){
        return JSON.parse(storedJobApplication)
    }else{
        return []
    }
}



const saveApplicationJob = id => {
    const storedJobApplication = getStoredJobApplication();
    const isExists = storedJobApplication.find(jobId => jobId === id);
    if(!isExists){
        storedJobApplication.push(id);
        localStorage.setItem('job-applications', JSON.stringify(storedJobApplication))
    }
}

export {getStoredJobApplication, saveApplicationJob}