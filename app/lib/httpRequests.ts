// let url =
//     "https://gdrvbncjfcqtydfbhfdm.hasura.eu-central-1.nhost.run/v1/graphql";

// let options = {
//     method: "POST",
//     headers: {
//         Accept: "application/json",
//     },
//     body: '{"query":"query GetUserTesting($shopifyUserId: String!, $shopifyOrderId: String!) {\n    obskit_backend_user_testing(where: { shopifyId: { _eq: $shopifyUserId }, shopifyOrderId: { _eq: $shopifyOrderId } }) {\n      shopifyId\n      shopifyOrderId\n    }\n  }\n","variables":{"shopifyUserId":"7770234028147","shopifyOrderId":"5918874894451"}}',
// };

// fetch(url, options)
//     .then((res) => res.json())
//     .then((json) => console.log(json))
//     .catch((err) => console.error("error:" + err));



export const sendPostRequest = (path:string, options:RequestInit) : Promise<any>=> {

    return new Promise(async(resolve, reject) => {
        try{
            const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}${path}`;
            const res = await fetch(url, options);
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
