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
      <div style={styles.container}>
        <div style={styles.header}>
          <div style={styles.headerAccent}></div>
          <h1 style={styles.heading}>New Contact Inquiry</h1>
          <p style={styles.subheading}>You've received a new message from your website</p>
        </div>

        <div style={styles.card}>
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Contact Information</h2>
            
            <div style={styles.infoGrid}>
              <div style={styles.infoItem}>
                <div style={styles.label}>Full Name</div>
                <div style={styles.value}>{name}</div>
              </div>

              <div style={styles.infoItem}>
                <div style={styles.label}>Email Address</div>
                <a href={`mailto:${email}`} style={styles.emailLink}>{email}</a>
              </div>

              {company && (
                <div style={styles.infoItem}>
                  <div style={styles.label}>Company</div>
                  <div style={styles.value}>{company}</div>
                </div>
              )}

              {website && (
                <div style={styles.infoItem}>
                  <div style={styles.label}>Website</div>
                  <a href={website} style={styles.websiteLink} target="_blank" rel="noopener noreferrer">
                    {website}
                  </a>
                </div>
              )}

              {service && (
                <div style={styles.infoItem}>
                  <div style={styles.label}>Service Requested</div>
                  <div style={styles.value}>{service}</div>
                </div>
              )}

              {timeline && (
                <div style={styles.infoItem}>
                  <div style={styles.label}>Project Timeline</div>
                  <div style={styles.value}>{timeline}</div>
                </div>
              )}
            </div>
          </div>

          <div style={styles.divider}></div>

          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Message</h2>
            <div style={styles.messageBox}>
              <p style={styles.message}>{message}</p>
            </div>
          </div>
        </div>

        <div style={styles.footer}>
          <p style={styles.footerText}>
            This email was sent from your website contact form
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    backgroundColor: '#f8fafc',
    padding: '48px 20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    lineHeight: '1.6',
  },
  container: {
    maxWidth: '640px',
    margin: '0 auto',
  },
  header: {
    backgroundColor: '#ffffff',
    padding: '40px 32px 32px',
    borderRadius: '12px 12px 0 0',
    textAlign: 'center' as const,
    position: 'relative' as const,
    overflow: 'hidden' as const,
  },
  headerAccent: {
    position: 'absolute' as const,
    top: '0',
    left: '0',
    right: '0',
    height: '4px',
    background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)',
  },
  heading: {
    margin: '0 0 8px 0',
    fontSize: '28px',
    fontWeight: '700',
    color: '#0f172a',
    letterSpacing: '-0.02em',
  },
  subheading: {
    margin: '0',
    fontSize: '15px',
    color: '#64748b',
    fontWeight: '400',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '32px',
    borderRadius: '0 0 12px 12px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  },
  section: {
    marginBottom: '0',
  },
  sectionTitle: {
    margin: '0 0 20px 0',
    fontSize: '16px',
    fontWeight: '600',
    color: '#334155',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
  },
  infoGrid: {
    display: 'grid' as const,
    gap: '20px',
  },
  infoItem: {
    display: 'block' as const,
  },
  label: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#64748b',
    marginBottom: '6px',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.03em',
  },
  value: {
    fontSize: '16px',
    color: '#0f172a',
    fontWeight: '500',
  },
  emailLink: {
    fontSize: '16px',
    color: '#3b82f6',
    textDecoration: 'none',
    fontWeight: '500',
    display: 'inline-block' as const,
  },
  websiteLink: {
    fontSize: '16px',
    color: '#3b82f6',
    textDecoration: 'none',
    fontWeight: '500',
    display: 'inline-block' as const,
    wordBreak: 'break-all' as const,
  },
  divider: {
    height: '1px',
    backgroundColor: '#e2e8f0',
    margin: '32px 0',
  },
  messageBox: {
    backgroundColor: '#f8fafc',
    padding: '20px',
    borderRadius: '8px',
    borderLeft: '4px solid #3b82f6',
  },
  message: {
    margin: '0',
    fontSize: '15px',
    color: '#334155',
    lineHeight: '1.7',
    whiteSpace: 'pre-wrap' as const,
  },
  footer: {
    marginTop: '24px',
    textAlign: 'center' as const,
    padding: '0 20px',
  },
  footerText: {
    margin: '0',
    fontSize: '13px',
    color: '#94a3b8',
  },
};