import { NextResponse } from 'next/server';
import { sendContactEmail, sendAutoReplyEmail } from '@/lib/email';

export async function POST(request) {
    try {
        const formData = await request.json();

        // Validate required fields
        if (!formData.name || !formData.email || !formData.description) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Check if email credentials are configured
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
            console.error('Email credentials not configured');
            return NextResponse.json(
                {
                    error: 'Email service is not configured. Please contact the administrator.',
                    details: 'EMAIL_USER and EMAIL_PASSWORD environment variables are missing.',
                },
                { status: 503 }
            );
        }

        // Send email to contact@developous.com
        await sendContactEmail(formData);

        // Send auto-reply to the user
        try {
            await sendAutoReplyEmail(formData.email, formData.name);
        } catch (error) {
            console.error('Failed to send auto-reply:', error);
            // Don't fail the request if auto-reply fails
        }

        return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Contact form error:', error);

        // Provide more specific error messages
        let errorMessage = 'Failed to send email. Please try again later.';

        if (error.message && error.message.includes('credentials')) {
            errorMessage = 'Email service is not configured properly. Please contact support.';
        } else if (error.responseCode === 535) {
            errorMessage = 'Email authentication failed. Please check your email credentials.';
        }

        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}