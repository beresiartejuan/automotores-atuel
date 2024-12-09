export const response = (message: string, status: number) => {
    return new Response(JSON.stringify({
        message
    }), { status });
}

export const unauthorized = () => {
    return new Response(null, {
        status: 401
    });
}