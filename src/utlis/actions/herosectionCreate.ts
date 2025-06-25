"use server";

export const createHero = async (data: FormData) => {
    const heroData = Object.fromEntries(data.entries());
    console.log(heroData);

    const res = await fetch("/hero", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(heroData)
    });

    const blogInfo = await res.json();
    return blogInfo;
};
