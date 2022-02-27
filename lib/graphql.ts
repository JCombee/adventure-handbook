const graphql = async function (query: string) {
    // @ts-ignore
    const res = await fetch(process.env.GRAPHQL_URL, {
        method: 'POST',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({query})
    })
    return await res.json();
};

export default graphql;
