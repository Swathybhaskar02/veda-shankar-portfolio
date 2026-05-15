import express from "express";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";
import { Resend } from "resend";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const inquiries = [];

const resend = new Resend(process.env.RESEND_API_KEY || "re_placeholder");

async function sendNotificationEmail(inquiry) {
  if (!process.env.RESEND_API_KEY) {
    console.log("📧 Email notification (Resend API key not configured):");
    console.log(`   Type: ${inquiry.type}`);
    console.log(`   From: ${inquiry.name} (${inquiry.email})`);
    return;
  }

  try {
    await resend.emails.send({
      from: "Veda Portfolio <notifications@vedashankar.in>",
      to: ["team@vedashankar.in"],
      subject: `New ${inquiry.type === "business" ? "Business Collaboration" : "Casting Inquiry"} from ${inquiry.name}`,
      html: `
        <div style="font-family: 'Helvetica Neue', sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #050505; color: #f7f5f0; padding: 32px;">
            <h1 style="font-size: 24px; margin: 0 0 8px; font-weight: 400;">
              New ${inquiry.type === "business" ? "Business Collaboration" : "Casting Inquiry"}
            </h1>
            <p style="color: #c69c6d; margin: 0; font-size: 14px;">
              Received ${new Date().toLocaleDateString("en-IN", { dateStyle: "long" })}
            </p>
          </div>
          <div style="padding: 32px; background: #0f0f0f; color: #f7f5f0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; color: #737373; width: 120px;">Name</td>
                <td style="padding: 12px 0;">${inquiry.name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #737373;">Email</td>
                <td style="padding: 12px 0;"><a href="mailto:${inquiry.email}" style="color: #c69c6d;">${inquiry.email}</a></td>
              </tr>
              ${inquiry.phone ? `<tr><td style="padding: 12px 0; color: #737373;">Phone</td><td style="padding: 12px 0;">${inquiry.phone}</td></tr>` : ""}
              ${inquiry.company ? `<tr><td style="padding: 12px 0; color: #737373;">Company</td><td style="padding: 12px 0;">${inquiry.company}</td></tr>` : ""}
              ${inquiry.project ? `<tr><td style="padding: 12px 0; color: #737373;">Project</td><td style="padding: 12px 0;">${inquiry.project}</td></tr>` : ""}
              ${inquiry.budget ? `<tr><td style="padding: 12px 0; color: #737373;">Budget</td><td style="padding: 12px 0;">${inquiry.budget}</td></tr>` : ""}
            </table>
            <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #1a1a1a;">
              <p style="color: #737373; margin: 0 0 8px; font-size: 14px;">Message</p>
              <p style="margin: 0; line-height: 1.6;">${inquiry.message}</p>
            </div>
          </div>
          <div style="padding: 24px; background: #050505; text-align: center;">
            <a href="http://localhost:5173/admin/inquiries" style="display: inline-block; padding: 12px 24px; background: #c69c6d; color: #050505; text-decoration: none; font-size: 14px;">
              View in Dashboard
            </a>
          </div>
        </div>
      `,
    });
    console.log("✅ Email notification sent successfully");
  } catch (error) {
    console.error("❌ Failed to send email:", error);
  }
}

app.post("/api/inquiries", async (req, res) => {
  const { type, name, email, phone, company, project, budget, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required" });
  }

  const inquiry = {
    id: uuidv4(),
    type: type || "business",
    name,
    email,
    phone: phone || null,
    company: company || null,
    project: project || null,
    budget: budget || null,
    message,
    status: "new",
    createdAt: new Date().toISOString(),
    notes: "",
  };

  inquiries.unshift(inquiry);

  await sendNotificationEmail(inquiry);

  console.log(`📩 New ${inquiry.type} inquiry from ${inquiry.name}`);

  res.status(201).json({ success: true, inquiry });
});

app.get("/api/inquiries", (req, res) => {
  const { status, type } = req.query;

  let filtered = [...inquiries];

  if (status && status !== "all") {
    filtered = filtered.filter((i) => i.status === status);
  }

  if (type && type !== "all") {
    filtered = filtered.filter((i) => i.type === type);
  }

  res.json({ inquiries: filtered, total: inquiries.length });
});

app.get("/api/inquiries/:id", (req, res) => {
  const inquiry = inquiries.find((i) => i.id === req.params.id);

  if (!inquiry) {
    return res.status(404).json({ error: "Inquiry not found" });
  }

  res.json({ inquiry });
});

app.patch("/api/inquiries/:id", (req, res) => {
  const index = inquiries.findIndex((i) => i.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({ error: "Inquiry not found" });
  }

  const { status, notes } = req.body;

  if (status) inquiries[index].status = status;
  if (notes !== undefined) inquiries[index].notes = notes;

  res.json({ success: true, inquiry: inquiries[index] });
});

app.delete("/api/inquiries/:id", (req, res) => {
  const index = inquiries.findIndex((i) => i.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({ error: "Inquiry not found" });
  }

  inquiries.splice(index, 1);

  res.json({ success: true });
});

app.get("/api/stats", (req, res) => {
  const stats = {
    total: inquiries.length,
    new: inquiries.filter((i) => i.status === "new").length,
    contacted: inquiries.filter((i) => i.status === "contacted").length,
    converted: inquiries.filter((i) => i.status === "converted").length,
    archived: inquiries.filter((i) => i.status === "archived").length,
    business: inquiries.filter((i) => i.type === "business").length,
    casting: inquiries.filter((i) => i.type === "casting").length,
  };

  res.json({ stats });
});

app.listen(PORT, () => {
  console.log(`🎬 Portfolio API running on http://localhost:${PORT}`);
  console.log(`📊 Admin dashboard: http://localhost:5173/admin/inquiries`);
});
