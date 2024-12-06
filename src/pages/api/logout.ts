import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ cookies }) => {
    cookies.delete('authenticated', {
        path: "/",
        httpOnly: true
    });

    return new Response(JSON.stringify({
        message: "Se cerró sessión exitosamente."
    }), { status: 200 });
}

export const GET: APIRoute = async ({ cookies, redirect }) => {
    cookies.delete('authenticated', {
        path: "/",
        httpOnly: true
    });

    return redirect("/", 302);
}