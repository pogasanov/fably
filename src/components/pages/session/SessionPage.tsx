import { Container } from "@/components/shared/ui";
import { SessionDetail } from "@/components/widgets/session-detail";
import { Layout } from "@/components/widgets/layout";

export const SessionPage = () => {
  return (
    <Layout>
      <div className="flex h-full">
        <div className="grow-[2]">
          <SessionDetail/>
        </div>

        <div className="grow-[1]">
          Images
        </div>
      </div>
    </Layout>
  )
}