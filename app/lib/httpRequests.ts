export const sendPostRequest = (path:string, options:Record<string,any>) : Promise<any>=> {

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
export const sendPostRequestAuth = (path:string, options: Record<string,any>) : Promise<any>=> {

    return new Promise(async(resolve, reject) => {
        try{
            const {token, body} = options;
            if(!token){
                throw new Error("No Token");
            }
            const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}${path}`;
            const res = await fetch(url, {
                body,
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

export const sendGetRequest = (path:string, options:Record<string,any>) : Promise<any>=> {

    return new Promise(async(resolve, reject) => {
        try{
            const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}${path}`;
            const res = await fetch(url, {
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


export const sendGetRequestAuth = (path:string, options:Record<string,any>) : Promise<any>=> {

    return new Promise(async(resolve, reject) => {
        try{
            const { token, body } = options;
            const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}${path}`;
            const res = await fetch(url, {
                body,
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
