export async function getAllPatients(){
    const username = process.env.API_USERNAME;
    const password = process.env.API_PASSWORD;
    // Encode credentials
  const authHeader = "Basic " + Buffer.from(`${username}:${password}`).toString("base64");
    try{
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL, {
        method:"GET",
        headers: {
            Authorization: authHeader,
        },
        cache: "no-store", // ensures fresh data in Next.js 13/14 app router
        });
        if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        console.log('data',data);
        return data;
    }
    catch(error)
    {
        console.error(error);
        return null;
    }
}