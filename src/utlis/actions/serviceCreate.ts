"use server";

export const createService = async (data: FormData) => {
    const serviceData = Object.fromEntries(data.entries());
    console.log(serviceData);

    const res = await fetch("/service", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(serviceData)
    });

    const blogInfo = await res.json();
    return blogInfo;
};


