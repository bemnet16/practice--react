
const useHttp = () => {

    const sendRequest = async (req) => {
        try{
            const res = await fetch(req.url, {
                method: req.method ? req.method : "GET",
                headers: req.headers ? req.headers : {},
                body: req.body ? JSON.stringify(req.body) : null
            })
            const resData =  await res.json()
            return resData
        }catch(e){
            console.log(e.message,"mmm")
        }
    }
    return sendRequest
};

export default useHttp;