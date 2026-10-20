import type { ReactNode } from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "react-email";

import emailTailwindConfig from "../tailwind.config";

interface ClearAirEmailShellProps {
  children: ReactNode;
  heading: string;
  preview: string;
}

export function ClearAirEmailShell({ children, heading, preview }: ClearAirEmailShellProps) {
  return (
    <Html lang="en" dir="ltr">
      <Tailwind config={emailTailwindConfig}>
        <Head />
        <Body className="m-0 bg-brand-soft px-3 py-8 font-sans text-brand-body">
          <Preview>{preview}</Preview>
          <Container
            lang="en"
            dir="ltr"
            className="mx-auto max-w-[600px] border border-solid border-brand-line bg-white"
          >
            <Section className="border-none border-t-[8px] border-solid border-t-brand-red px-7 pb-4 pt-7">
              <Text className="m-0 text-[25px] font-extrabold leading-[28px] tracking-[-0.5px] text-brand-ink">
                CLEAR AIR
              </Text>
              <Text className="m-0 mt-1 text-[10px] font-semibold tracking-[2.2px] text-brand-red">
                ASBESTOS REMOVAL
              </Text>
            </Section>

            <Section className="px-7 pb-8 pt-2">
              <Heading as="h1" className="m-0 mb-5 text-[30px] font-extrabold leading-[37px] tracking-[-0.6px] text-brand-ink">
                {heading}
              </Heading>
              {children}
            </Section>

            <Section className="bg-brand-soft px-7 pb-6 pt-6">
              <Hr className="m-0 mb-5 border-0 border-t border-solid border-t-brand-red" />
              <Text className="m-0 text-[12px] leading-[19px] text-brand-muted">
                Clear Air Asbestos Removal · Wellington Region, New Zealand
              </Text>
              <Text className="m-0 mt-2 text-[12px] leading-[19px] text-brand-muted">
                <Link className="font-semibold text-brand-ink underline" href="mailto:info@clearair.co.nz">
                  info@clearair.co.nz
                </Link>
                {" · "}
                <Link className="font-semibold text-brand-ink underline" href="tel:+64277755005">
                  027 775 5005
                </Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
