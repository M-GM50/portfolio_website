import { sendEmail } from "@netlify/emails";

const handler = async (event) => {
  const payload = JSON.parse(event.body).payload;
  console.log(`Recieved a submission: ${payload.email}`);

  await sendEmail({
    from: process.env.EMAIL_ADDRESS,
    to: payload.email,
    subject: "Thanks for getting in touch",
    template: "contact",
    parameters: {
      name: payload.name,
    },
  });

  return {
    statusCode: 200,
    body: JSON.stringify("Subscribe email sent!"),
  };
};

export { handler };
