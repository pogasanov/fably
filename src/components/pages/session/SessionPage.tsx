import { SessionDetail } from "@/components/widgets/session-detail";
import { Layout } from "@/components/widgets/layout";

export const SessionPage = ({ params }: { params: { session_id: string } }) => {
  return (
    <Layout>
      <div className="flex h-full">
        <div className="grow-[2]">
          <SessionDetail session_id={params.session_id}/>
        </div>

        <div className="grow-[1]">
          Images
        </div>
      </div>
    </Layout>
  )
}