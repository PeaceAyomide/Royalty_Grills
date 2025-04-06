/**
 * Email template generator for contact form
 * @param {Object} data - Form data
 * @returns {String} HTML email template
 */
export const generateEmailTemplate = (data) => {
  const { name, email, phone, message } = data;
  
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Message</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f9f9f9; margin: 0; padding: 0;">
  <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); overflow: hidden;">
    <div style="background-color: #FF7300; padding: 20px; text-align: center;">
      <h1 style="color: white; margin: 0; font-size: 24px;">D'Royalty Kitchen</h1>
      <p style="color: white; margin: 5px 0 0; font-size: 16px;">New Contact Message</p>
    </div>
    
    <div style="padding: 30px;">
      <p>You have received a new message from your website contact form.</p>
      
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #eee; width: 30%;"><strong>Name:</strong></td>
          <td style="padding: 12px; border-bottom: 1px solid #eee;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
          <td style="padding: 12px; border-bottom: 1px solid #eee;"><a href="mailto:${email}" style="color: #FF7300;">${email}</a></td>
        </tr>
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td>
          <td style="padding: 12px; border-bottom: 1px solid #eee;">${phone || 'Not provided'}</td>
        </tr>
      </table>
      
      <div style="background-color: #f5f5f5; border-left: 4px solid #FF7300; padding: 15px; margin: 20px 0;">
        <h3 style="margin-top: 0; color: #333;">Message:</h3>
        <p style="margin-bottom: 0; white-space: pre-line;">${message}</p>
      </div>
      
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 14px; color: #777; text-align: center;">
        <p>This email was sent from the contact form on your D'Royalty Kitchen website.</p>
        <p>You can reply directly to this email to respond to ${name}.</p>
      </div>
    </div>
  </div>
</body>
</html>
  `;
};

/**
 * Autoresponse email template generator
 * @param {Object} data - Form data
 * @returns {String} HTML email template for autoresponse
 */
export const generateAutoResponseTemplate = (data) => {
  const { name, message } = data;
  
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank you for contacting D'Royalty Kitchen</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f9f9f9; margin: 0; padding: 0;">
  <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); overflow: hidden;">
    <div style="background-color: #FF7300; padding: 20px; text-align: center;">
      <h1 style="color: white; margin: 0; font-size: 24px;">D'Royalty Kitchen</h1>
      <p style="color: white; margin: 5px 0 0; font-size: 16px;">Thank You for Your Message</p>
    </div>
    
    <div style="padding: 30px;">
      <p>Dear ${name},</p>
      
      <p>Thank you for contacting D'Royalty Kitchen. We have received your message and will get back to you shortly.</p>
      
      <p>Here's a summary of your message:</p>
      
      <div style="background-color: #f5f5f5; border-left: 4px solid #FF7300; padding: 15px; margin: 20px 0;">
        <p style="margin: 0; white-space: pre-line;">${message}</p>
      </div>
      
      <p>If you have any urgent inquiries, please feel free to call us at +234 803 153 7271.</p>
      
      <p>
        Best regards,<br>
        The D'Royalty Kitchen Team
      </p>
      
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #777; text-align: center;">
        <p>Oke Odu, Akure, Ondo State, Nigeria</p>
        <p>This is an automated response. Please do not reply to this email.</p>
      </div>
    </div>
  </div>
</body>
</html>
  `;
};
