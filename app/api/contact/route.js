// import nodemailer from "nodemailer";

// export const runtime = "nodejs"; 
// export const dynamic = "force-dynamic"; 

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const { name, email, phone, city, requirement, message } = body;

//     if (!name || !email || !phone) {
//       return new Response(
//         JSON.stringify({ success: false, message: "Missing fields" }),
//         { status: 400 }
//       );
//     }

//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 465,
//       secure: true,
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     const mailOptions = {
//       from: `"${name}" <${process.env.EMAIL_USER}>`,
//       replyTo: email,
//       to: "sunblesssolar@gmail.com",
//       subject: `New Contact Form Submission from ${name}`,
//       html: `
//         <h2 style="color:#F4A300;">New Contact Request</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <p><strong>City:</strong> ${city}</p>
//         <p><strong>Requirement:</strong> ${requirement}</p>
//         <p><strong>Message:</strong><br/>${message}</p>
//       `,
//     };

//     await transporter.sendMail(mailOptions);

//     return new Response(
//       JSON.stringify({ success: true, message: "Email sent successfully!" }),
//       {
//         status: 200,
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//   } catch (error) {
//     console.error("Mail Error:", error);
//     return new Response(
//       JSON.stringify({ success: false, message: error.message }),
//       {
//         status: 500,
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//   }
// }
