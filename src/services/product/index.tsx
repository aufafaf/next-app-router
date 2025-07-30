export const getData = async (url: string) => {
    // const res = await fetch("https://fakestoreapi.com/products");
    const res = await fetch(url, {
        cache: "force-cache",
        next: {
            // revalidate: 30,
            tags: ["products"],
        },
    });

    if(!res.ok){
        throw new Error("Failed fetch to data")
    }

    return res.json();
}