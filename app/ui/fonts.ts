import localFont from 'next/font/local'

export const jakartaSans = localFont({
    src: [
        {
            path: "./fonts/PlusJakartaSans-Light.woff2",
            weight:"300",
            style:"normal",
        },
        {
            path: "./fonts/PlusJakartaSans-Regular.woff2",
            weight:"400",
            style:"normal",
        },
        {
            path: "./fonts/PlusJakartaSans-Medium.woff2",
            weight:"500",
            style:"normal"
        },
    ],
    variable: '--font-jakarta'
});

export const poppins = localFont({
    src:[
        {
            path:"./fonts/Poppins-Thin.woff2",
            weight:"100",
            style:"normal"
        },
        {
            path:"./fonts/Poppins-Light.woff2",
            weight:"300",
            style:"normal"
        },
        {
            path:"./fonts/Poppins-Regular.woff2",
            weight:"400",
            style:"normal"
        },
        {
            path:"./fonts/Poppins-Medium.woff2",
            weight:"500",
            style:"normal"
        },
        {
            path:"./fonts/Poppins-Bold.woff2",
            weight:"700",
            style:"normal"
        },
        {
            path:"./fonts/Poppins-Black.woff2",
            weight:"900",
            style:"normal"
        },
    ],
    variable: '--font-poppins'
})


export const roboto = localFont({
    src: [
        {
            path: "./fonts/Roboto-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "./fonts/Roboto-Thin.woff2",
            weight: "100",
            style: "normal",
        },
        {
            path: "./fonts/Roboto-Light.woff2",
            weight: "300",
            style: "normal",
        },
        {
            path: "./fonts/Roboto-Medium.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "./fonts/Roboto-Bold.woff2",
            weight: "700",
            style: "normal",
        },
        {
            path: "./fonts/Roboto-Black.woff2",
            weight: "900",
            style: "normal",
        },
    ],
    variable: '--font-roboto'
});
