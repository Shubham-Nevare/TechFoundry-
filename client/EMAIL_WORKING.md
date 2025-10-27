# Email Configuration - Working Setup ✅

## Current Configuration

The contact form is configured to send emails to `contact@developous.com` using Zoho Mail.

### Working Settings:
- **SMTP Host**: `smtp.zoho.in`
- **Port**: `587` (TLS)
- **Security**: TLS
- **From Email**: As configured in `.env`
- **To Email**: `contact@developous.com`

### Environment Variables Required:
```env
EMAIL_USER=contact@developous.com
EMAIL_PASSWORD=your-zoho-password
```

## How It Works

1. When a user submits the contact form
2. An email is sent to `contact@developous.com` with:
   - Contact information (name, email, phone, company)
   - Project details (type, budget, timeline)
   - Project description
3. An auto-reply is sent to the user confirming their submission

## Files Involved

- **`lib/email.js`** - Email sending functions
- **`app/api/contact/route.js`** - API endpoint for contact form
- **`app/contact/page.jsx`** - Contact form UI

## Notes

- The configuration uses `smtp.zoho.in` (not `smtp.zoho.com`) for compatibility
- SMTP must be enabled in Zoho Mail settings
- Email is sent via TLS on port 587

