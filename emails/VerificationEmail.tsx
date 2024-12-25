import {
    Html,
    Head,
    Preview,
    Heading,
    Row,
    Section,
    Text,
    Button,
  } from "@react-email/components";
import Link from "next/link";
  
  interface VerificationEmailProps {
    username: string;
    otp: string;
  }
  
  export default function VerificationEmail({
    username,
    otp,
  }: VerificationEmailProps) {
    return (
      <Html>
        <Head>
          <title>Verification Code</title>
          {/* Fonts should be included via a `<link>` tag for web-safe usage */}
          <Link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Preview>Here is your verification code: {otp}</Preview>
        <Section style={styles.section}>
          <Row>
            <Heading as="h2" style={styles.heading}>
              Hello {username},
            </Heading>
          </Row>
          <Row>
            <Text style={styles.text}>
              Thank you for registering. Please use the following verification
              code to complete your registration:
            </Text>
          </Row>
          <Row>
            <Text style={styles.otp}>{otp}</Text>
          </Row>
          <Row>
            <Text style={styles.text}>
              If you did not request this code, please ignore this email.
            </Text>
          </Row>
          <Row>
            <Button
              href={`http://localhost:3000/verify/${username}`}
              style={styles.button}
            >
              Verify Here
            </Button>
          </Row>
        </Section>
      </Html>
    );
  }
  
  const styles = {
    section: {
      padding: "20px",
      backgroundColor: "#f9f9f9",
      borderRadius: "8px",
      fontFamily: "'Roboto', sans-serif",
    },
    heading: {
      fontSize: "20px",
      fontWeight: "bold",
      marginBottom: "20px",
    },
    text: {
      fontSize: "16px",
      margin: "10px 0",
      lineHeight: "1.5",
      color: "#333",
    },
    otp: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#007bff",
      textAlign: "center",
      margin: "20px 0",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#007bff",
      color: "#fff",
      textDecoration: "none",
      borderRadius: "5px",
      fontSize: "16px",
    },
  };
  