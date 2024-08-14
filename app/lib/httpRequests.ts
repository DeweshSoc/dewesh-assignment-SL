const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmJjY2Y3YWQwNmFiYjlmZWEzZjY4YTciLCJlbWFpbCI6Im1lZ2hhQHlvcG1haWwuY29tIiwiaWF0IjoxNzIzNjQ5OTQwLCJleHAiOjE3MjM4MjI3NDB9.jlUJ3yQqR_Rcrih4MjJsLEbv_1YP320GnIAb8NaDAts";

export const sendPostRequest = (path:string, options:RequestInit) : Promise<any>=> {

    return new Promise(async(resolve, reject) => {
        try{
            const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}${path}`;
            const res = await fetch(url, {
                ...options,
                method:"POST",
                headers: {
                    Accept: "*/*",
                    "Content-Type": "application/json",
                },
            });
            if(!res.ok){
                const resBodyStream = await res.json();
                const msg = resBodyStream.message;
                throw new Error(`Error ${res.status} - ${msg || res.statusText}`);

            } 
            const  response = res.json();
            resolve(response);
        }catch(err){
            console.log(err);
            reject(err);
        }
    })

};
export const sendPostRequestAuth = (path:string, options:RequestInit) : Promise<any>=> {

    return new Promise(async(resolve, reject) => {
        try{
            const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}${path}`;
            const res = await fetch(url, {
                ...options,
                method:"POST",
                headers: {
                    Accept: "*/*",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            if(!res.ok){
                const resBodyStream = await res.json();
                const msg = resBodyStream.message;
                throw new Error(`Error ${res.status} - ${msg || res.statusText}`);

            } 
            const  response = res.json();
            resolve(response);
        }catch(err){
            console.log(err);
            reject(err);
        }
    })

};

export const sendGetRequest = (path:string, options:RequestInit) : Promise<any>=> {

    return new Promise(async(resolve, reject) => {
        try{
            const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}${path}`;
            const res = await fetch(url, {
                ...options,
                method:'GET',
                headers: {
                    Accept: "*/*",
                    "Content-Type": "application/json",
                },
            });
            if(!res.ok){
                const resBodyStream = await res.json();
                const msg = resBodyStream.message;
                throw new Error(`Error ${res.status} - ${msg || res.statusText}`);

            } 
            const  response = res.json();
            resolve(response);
        }catch(err){
            console.log(err);
            reject(err);
        }
    })

};


export const sendGetRequestAuth = (path:string, options:RequestInit) : Promise<any>=> {

    return new Promise(async(resolve, reject) => {
        try{
            const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}${path}`;
            const res = await fetch(url, {
                ...options,
                method:'GET',
                headers: {
                    Accept: "*/*",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            if(!res.ok){
                const resBodyStream = await res.json();
                const msg = resBodyStream.message;
                throw new Error(`Error ${res.status} - ${msg || res.statusText}`);

            } 
            const  response = res.json();
            resolve(response);
        }catch(err){
            console.log(err);
            reject(err);
        }
    })

};
