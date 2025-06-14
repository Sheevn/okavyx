"use server";

export async function submitAction(prevState: any, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return "Message sent successfully!";
} 