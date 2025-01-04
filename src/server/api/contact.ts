import type { RequestHandler } from '@sveltejs/kit';

    export const POST: RequestHandler = async ({ request }) => {
      const data = await request.json();
      // Here you would typically send an email or store the data in a database.
      // For this example, we'll just log the data to the console.
      console.log('Contact form data:', data);
      return new Response(JSON.stringify({ message: 'Message received!' }));
    };
