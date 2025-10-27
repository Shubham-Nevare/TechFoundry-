import nodemailer from 'nodemailer';

// Validate environment variables
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
    console.warn(
        '⚠️  EMAIL_USER and EMAIL_PASSWORD are not set in environment variables.\n' +
        'Please create a .env.local file with your email credentials.\n' +
        'See EMAIL_SETUP.md for instructions.'
    );
}

// Create transporter for sending emails with Zoho
const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.in',
    port: 587,
    secure: false, // Use TLS
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
    tls: {
        rejectUnauthorized: false
    }
});

export async function sendContactEmail(formData) {
    try {
        // Check if email credentials are configured
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
            throw new Error('Email credentials not configured. Please set EMAIL_USER and EMAIL_PASSWORD in .env.local');
        }

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'contact@developous.com',
            subject: `New Contact Form Submission - ${formData.projectType || 'Project Inquiry'}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f7fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #667eea; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Company:</strong> ${formData.company || 'N/A'}</p>
            <p><strong>Phone:</strong> ${formData.phone || 'N/A'}</p>
          </div>

          <div style="background-color: #f7fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #667eea; margin-top: 0;">Project Details</h3>
            <p><strong>Project Type:</strong> ${formData.projectType || 'Not specified'}</p>
            <p><strong>Budget Range:</strong> ${formData.budget || 'Not specified'}</p>
            <p><strong>Timeline:</strong> ${formData.timeline || 'Not specified'}</p>
          </div>

          <div style="background-color: #f7fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #667eea; margin-top: 0;">Project Description</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${formData.description}</p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #e2e8f0;">
            <p style="color: #718096; font-size: 12px;">
              This email was sent from the Developous contact form.
              <br />
              Submitted at: ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      `,
        };

        await transporter.sendMail(mailOptions);
        return { success: true };
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Failed to send email');
    }
}

export async function sendAutoReplyEmail(userEmail, userName) {
    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: userEmail,
            subject: 'Thank You for Contacting Developous',
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #667eea;">Thank You for Contacting Us!</h2>
          
          <p>Dear ${userName},</p>
          
          <p>Thank you for reaching out to <strong>Developous</strong>. We have received your project inquiry and will review it shortly.</p>
          
          <p style="background-color: #f7fafc; padding: 15px; border-left: 4px solid #667eea; margin: 20px 0;">
            <strong>What happens next?</strong><br />
            Our team will review your project details and get back to you within <strong>24 hours</strong> with a detailed response.
          </p>

          <p>If you have any urgent questions, feel free to reach out to us directly:</p>
          <ul>
            <li><strong>Email:</strong> contact@developous.com</li>
            <li><strong>Phone:</strong> +91 72084 75911</li>
            <li><strong>Website:</strong> <a href="https://developous.com" target="_blank" style="color:#667eea; text-decoration:none;">www.developous.com</a></li>
          </ul>

          <p style="margin-top: 30px;">Best regards,<br />
          <strong>The Developous Team</strong></p>

          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;" />

          <div style="font-size: 13px; color: #4a5568;">
            <strong>Developous Technologies Pvt. Ltd.</strong><br />
            <span>Empowering Digital Innovation</span><br />
            <span>Mumbai, Maharashtra, India</span><br />
            <a href="https://developous.com" target="_blank" style="color:#667eea; text-decoration:none;">https://developous.com</a>
          </div>

          <p style="color: #718096; font-size: 12px; margin-top: 30px;">
            This is an automated response. Please do not reply to this email.
          </p>
        </div>
      `,
        };

        await transporter.sendMail(mailOptions);
        return { success: true };
    } catch (error) {
        console.error('Error sending auto-reply email:', error);
        return { success: false };
    }
}