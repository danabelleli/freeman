const URL = "https://api.emailjs.com/api/v1.0/email/send";

export default async function sendEmail(email) {
  try {
    const res = await fetch(`${URL}`, {
      method: "POST",
      body: JSON.stringify(email),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.log("error", err);
  }
}
