type ContactEmailProps = {
  name: string;
  email: string;
  company?: string;
  website?: string;
  service?: string;
  timeline?: string;
  message: string;
};

export default function ContactEmailTemplate({
  name,
  email,
  company,
  website,
  service,
  timeline,
  message,
}: ContactEmailProps) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.heading}>New Contact Form Submission</h2>

        <div style={styles.row}>
          <strong>Name:</strong> {name}
        </div>

        <div style={styles.row}>
          <strong>Email:</strong> {email}
        </div>

        {company && (
          <div style={styles.row}>
            <strong>Company:</strong> {company}
          </div>
        )}

        {website && (
          <div style={styles.row}>
            <strong>Website:</strong>{" "}
            <a href={website} style={styles.link}>
              {website}
            </a>
          </div>
        )}

        {service && (
          <div style={styles.row}>
            <strong>Service:</strong> {service}
          </div>
        )}

        {timeline && (
          <div style={styles.row}>
            <strong>Timeline:</strong> {timeline}
          </div>
        )}

        <div style={styles.messageBox}>
          <strong>Message</strong>
          <p style={styles.message}>{message}</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    backgroundColor: "#f4f6f8",
    padding: "40px 0",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor: "#ffffff",
    padding: "32px",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  },
  heading: {
    marginBottom: "24px",
    fontSize: "22px",
    color: "#111827",
  },
  row: {
    marginBottom: "12px",
    fontSize: "14px",
    color: "#374151",
  },
  link: {
    color: "#2563eb",
    textDecoration: "none",
  },
  messageBox: {
    marginTop: "24px",
    paddingTop: "16px",
    borderTop: "1px solid #e5e7eb",
  },
  message: {
    marginTop: "8px",
    fontSize: "14px",
    lineHeight: "1.6",
    color: "#374151",
    whiteSpace: "pre-wrap",
  },
};
