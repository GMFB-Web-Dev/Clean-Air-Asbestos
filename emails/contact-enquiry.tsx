import { Button, Heading, Section, Text } from "react-email";

import { ClearAirEmailShell } from "./components/clear-air-email-shell";

export interface ContactEnquiryEmailProps {
  email: string;
  message: string;
  name: string;
}

export function ContactEnquiryEmail({ email, message, name }: ContactEnquiryEmailProps) {
  const replyHref = `mailto:${email}?subject=${encodeURIComponent("Re: Your Clear Air enquiry")}`;

  return (
    <ClearAirEmailShell
      heading="New website enquiry"
      preview={`New contact form enquiry from ${name}.`}
    >
      <Text className="m-0 mb-6 text-[16px] leading-[25px] text-brand-body">
        A new enquiry has arrived through the Clear Air website contact form.
      </Text>

      <Heading as="h2" className="m-0 mb-3 text-[18px] font-bold leading-[24px] text-brand-ink">
        Contact details
      </Heading>
      <Section className="border border-solid border-brand-line bg-brand-soft px-5 py-4">
        <Text className="m-0 text-[12px] font-semibold uppercase tracking-[1px] text-brand-red">Name</Text>
        <Text className="m-0 mt-1 text-[16px] leading-[24px] text-brand-ink">{name}</Text>
        <Text className="m-0 mt-4 text-[12px] font-semibold uppercase tracking-[1px] text-brand-red">Email</Text>
        <Text className="m-0 mt-1 break-words text-[16px] leading-[24px] text-brand-ink">{email}</Text>
      </Section>

      <Heading as="h2" className="m-0 mb-3 mt-7 text-[18px] font-bold leading-[24px] text-brand-ink">
        Message
      </Heading>
      <Section className="border-none border-l-4 border-solid border-l-brand-red bg-brand-soft px-5 py-4">
        <Text className="m-0 whitespace-pre-wrap break-words text-[16px] leading-[25px] text-brand-body">
          {message}
        </Text>
      </Section>

      <Button
        href={replyHref}
        className="mt-7 box-border inline-block bg-brand-red px-6 py-3 text-center text-[15px] font-bold text-white no-underline"
      >
        Reply to {name}
      </Button>
    </ClearAirEmailShell>
  );
}

ContactEnquiryEmail.PreviewProps = {
  email: "alex@example.com",
  message: "I would like to arrange an asbestos assessment for a residential property in Wellington.",
  name: "Alex Morgan",
} satisfies ContactEnquiryEmailProps;

export default ContactEnquiryEmail;
