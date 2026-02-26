'use server';

import { supabase } from '@/lib/supabase/client';
import { resend } from '@/lib/resend';

export async function submitBooking(prevState: any, formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const pickup = formData.get('pickup') as string;
    const dropoff = formData.get('dropoff') as string;
    const datetime = formData.get('datetime') as string;

    try {
        // 1. Save to Supabase
        const { error: dbError } = await supabase
            .from('bookings')
            .insert([
                {
                    full_name: name,
                    email,
                    phone,
                    pickup_location: pickup,
                    dropoff_location: dropoff,
                    booking_datetime: datetime,
                    status: 'pending'
                }
            ]);

        if (dbError) throw dbError;

        // 2. Send Email to Admin
        await resend.emails.send({
            from: 'ItaliaRide <bookings@resend.dev>',
            to: process.env.ADMIN_EMAIL || 'admin@example.com',
            subject: `New Booking Request from ${name}`,
            html: `
                <h2>New Booking Details</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Pickup:</strong> ${pickup}</p>
                <p><strong>Drop-off:</strong> ${dropoff}</p>
                <p><strong>Date & Time:</strong> ${datetime}</p>
            `
        });

        // 3. Send Confirmation Email to Customer
        await resend.emails.send({
            from: 'ItaliaRide <bookings@resend.dev>',
            to: email,
            subject: 'Booking Request Received - ItaliaRide',
            html: `
                <h2>Ciao ${name}!</h2>
                <p>We have received your booking request for a transfer from ${pickup} to ${dropoff}.</p>
                <p>Our team is reviewing your request and will contact you at ${phone} shortly to confirm the details and pricing.</p>
                <p>Thank you for choosing ItaliaRide!</p>
            `
        });

        return {
            success: true,
            message: `Thank you ${name}! Your booking request has been received. A confirmation email has been sent to ${email}.`
        };

    } catch (error: any) {
        console.error('Booking Error:', error);
        return {
            success: false,
            message: "Something went wrong. Please try again or call us directly."
        };
    }
}
