import {
  Button,
  Container,
  Html,
  Head,
  Font,
  Heading,
  Text,
  Link,
  Hr,
  Tailwind,
  Body,
  Section,
  Img,
} from "@react-email/components";
import * as React from "react";

export default function EmailVerification() {
  return (
    <Tailwind>
      <Html>
        <Head>
          <Font
            fontFamily="Nunito"
            fallbackFontFamily="Verdana"
            webFont={{
              url: "https://fonts.gstatic.com/s/nunito/v26/XRXX3I6Li01BKofIMNaHRs71cA.woff2",
              format: "woff2",
            }}
            fontWeight={400}
            fontStyle="normal"
          />
        </Head>
        <Body className="mx-auto my-auto bg-white px-2 font-sans">
          <Container className="mx-auto my-[40px] max-w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]">
            <Section className="mt-[32px] text-center">
              <Img
                src={`https://rfnjhdrqrvrzticpkmiz.supabase.co/storage/v1/object/public/assets/logo_black.svg`}
                width="60"
                height="60"
                alt="Vercel"
                className="mx-auto my-0"
              />
              <Heading className="text-center" as="h3">
                Welcome to Elso Manager
              </Heading>
            </Section>
            <Heading as="h4">Hi Soheyl Delshad,</Heading>
            <Text>
              We're excited to have you on board! To get started, please verify
              your email address by clicking the link below:
            </Text>
            <Button className="my-5">
              <Link href="">Verify Your Email</Link>
            </Button>
            <Text>
              This helps us ensure we’ve got the right address and lets you
              access all the great features waiting for you.
            </Text>

            <Text>Thanks for joining us!</Text>

            <Text>Best,</Text>
            <Text>The Elso Team</Text>
            <Hr />
            <Text className="text-xs text-gray-400">
              If you didn’t sign up for an account, you can safely ignore this
              email.
            </Text>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
}
