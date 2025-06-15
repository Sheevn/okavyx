"use server";

import { z } from "zod";

// Define a schema for the form data using Zod for validation
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
  token: z.string(), // The reCAPTCHA token
});

export async function submitAction(prevState: any, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
    token: formData.get("token"),
  });

  // If validation fails, return the errors
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    // --- reCAPTCHA Verification ---
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const token = validatedFields.data.token;

    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    const recaptchaData = await response.json();

    if (recaptchaData.success && recaptchaData.score >= 0.5) {
      // reCAPTCHA verification successful
      console.log("Form data is valid and reCAPTCHA score is good.");
      console.log("Name:", validatedFields.data.name);
      console.log("Email:", validatedFields.data.email);
      console.log("Message:", validatedFields.data.message);
      
      // Here you would typically send an email or save to a database.
      // For now, we just return a success message.
      return { message: "Message sent successfully!" };

    } else {
      // reCAPTCHA verification failed
      console.error("reCAPTCHA verification failed. Full response:", recaptchaData);
      return { message: "reCAPTCHA verification failed. Please try again." };
    }
  } catch (error) {
    console.error("Error during reCAPTCHA verification:", error);
    return { message: "An unexpected error occurred." };
  }
} 