import { Layout } from "@/components/widgets/layout";
import { SessionDetail } from "@/components/widgets/session-detail";

export const metadata = {
  title: 'Fably',
  description: 'Fably',
}

export default function Page() {
  return (
    <Layout>
      <SessionDetail session_id="1"/>
    </Layout>
  )
}