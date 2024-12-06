import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ cookies }) => {

    if (!cookies.has('authenticated')) {
        return new Response(null, {
            status: 401
        });
    }

    return new Response(JSON.stringify({}), { status: 200 });
}